import { WorkerOutputs } from 'rete/types/core/data'
import io from 'socket.io'
import { MagickComponent } from '../../engine'

import {
  IRunContextEditor,
  MagickNode,
  MagickWorkerInputs,
  ModuleContext,
  SpellInterface,
} from '../../types'
import { MagickConsole } from '../consolePlugin/MagickConsole'

export type SocketPluginArgs = {
  server?: boolean
  client?: any
  emit?: (message: Record<string, unknown>) => void
}

export type SocketData = {
  result: unknown
  output?: WorkerOutputs
  input?: MagickWorkerInputs
  error?: {
    message: string
    stack: string
  }
}

export interface RemoteIRunContextEditor extends IRunContextEditor {
  currentSpell: SpellInterface
}

function install(
  editor: RemoteIRunContextEditor,
  // Need to better type the feathers client here
  { server = false, client, emit }: SocketPluginArgs
) {
  const subscriptionMap = new Map()

  if (!server) {
    editor.on(
      'componentRegister',
      (component: MagickComponent<Promise<{ output: unknown } | void>>) => {
        const builder = component.builder

        component.builder = (node: MagickNode) => {
          const currentSpell = editor.currentSpell

          // this is the shared event for the socket connection.
          const event = `${currentSpell.id}-${node.id}`

          // create a new console for the node
          node.console = new MagickConsole({
            node: node as unknown as MagickNode,
            component,
            editor,
            server,
          })

          // don't bother making a subscription if we already have one
          if (subscriptionMap.has(node.id)) return

          client.service('agents').on('spell', (data: any) => {
            // extract the right data from the socket
            const { input, output, error, result, eventType } = data

            // make sure we are only handling the events for this node
            if (eventType !== event) return

            // make sure errors are handled in the flow.
            if (error) {
              node.console?.error(data)
              return
            }

            // format the message to be logged
            const message = {
              outputs: output,
              inputs: input,
              result: result,
            }

            // log the message through the console log plugin
            node.console.log(message)

            // todo might need to not hardcode the output to "output"
            // could be more elegant
            if (node.data.sendToPlaytest && output?.output) {
              // note for later. output is a property from the output node and that is where it is defined
              editor.context.sendToPlaytest(output?.output as string)
            }
          })
          // set the subscription into the map so we can destroy it later
          // subscriptionMap.set(node.id, unsubscribe)

          // call the original builder now
          builder.call(component, node)
        }

        // destroy the worker when the node is removed
      }
    )
  }

  // if we are on the server, we want to emit the data to the client from the worker
  // the event is relayed through a channel matcher for the type of agent event and relayed.
  if (server && emit) {
    editor.on(
      'componentregister',
      (component: MagickComponent<Promise<{ output: unknown } | void>>) => {
        const worker = component.worker

        component.worker = async (
          node,
          inputs,
          outputs,
          context: ModuleContext,
          ...args
        ) => {
          // this is the shared event type for the relayed connection.
          const eventType = `${context.currentSpell.id}-${node.id}`

          if (server) {
            try {
              const result = await worker.apply(component, [
                node,
                inputs,
                outputs,
                context,
                ...args,
              ])

              // emit the event, along with the evet type to be picked up by the client
              // the event namespace is determined in the smit function
              // the event is agent:agentId:spell since we are in the spellrunnner
              emit({
                eventType,
                nodeId: node.id,
                output: result,
                input: inputs,
              })

              return result
            } catch (err: any) {
              // this emits the error to be handled by the client plugin
              emit({
                output: null,
                eventType,
                input: inputs,
                error: {
                  message: err.message,
                  stack: err.stack,
                },
              })

              throw err
            }
          }
        }
      }
    )
  }
}

const defaultExport = {
  name: 'remotePlugin',
  install,
}

export default defaultExport

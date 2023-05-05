---
id: "Task"
title: "Class: Task"
sidebar_label: "Task"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`Task`**

  ↳ [`MagickTask`](../interfaces/MagickTask.md)

## Constructors

### constructor

• **new Task**(`inputs`, `component`, `node`, `worker`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`MagickWorkerInputs`](../#magickworkerinputs) |
| `component` | [`MagickComponent`](MagickComponent.md)<`unknown`\> |
| `node` | `NodeData` |
| `worker` | `TaskWorker` |

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:46](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L46)

## Properties

### closed

• **closed**: `string`[]

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:44](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L44)

___

### component

• **component**: [`MagickComponent`](MagickComponent.md)<`unknown`\>

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:40](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L40)

___

### inputs

• **inputs**: [`MagickWorkerInputs`](../#magickworkerinputs)

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:39](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L39)

___

### next

• **next**: `TaskRef`[]

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:42](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L42)

___

### node

• **node**: `NodeData`

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:38](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L38)

___

### outputData

• **outputData**: ``null`` \| `Record`<`string`, `unknown`\>

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:43](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L43)

___

### worker

• **worker**: `TaskWorker`

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:41](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L41)

## Methods

### clone

▸ **clone**(`root?`, `oldTask`, `newTask`): [`Task`](Task.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `root` | `boolean` | `true` |
| `oldTask` | [`MagickTask`](../interfaces/MagickTask.md) | `undefined` |
| `newTask` | [`MagickTask`](../interfaces/MagickTask.md) | `undefined` |

#### Returns

[`Task`](Task.md)

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:250](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L250)

___

### getInputByNodeId

▸ **getInputByNodeId**(`node`, `fromSocket`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `any` |
| `fromSocket` | `any` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:93](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L93)

___

### getInputFromConnection

▸ **getInputFromConnection**(`socketKey`): ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `socketKey` | `string` |

#### Returns

``null``

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:78](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L78)

___

### getInputs

▸ **getInputs**(`type`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TaskOutputTypes`](../#taskoutputtypes) |

#### Returns

`string`[]

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:69](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L69)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:127](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L127)

___

### run

▸ **run**(`data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `NodeData` |
| `options` | `RunOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/shared/src/plugins/taskPlugin/task.ts:132](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugins/taskPlugin/task.ts#L132)
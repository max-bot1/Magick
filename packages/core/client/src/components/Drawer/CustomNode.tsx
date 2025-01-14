import React from 'react'
import Typography from '@mui/material/Typography'
import { NodeModel } from '@minoru/react-dnd-treeview'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { TypeIcon } from './TypeIcon'
import styles from './menu.module.css'

type Props = {
  node: NodeModel<CustomData>
  depth: number
  isOpen: boolean
  onToggle: (id: NodeModel['id']) => void
}

type CustomData = {
  fileType: string
  fileSize: string
}

export const CustomNode: React.FC<Props> = props => {
  const { droppable, data }: any = props.node
  const indent = props.depth * 24

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    props.onToggle(props.node.id)
  }

  return (
    <div
      className={`tree-node ${styles.root}`}
      style={{ paddingInlineStart: indent }}
    >
      <div
        className={`${styles.expandIconWrapper} ${
          props.isOpen ? styles.isOpen : ''
        }`}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <ChevronRightIcon />
          </div>
        )}
      </div>
      <div>
        {/* @ts-ignore */}
        <TypeIcon
          droppable={droppable}
          fileType={data ? data.fileType : props.node.fileType}
        />
      </div>
      <div className={styles.labelGridItem}>
        <Typography
          variant="body1"
          sx={{
            cursor: 'pointer',
            marginLeft: '8px',
          }}
        >
          {props.node.text}
        </Typography>
      </div>
    </div>
  )
}

import React from 'react'
import { Text } from '@consta/uikit/Text'
import { TreeNode } from 'rc-tree'

import type { Node } from './Tree'

import styles from './styles.module.css'
export type Node = {
  key: string
  title: string
  visible?: boolean
  children?: Node[]
  disableCheckbox?: boolean
}

const Title: React.FC<{ element: string }> = ({ element }) => {
  if (element === 'Layout') {
    return (
      <div className={styles.treeNode}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.48828 3.96875H10.4629V4.94531H1.48828V3.96875ZM2.5625 11C2.05469 11 1.66732 10.8665 1.40039 10.5996C1.13346 10.3327 1 9.94531 1 9.4375V2.5625C1 2.05469 1.13346 1.66732 1.40039 1.40039C1.66732 1.13346 2.05469 1 2.5625 1H9.4375C9.94531 1 10.3327 1.13346 10.5996 1.40039C10.8665 1.66732 11 2.05469 11 2.5625V9.4375C11 9.94531 10.8665 10.3327 10.5996 10.5996C10.3327 10.8665 9.94531 11 9.4375 11H2.5625ZM2.5625 9.92578H9.4375C9.64583 9.92578 9.7793 9.89648 9.83789 9.83789C9.89648 9.7793 9.92578 9.64583 9.92578 9.4375V2.5625C9.92578 2.35417 9.89648 2.2207 9.83789 2.16211C9.7793 2.10352 9.64583 2.07422 9.4375 2.07422H2.5625C2.35417 2.07422 2.2207 2.10352 2.16211 2.16211C2.10352 2.2207 2.07422 2.35417 2.07422 2.5625V9.4375C2.07422 9.64583 2.10352 9.7793 2.16211 9.83789C2.2207 9.89648 2.35417 9.92578 2.5625 9.92578Z"
            fill="#00395C"
            fillOpacity="0.8"
          />
        </svg>
        <Text size="xs" view="primary" className="m-l-2xs">
          {element}
        </Text>
      </div>
    )
  }

  return (
    <div className={styles.treeNode}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.20238 3.20238L6.02976 5.375L3.82738 3.20238L6.02976 1L8.20238 3.20238ZM11 6L8.82738 8.20238L6.65476 6L8.82738 3.82738L11 6ZM5.40476 6L3.20238 8.20238L1 6L3.20238 3.82738L5.40476 6ZM8.20238 8.82738L6.02976 11L3.82738 8.82738L6.02976 6.625L8.20238 8.82738Z"
          fill="#0078D2"
        />
      </svg>
      <Text size="xs" view="primary" className="m-l-2xs">
        {element}
      </Text>
    </div>
  )
}

export const customNode = (params: Node & { handleClick: (key: string) => void }) => {
  const { title, key, visible = true, children, disableCheckbox, handleClick } = params
  return (
    <TreeNode
      key={key}
      title={<Title element={title} />}
      disableCheckbox={disableCheckbox || !visible}>
      {!!children && !!visible && children.map(node => customNode({ handleClick, ...node }))}
    </TreeNode>
  )
}

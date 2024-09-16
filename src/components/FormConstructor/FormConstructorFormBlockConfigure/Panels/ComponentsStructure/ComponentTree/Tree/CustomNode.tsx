import React from 'react'
import { Text } from '@consta/uikit/Text'

import { ElementsIcon, LayoutIcon } from '../../ElementIcons'

import styles from './styles.module.css'
export type Node = {
  key: string
  title: string
  visible?: boolean
  children?: Node[]
  disableCheckbox?: boolean
}

export const Title: React.FC<Node> = ({ title }) => {
  return (
    <div className={styles.treeNode}>
      {title === 'Layout' ? <LayoutIcon /> : <ElementsIcon />}
      <Text size="xs" view="primary" className="m-l-2xs">
        {title}
      </Text>
    </div>
  )
}

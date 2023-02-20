import React, { FC } from 'react'
import { IComponentCard } from './types'
import { Text } from '@consta/uikit/Text'
import styles from './styles.module.css'

export const ComponentCard: FC<IComponentCard> = ({ name }) => {
  return (
    <div className={styles.componentCard}>
      <Text>{name}</Text>
    </div>
  )
}

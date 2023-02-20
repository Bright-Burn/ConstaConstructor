import React, { FC } from 'react'
import { IComponentCard } from './types'
import { Text } from '@consta/uikit/Text'
import styles from './styles.module.css'

export const ComponentCard: FC<IComponentCard> = ({ name, formElementType }) => {
  const onDragFormElementStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('FormElementType', formElementType)
  }

  return (
    <div className={`${styles.componentCard} borderCard`}>
      <Text draggable={true} onDragStart={onDragFormElementStart}>
        {name}
      </Text>
    </div>
  )
}

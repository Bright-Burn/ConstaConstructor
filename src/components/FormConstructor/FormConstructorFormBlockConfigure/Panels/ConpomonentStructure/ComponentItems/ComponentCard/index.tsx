import React, { FC } from 'react'
import { IComponentCard } from './types'
import { Text } from '@consta/uikit/Text'
import styles from './styles.module.css'

export const ComponentCard: FC<IComponentCard> = ({ name, formElementType, groupElementType }) => {
  const onDragFormElementStart = (event: React.DragEvent) => {
    if (formElementType) {
      event.dataTransfer.setData('FormElementType', formElementType)
    } else if (groupElementType) {
      event.dataTransfer.setData('FormGroupsType', groupElementType)
    }
  }

  return (
    <div className={`${styles.componentCard} borderCard`}>
      <Text draggable={true} onDragStart={onDragFormElementStart}>
        {name}
      </Text>
    </div>
  )
}

import type { FC } from 'react'
import React from 'react'
import { Text } from '@consta/uikit/Text'

import { setDraggableBaseComponent, useBaseComponentsDispatch } from '../../../../../../store'

import type { IBaseComponentCard } from './types'
import { UpdateBaseComponentButton } from './UpdateBaseComponentButton'

import styles from './styles.module.css'

export const BaseComponentsCard: FC<IBaseComponentCard> = baseComponent => {
  const dispatch = useBaseComponentsDispatch()

  const onDragFormElementStart = (event: React.DragEvent) => {
    dispatch(setDraggableBaseComponent(baseComponent))

    // Просто чтобы обозначить, что перетягиваю базовый компонент, надо будет переделать
    event.dataTransfer.setData('BaseComponent', 'true')
  }

  return (
    <div className={styles.componentCard} draggable={true} onDragStart={onDragFormElementStart}>
      <UpdateBaseComponentButton baseComponent={baseComponent} />
      <Text className={styles.text}>{baseComponent.description}</Text>
    </div>
  )
}

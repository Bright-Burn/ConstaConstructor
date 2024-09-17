import type { FC } from 'react'
import React from 'react'
import { Text } from '@consta/uikit/Text'

import { setDraggableBaseComponent, useBaseComponentsDispatch } from '../../../../../../store'
import { ElementsIcon } from '../../../ElementIcons'

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
    <div
      className={styles.componentCardContainer}
      draggable={true}
      onDragStart={onDragFormElementStart}>
      <div className={styles.componentCard}>
        <ElementsIcon />

        <Text className={styles.text} size="xs" view="primary">
          {baseComponent.description}
        </Text>
      </div>
      <UpdateBaseComponentButton baseComponent={baseComponent} />
    </div>
  )
}

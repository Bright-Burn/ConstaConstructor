import type { FC } from 'react'
import React from 'react'
import { IconPicture } from '@consta/icons/IconPicture'
import { Text } from '@consta/uikit/Text'

import { setDraggableBaseComponent } from '../../../../../../store'
import { useBaseComponentsDispatch } from '../../../../../../store/baseComponentsItems'

import type { IBaseComponentCard } from './types'

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
      <Text className={styles.text} size="xs">
        {baseComponent.description}
      </Text>
      <div className={styles.imgBox}>
        <IconPicture view="ghost" className={styles.img} />
      </div>
    </div>
  )
}

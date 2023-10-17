import React, { FC } from 'react'
import { IBaseComponentCard } from './types'
import styles from './styles.module.css'
import { Text } from '@consta/uikit/Text'
import { useBaseComponentsDispatch } from '../../../../../../store/baseComponentsItems'
import { setDraggableBaseComponent } from '../../../../../../store'
import { IconPicture } from '@consta/icons/IconPicture'

export const BaseComponentsCard: FC<IBaseComponentCard> = baseComponent => {
  const dispatch = useBaseComponentsDispatch()

  const onDragFormElementStart = (event: React.DragEvent) => {
    dispatch(setDraggableBaseComponent(baseComponent))

    // Просто чтобы обозначить, что перетягиваю базовый компонент, надо будет переделать
    event.dataTransfer.setData('BaseComponent', 'true')
  }

  return (
    <div
      className={`${styles.componentCard}`}
      draggable={true}
      onDragStart={onDragFormElementStart}
    >
      <Text className={styles.text} size='xs'>
        {baseComponent.description}
      </Text>
      <div className={styles.imgBox}>
        <IconPicture view='ghost' className={styles.img} />
      </div>
    </div>
  )
}

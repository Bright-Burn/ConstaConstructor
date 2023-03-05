import React, { FC, useState } from 'react'
import { IBaseComponentCard } from './types'
import styles from './styles.module.css'
import { Text } from '@consta/uikit/Text'
import { Collapse } from '@consta/uikit/Collapse'
import {
  useBaseComponentsDispatch,
  baseComponentsSlice,
} from '../../../../../store/baseComponentsItems'

export const BaseComponentsCard: FC<IBaseComponentCard> = baseComponent => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const dispatch = useBaseComponentsDispatch()

  const onDragFormElementStart = (event: React.DragEvent) => {
    dispatch(baseComponentsSlice.actions.setDraggableBaseComponent({ baseComponent }))

    // Просто чтобы обозначить, что перетягиваю базовый компонент, надо будет переделать
    event.dataTransfer.setData('BaseComponent', 'true')
  }

  return (
    <div
      className={`${styles.componentCard} borderCard`}
      draggable={true}
      onDragStart={onDragFormElementStart}
    >
      <Collapse
        size={'xs'}
        label={<Text>{baseComponent.name}</Text>}
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
      >
        {<Text size={'xs'}>{baseComponent.description}</Text>}
      </Collapse>
    </div>
  )
}

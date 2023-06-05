import React, { FC, useState } from 'react'
import { IBaseComponentCard } from './types'
import styles from './styles.module.css'
import {
  baseComponentsSlice,
  useBaseComponentsDispatch,
} from '../../../../../../store/baseComponentsItems'
import { BaseComponentBlockItems } from '../BaseComponentBlockItems/BaseComponentBlockItems'

export const BaseComponentsCard: FC<IBaseComponentCard> = baseComponent => {
  const dispatch = useBaseComponentsDispatch()

  const onDragFormElementStart = (event: React.DragEvent) => {
    dispatch(baseComponentsSlice.actions.setDraggableBaseComponent({ baseComponent }))

    // Просто чтобы обозначить, что перетягиваю базовый компонент, надо будет переделать
    event.dataTransfer.setData('BaseComponent', 'true')
  }

  return (
    <div className={styles.baseComponents}>
      <BaseComponentBlockItems
        baseComponent={baseComponent}
        onDragFormElementStart={onDragFormElementStart}
        label={baseComponent.name}
      />
    </div>
  )
}

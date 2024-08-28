import type { FC } from 'react'
import React, { useState } from 'react'

import { reorderFormElement, useAppDispatch, useAppSelector } from '../../store'

import type { IDragbleleLayer } from './types'

import css from './styles.module.css'
export const DragbleLayer: FC<IDragbleleLayer> = ({ children, className, elId }) => {
  const [isDragLeft, setIsDragLeft] = useState(false)
  const [isDragRight, setIsDragRight] = useState(false)
  const dispatch = useAppDispatch()
  const selectedEl = useAppSelector(state => state.formConstructor.selectedView)
  const onDragStart = (event: React.DragEvent) => {
    event.stopPropagation()
    event.dataTransfer.setData('draggedElId', elId)
  }

  const onDragLeave = () => {
    setIsDragLeft(false)
    setIsDragRight(false)
  }
  const onDrop = (event: React.DragEvent, left: boolean) => {
    setIsDragLeft(false)
    const draggedELId = event.dataTransfer.getData('draggedElId')
    dispatch(
      reorderFormElement({
        elementId: draggedELId,
        parentId: elId,
        selectedElId: selectedEl ? selectedEl.elementId : undefined,
        left,
      }),
    )
  }
  const onDropLeft = (event: React.DragEvent) => {
    onDrop(event, true)
  }
  const onDropRight = (event: React.DragEvent) => {
    onDrop(event, false)
  }
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation()
    event.preventDefault()
    const target = event.target as HTMLElement
    const nativeEvent = event.nativeEvent
    const layerX = nativeEvent.offsetX

    if (layerX < target.offsetWidth / 2) {
      setIsDragRight(false)
      setIsDragLeft(true)
    } else {
      setIsDragRight(true)
      setIsDragLeft(false)
    }
  }
  const onDropToDragbleLayer = (event: React.DragEvent) => {
    event.stopPropagation()
    onDragLeave()
    const target = event.target as HTMLElement
    const nativeEvent = event.nativeEvent
    const layerX = nativeEvent.layerX
    let offset = target.offsetWidth
    if (target.tagName === 'svg') {
      offset = target.clientWidth
    }
    if (layerX < 8) {
      onDropLeft(event)
      console.log('left drop')
    } else if (layerX > offset - 8) {
      onDropRight(event)
      console.log('right drop')
    }
  }
  return (
    <div
      className={`${className} ${css.dragbleContainer} ${isDragLeft ? css.draggingLeft : ''} ${isDragRight ? css.draggingRight : ''}`}
      draggable={true}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDropToDragbleLayer}
      onDragStart={onDragStart}>
      {children}
    </div>
  )
}

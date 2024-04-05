import type { FC } from 'react'
import { useState } from 'react'

import { reorderFormElement, useAppDispatch, useAppSelector } from '../../store'

import type { IDragbleleLayer } from './types'

import css from './styles.module.css'
export const DragbleLayer: FC<IDragbleleLayer> = ({ children, className, elId }) => {
  const [isDragging, setIsDragging] = useState(false)
  const dispatch = useAppDispatch()
  const selectedEl = useAppSelector(state => state.formConstructor.selectedElement)

  const onDragStart = (event: React.DragEvent) => {
    event.stopPropagation()
    event.dataTransfer.setData('draggedElId', elId)
  }
  const onDragEnter = (event: React.DragEvent) => {
    setIsDragging(true)
    event.stopPropagation()
  }
  const onDragEnd = () => {
    setIsDragging(false)
  }
  const onDragLeave = () => {
    setIsDragging(false)
  }
  const onDrop = (event: React.DragEvent, left: boolean) => {
    setIsDragging(false)
    const draggedELId = event.dataTransfer.getData('draggedElId')
    event.stopPropagation()

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
  return (
    <div
      className={`${className} ${css.dragbleContainer}`}
      draggable={true}
      onDragStart={onDragStart}>
      <div
        className={`${css.right} ${isDragging ? css.dragging : ''} `}
        onDrop={onDropRight}
        onDragEnd={onDragEnd}
        onDragLeave={onDragLeave}
        onDragEnter={onDragEnter}
      />
      <div
        className={`${css.left} ${isDragging ? css.dragging : ''} `}
        onDragEnd={onDragEnd}
        onDragLeave={onDragLeave}
        onDragEnter={onDragEnter}
        onDrop={onDropLeft}
      />{' '}
      {children}{' '}
    </div>
  )
}

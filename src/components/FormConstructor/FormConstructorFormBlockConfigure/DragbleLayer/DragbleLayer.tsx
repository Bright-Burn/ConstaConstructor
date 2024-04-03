import type { FC } from 'react'
import { useRef, useState } from 'react'

import { reorderingFormElement, useAppDispatch } from '../../store'

import type { IDragbleleLayer } from './types'

import css from './styles.module.css'
export const DragbleLayer: FC<IDragbleleLayer> = ({ children, className, elId }) => {
  const [isDragging, setIsDragging] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const dispatch = useAppDispatch()

  const onDragStart = (event: React.DragEvent) => {
    event.stopPropagation()
    console.log('L18 dragStart ===', elId)
    event.dataTransfer.setData('BaseComponent', elId)
  }
  const onDragEnter = (event: React.DragEvent) => {
    setIsDragging(true)
    event.stopPropagation()
    console.log('L14 enter ===', 'enter')
  }
  const onDragEnd = () => {
    console.log('L17  ===', 'end')
    setIsDragging(false)
  }
  const onDragLeave = () => {
    console.log('L17 leave ===', 'leave')
    setIsDragging(false)
  }
  const onDrop = (event: React.DragEvent) => {
    console.log('L25 drop ===', event.dataTransfer.getData('BaseComponent'))
    setIsDragging(false)
    const draggedELId = event.dataTransfer.getData('BaseComponent')
    event.stopPropagation()

    dispatch(
      reorderingFormElement({
        elementId: draggedELId,
        parentId: elId,
      }),
    )
  }

  return (
    <div
      className={`${className} ${css.dragbleContainer}`}
      draggable={true}
      onDragStart={onDragStart}>
      <div
        className={`${css.right} ${isDragging ? css.dragging : ''} `}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        onDragLeave={onDragLeave}
        onDragEnter={onDragEnter}
      />
      <div
        ref={ref}
        className={`${css.left} ${isDragging ? css.dragging : ''} `}
        onDragEnd={onDragEnd}
        onDragLeave={onDragLeave}
        onDragEnter={onDragEnter}
        onDrop={onDrop}
      />{' '}
      {children}{' '}
    </div>
  )
}

import type { FC } from 'react'
import { useRef, useState } from 'react'
import uuid from 'react-uuid'

import type { IFormElementBadge } from '../../coreTypes'
import { FormElementDictTypes } from '../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../store'

import type { IDragbleleLayer } from './types'

import css from './styles.module.css'
export const DragbleLayer: FC<IDragbleleLayer> = ({ children, className, elId }) => {
  const [isDragging, setIsDragging] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const dispatch = useAppDispatch()

  const onDragStart = () => {
    const newBadge: IFormElementBadge = {
      id: uuid(),
      type: FormElementDictTypes.Badge,
      props: {
        props: {
          label: 'Badge',
          form: 'default',
          size: 's',
          status: 'success',
          view: 'filled',
          className: '',
          baseProps: {},
        },
        type: 'Badge',
      },
    }

    dispatch(setDraggableElement({ element: newBadge }))
  }
  const onDragEnter = (event: React.DragEvent) => {
    event.stopPropagation()
    event.preventDefault()
    setIsDragging(true)
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
  const onDrop = () => {
    console.log('L25 drop ===', 'drop')
    setIsDragging(false)
  }

  return (
    <div className={`${className} ${css.dragbleContainer}`} draggable={true}>
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

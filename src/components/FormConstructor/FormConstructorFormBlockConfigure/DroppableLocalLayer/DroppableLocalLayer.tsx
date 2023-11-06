import React, { FC, useEffect, useRef, useState } from 'react'
import { getDraggedBaseComponent, getElementById, useAppSelector } from '../../store'
import { ILayoutElement, LayoutPropDirection } from '../../coreTypes'
import css from './styles.module.css'
import { useBaseComponentsSelector } from '../../store/baseComponentsItems'
import { ElemPositionToAdd, IDroppableLocalLayer } from './types'
import { getBoundMetrics } from './getBoundMetrics'
import { getBorderPosition } from './getBorderPosition'

export const DroppableLocalLayer: FC<IDroppableLocalLayer> = ({
  children,
  parentElementId,
  isLayout,
}) => {
  const [direction, setDirection] = useState<LayoutPropDirection>()
  const [mainClassNameString, setMainClassNameString] = useState<string>('')
  const [draggableElementPosition, setDragabbleElementPosition] =
    useState<ElemPositionToAdd>('EndOfContainer')

  const parentElement = useAppSelector(getElementById(parentElementId))
  const draggableBaseComponent = useBaseComponentsSelector(getDraggedBaseComponent)
  const { draggableElement } = useAppSelector(state => state.formConstructor)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (parentElement) {
      const layout = parentElement as ILayoutElement
      const direction = layout.props.props.constaProps.direction
      setDirection(direction)
    }
  }, [parentElement])

  useEffect(() => {
    let containerClass = isLayout
      ? css.droppableLocalLayerLayoutElement
      : css.droppableLocalLayerFormElement
    setMainClassNameString(containerClass)
  }, [isLayout, parentElementId])

  const onDargEnter = (e: React.DragEvent) => {
    stopEvent(e)
  }

  const onDragLeave = (e: React.DragEvent) => {
    setDragabbleElementPosition('EndOfContainer')
    stopEvent(e)
  }

  const onDropContainer = (e: React.DragEvent) => {
    if (draggableElementPosition != 'EndOfContainer') {
      console.log('Order logic here')
      stopEvent(e)
    }
    setDragabbleElementPosition('EndOfContainer')
  }

  const stopEvent = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDragOver = (e: React.DragEvent) => {
    if (ref.current && direction && (draggableBaseComponent || draggableElement)) {
      let newCoord = 0

      const boundMetrics = getBoundMetrics(ref.current, direction)
      switch (direction) {
        case 'column': {
          newCoord = e.clientY
          break
        }
        case 'row': {
          newCoord = e.clientX
          break
        }
      }
      if (newCoord - boundMetrics.centerPoint >= boundMetrics.distance) {
        setDragabbleElementPosition('Next')
      } else if (boundMetrics.centerPoint - newCoord >= boundMetrics.distance) {
        setDragabbleElementPosition('Prev')
      } else {
        setDragabbleElementPosition('EndOfContainer')
      }
    }
    stopEvent(e)
  }

  return (
    <div
      ref={ref}
      className={mainClassNameString}
      onDragEnter={onDargEnter}
      onDrop={onDropContainer}
      onDragOver={onDragOver}
      style={getBorderPosition(direction, draggableElementPosition)}
      onDragLeave={onDragLeave}>
      {children}
    </div>
  )
}

import React, { FC, useEffect, useState } from 'react'
import { IDroppableLocalLayer } from './types'
import {
  getDraggedBaseComponent,
  getElementById,
  useAppSelector,
  useBaseComponentsSelector,
} from '../../store'
import { ILayoutElement, LayoutPropDirection } from '../../coreTypes'
import css from './styles.module.css'

type MousePos = {
  x: number
  y: number
}

const mousePosDefault = { x: 0, y: 0 }

export const DroppableLocalLayer: FC<IDroppableLocalLayer> = ({
  children,
  parentElementId,
  id,
  isLayout,
}) => {
  const [borderStyle, setBorderStyle] = useState({})
  const [direction, setDirection] = useState<LayoutPropDirection>()
  const [mouseStartPos, setMouseStartPos] = useState<MousePos>(mousePosDefault)
  const [mainClassNameString, setMainClassNameString] = useState<string>('')

  const parentElement = useAppSelector(getElementById(parentElementId))
  const draggableBaseComponent = useBaseComponentsSelector(getDraggedBaseComponent)
  const { draggableElement } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    if (parentElement && mouseStartPos) {
      const layout = parentElement as ILayoutElement
      const direction = layout.props.props.constaProps.direction

      if (draggableBaseComponent || draggableElement) {
        setDirection(direction)
      }
    }
  }, [parentElement, draggableBaseComponent, draggableElement, mouseStartPos])

  useEffect(() => {
    let containerClass = isLayout
      ? css.droppableLocalLayerLayoutElement
      : css.droppableLocalLayerFormElement
    setMainClassNameString(containerClass)
  }, [isLayout, parentElementId])

  const onDargEnter = (e: React.DragEvent) => {
    console.log('On Drag enter', id)
    stopProp(e)
  }

  const onDragLeave = (e: React.DragEvent) => {
    console.log('Drag leave', id)
    setMouseStartPos({ ...mousePosDefault })
    setBorderStyle({})
    stopProp(e)
  }

  const onDropContainer = (e: React.DragEvent) => {
    console.log('drop catch')
    stopProp(e)
  }

  const stopProp = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDragOver = (e: React.DragEvent) => {
    if (draggableBaseComponent || draggableElement) {
      const newMousePos = { x: e.clientX, y: e.clientY }
      switch (direction) {
        case 'column': {
          const newDif = newMousePos.y - mouseStartPos.y
          handleDif(newDif)
          break
        }
        case 'row': {
          const newDif = newMousePos.x - mouseStartPos.x
          handleDif(newDif)
          break
        }
      }
      setMouseStartPos(newMousePos)
    }
  }

  const handleDif = (dif: number) => {
    console.log(dif)
    switch (direction) {
      case 'column': {
        if (dif > 0) {
          setBorderStyle({ borderTop: '5px solid red' })
        } else if (dif < 0) {
          setBorderStyle({ borderBottom: '5px solid red' })
        } else {
          setBorderStyle({})
        }
        break
      }
      case 'row': {
        if (dif > 0) {
          setBorderStyle({ borderRight: '5px solid red' })
        } else if (dif < 0) {
          setBorderStyle({ borderLeft: '5px solid red' })
        } else {
          setBorderStyle({})
        }
        break
      }
      default:
        setBorderStyle({})
    }
  }

  return (
    <div
      className={mainClassNameString}
      style={borderStyle}
      onDragEnter={onDargEnter}
      onDrop={onDropContainer}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}>
      {children}
    </div>
  )
}

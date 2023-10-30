import React, { FC, useEffect, useState } from 'react'
import { IDroppableLocalLayer } from './types'
import { getDraggedBaseComponent, getElementById, useAppSelector } from '../../store'
import { ILayoutElement, LayoutPropDirection } from '../../coreTypes'
import css from './styles.module.css'
import { useBaseComponentsSelector } from '../../store/baseComponentsItems'

type MousePos = {
  x: number
  y: number
}

const mousePosDefault = { x: 0, y: 0 }

const calcDiff = (
  direction: LayoutPropDirection,
  newMousePos: MousePos,
  mouseStartPos: MousePos,
) => {
  let newDif = 0
  switch (direction) {
    case 'column': {
      newDif = newMousePos.y - mouseStartPos.y
      break
    }
    case 'row': {
      newDif = newMousePos.x - mouseStartPos.x
      break
    }
  }
  return newDif
}

const getBorderStyle = (direction: LayoutPropDirection | undefined, dif: number) => {
  switch (direction) {
    case 'column': {
      if (dif < 0) {
        return { borderTop: '5px solid red' }
      } else if (dif > 0) {
        return { borderBottom: '5px solid red' }
      } else {
        return {}
      }
      break
    }
    case 'row': {
      if (dif > 0) {
        return { borderRight: '5px solid red' }
      } else if (dif < 0) {
        return { borderLeft: '5px solid red' }
      } else {
        return {}
      }
      break
    }
    default:
      return {}
  }
}

export const DroppableLocalLayer: FC<IDroppableLocalLayer> = ({
  children,
  parentElementId,
  id,
  isLayout,
}) => {
  const [borderStyle, setBorderStyle] = useState({})
  const [direction, setDirection] = useState<LayoutPropDirection>()
  const [mouseStartPos, setMouseStartPos] = useState<MousePos | null>(null)
  const [mainClassNameString, setMainClassNameString] = useState<string>('')

  const parentElement = useAppSelector(getElementById(parentElementId))
  const draggableBaseComponent = useBaseComponentsSelector(getDraggedBaseComponent)
  const { draggableElement } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    if (parentElement) {
      const layout = parentElement as ILayoutElement
      const direction = layout.props.props.constaProps.direction
      console.log(direction)
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
    console.log('On Drag enter', id)
    setMouseStartPos({ ...mousePosDefault })
    stopProp(e)
  }

  const onDragLeave = (e: React.DragEvent) => {
    console.log('On Drag leave', id)
    setDegault()
    stopProp(e)
  }

  const onDropContainer = (e: React.DragEvent) => {
    console.log('drop catch')
    if (mouseStartPos && (mouseStartPos.x === 0 || mousePosDefault.y === 0)) {
      /// Call reorder here
      stopProp(e)
    }
    setDegault()
  }

  const stopProp = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDragOver = (e: React.DragEvent) => {
    const newDif = handleDragOver(e)
    if (mouseStartPos && newDif != undefined) {
      setBorderStyle(getBorderStyle(direction, newDif))
    }
    stopProp(e)
  }

  const handleDragOver = (e: React.DragEvent) => {
    if ((draggableBaseComponent || draggableElement) && mouseStartPos && direction) {
      const newMousePos = { x: e.clientX, y: e.clientY }
      const newDif = calcDiff(direction, newMousePos, mouseStartPos)
      setMouseStartPos(newMousePos)
      return newDif
    }
  }

  const setDegault = () => {
    setMouseStartPos(null)
    setBorderStyle({})
  }

  return (
    <div
      className={mainClassNameString}
      style={borderStyle}
      onDragEnter={onDargEnter}
      onDrop={onDropContainer}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}>
      {children}
    </div>
  )
}

import React, { FC, useEffect, useState } from 'react'
import { IDroppableLocalLayer } from './types'
import {
  getDraggedBaseComponent,
  getElementById,
  useAppSelector,
  useBaseComponentsSelector,
} from '../../store'
import { ILayoutElement } from '../../coreTypes'
import css from './styles.module.css'

export const DroppableLocalLayer: FC<IDroppableLocalLayer> = ({
  children,
  parentElementId,
  isLayout,
}) => {
  const [classNameString, setClassNameString] = useState<string>('')
  const [isOnDragOver, setIsOnDragOver] = useState<boolean>(false)

  const parentElement = useAppSelector(getElementById(parentElementId))
  const draggableBaseComponent = useBaseComponentsSelector(getDraggedBaseComponent)
  const { draggableElement } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    if (parentElement && isOnDragOver) {
      const layout = parentElement as ILayoutElement
      const direction = layout.props.props.constaProps.direction

      if (draggableBaseComponent || draggableElement) {
        direction === 'column'
          ? setClassNameString(`${css.stylesColumn}`)
          : setClassNameString(`${css.stylesRow}`)
      }
    } else {
      setClassNameString('')
    }
  }, [parentElement, draggableBaseComponent, draggableElement, isOnDragOver])

  const onDargEnter = (e: React.DragEvent) => {
    setIsOnDragOver(true)
    console.log('here')
    e.stopPropagation()
    e.preventDefault()
  }

  const onDargLeave = (e: React.DragEvent) => {
    setIsOnDragOver(false)
    console.log('Leave cauth')
    e.stopPropagation()
    e.preventDefault()
  }

  const onDragOver = (e: React.DragEvent) => {
    console.log('Leave cauth')
    e.stopPropagation()
    e.preventDefault()
  }

  const onDrop = (e: React.DragEvent) => {
    console.log('Drop')
    setIsOnDragOver(false)
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div
      className={`${
        isLayout ? css.droppableLocalLayerLayoutElement : css.droppableLocalLayerFormElement
      }`}
      onDragEnter={onDargEnter}
      onDragLeave={onDargLeave}
      onDragOver={onDragOver}
      onDrop={() => {
        setIsOnDragOver(false)
        console.log('drop catch')
      }}>
      <div className={classNameString} onDrop={onDrop} />
      {children}
      <div className={classNameString} onDrop={onDrop} />
    </div>
  )
}

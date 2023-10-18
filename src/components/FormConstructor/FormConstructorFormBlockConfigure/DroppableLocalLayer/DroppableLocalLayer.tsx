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
  const [mainClassNameString, setMainClassNameString] = useState<string>('')

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

  useEffect(() => {
    let containerClass = isLayout
      ? css.droppableLocalLayerLayoutElement
      : css.droppableLocalLayerFormElement
    setMainClassNameString(containerClass)
  }, [isLayout, parentElementId])

  const onDargEnter = (e: React.DragEvent) => {
    setIsOnDragOver(true)
    console.log('On Drag enter', parentElementId)
    e.stopPropagation()
    e.preventDefault()
  }

  const onDargLeave = (e: React.DragEvent) => {
    console.log('Drag leave', parentElementId)
    setIsOnDragOver(false)
    e.stopPropagation()
    e.preventDefault()
  }

  const onDrop = (e: React.DragEvent) => {
    console.log('Drop')
    setIsOnDragOver(false)
    e.stopPropagation()
    e.preventDefault()
  }

  const onDropContainer = (e: React.DragEvent) => {
    setIsOnDragOver(false)
    console.log('drop catch')
  }

  const onDragLeaveChild = (e: React.DragEvent) => {
    console.log('Drag leave child')
  }

  const onDragEnterChild = (e: React.DragEvent) => {
    console.log('Drag enter chiled')
  }

  return (
    <div
      className={mainClassNameString}
      onDragEnter={onDargEnter}
      onDragLeave={onDargLeave}
      onDrop={onDropContainer}>
      <div
        className={classNameString}
        onDragEnter={onDragEnterChild}
        onDrop={onDrop}
        onDragLeave={onDragLeaveChild}
      />
      {children}
      <div
        className={classNameString}
        onDragEnter={onDragEnterChild}
        onDrop={onDrop}
        onDragLeave={onDragLeaveChild}
      />
    </div>
  )
}

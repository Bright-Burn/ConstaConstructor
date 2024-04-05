import type { FC } from 'react'
import React, { useLayoutEffect, useState } from 'react'

import { ElementTypes } from '../../coreTypes'
import { checkIsGridVisible, setSelectedElement, useAppDispatch, useAppSelector } from '../../store'
import { DragbleLayer } from '../DragbleLayer'

import type { ISelectableLayer } from './types'

import styles from './styles.module.css'

/// Уровень содержащий логику по выделению родительского комопнента
export const SelectableLayer: FC<ISelectableLayer> = ({
  children,
  parentElementId,
  elementTypeUsage,
  elementType,
  className,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const isGridVisible = useAppSelector(checkIsGridVisible)

  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    if (selectedElement?.elementId === parentElementId) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedElement, parentElementId])

  const onClickElement = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    event.preventDefault()

    dispatch(
      setSelectedElement({
        elementId: parentElementId,
        elementType,
      }),
    )
  }
  const containerClass = `${
    elementTypeUsage === ElementTypes.FormElement
      ? styles.selectableLayerFormElement
      : styles.selectableLayerLayoutElement
  } ${className ?? ''} ${isGridVisible ? styles.focused : ''}  ${isSelected ? styles.selectedElement : ''}`
  return (
    <DragbleLayer className={containerClass} elId={parentElementId}>
      <div className={containerClass} tabIndex={0} onClick={onClickElement}>
        {children}
      </div>
    </DragbleLayer>
  )
}

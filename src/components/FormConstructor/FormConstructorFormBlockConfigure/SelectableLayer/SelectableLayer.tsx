import type { FC } from 'react'
import React, { useLayoutEffect, useState } from 'react'

import { ElementTypes } from '../../coreTypes'
import {
  checkIsGridVisible,
  getSelectedView,
  sameInstanceElementsIdsSelector,
  setSelectedView,
  useAppDispatch,
  useAppSelector,
} from '../../store'
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
  const selectedView = useAppSelector(getSelectedView)
  const isGridVisible = useAppSelector(checkIsGridVisible)

  const isInSameInstanceElements = useAppSelector(sameInstanceElementsIdsSelector).has(
    parentElementId,
  )

  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    if (selectedView?.elementId === parentElementId) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedView, parentElementId])

  const onClickElement = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    event.preventDefault()

    dispatch(
      setSelectedView({
        elementId: parentElementId,
        elementType,
      }),
    )
  }
  const containerClass = `${
    elementTypeUsage === ElementTypes.FormElement
      ? styles.selectableLayerFormElement
      : styles.selectableLayerLayoutElement
  } ${className ?? ''} ${isGridVisible ? styles.focused : ''}  ${isSelected ? styles.selectedView : ''} ${isInSameInstanceElements ? styles.sameInstanceElements : ''}`
  return (
    <div className={containerClass} tabIndex={0} onClick={onClickElement}>
      <DragbleLayer className={containerClass} elId={parentElementId}>
        {children}
      </DragbleLayer>
    </div>
  )
}

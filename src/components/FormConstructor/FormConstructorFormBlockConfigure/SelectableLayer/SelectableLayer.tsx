import React, { FC, useLayoutEffect, useState } from 'react'
import { ISelectableLayer } from './types'
import styles from './styles.module.css'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../store/formElements'
import { ElementTypes } from '../../store/formElements/types'

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
      formConstructorSlice.actions.setSelectedElement({
        elementId: parentElementId,
        elementType: elementType,
      }),
    )
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (selectedElement && e.code === 'Delete') {
      dispatch(
        formConstructorSlice.actions.deleteElement({
          elementId: selectedElement.elementId,
        }),
      )
    }
  }
  return (
    <div
      className={`${
        elementTypeUsage === ElementTypes.FormElement
          ? styles.selectableLayerFormElement
          : styles.selectableLayerLayoutElement
      } ${isSelected ? styles.selectedElement : ''} ${className ?? ''} ${
        styles.selectedLayerOutline
      }`}
      onClick={onClickElement}
      onKeyDown={onKeyDown}
      tabIndex={0}>
      {children}
    </div>
  )
}

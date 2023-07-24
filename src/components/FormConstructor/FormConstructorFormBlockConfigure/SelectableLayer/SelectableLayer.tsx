import React, { FC, useLayoutEffect, useState } from 'react'
import { ISelectableLayer } from './types'
import styles from './styles.module.css'
import { useAppSelector } from '../../store/formElements'
import { ElementTypes } from '../../store/formElements/types'
import { getElementById } from '../../store/formElements/initialState'
import { setSelectedElement, useAppDispatch } from '../../store'

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

  const element = useAppSelector(getElementById(selectedElement?.elementId))

  const props = element?.props
  let isFilled = false
  if (props && 'filled' in props) {
    isFilled = props.filled === 'filled'
  }

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
        elementType: elementType,
      }),
    )
  }
  return (
    <div
      className={`${
        elementTypeUsage === ElementTypes.FormElement
          ? styles.selectableLayerFormElement
          : styles.selectableLayerLayoutElement
      } ${isSelected ? styles.selectedElement : ''} ${className ?? ''}`}
      onClick={onClickElement}
      tabIndex={0}
    >
      {children}
    </div>
  )
}

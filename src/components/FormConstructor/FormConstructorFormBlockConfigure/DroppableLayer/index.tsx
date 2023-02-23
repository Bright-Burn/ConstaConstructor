import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, useAppSelector } from '../../store/formElements'
import {
  ElementTypes,
  FormElementTypes,
  IFormElement,
  ILayoutElement,
} from '../../store/formElements/types'
import { ButtonFormElement } from '../FormElements/ButtonFormElement'
import { LayoutFromElement } from '../FormElements/LayoutFromElement'
import { IDroppableLayer } from './types'
import styles from './styles.module.css'
import { getElementType } from '../../utils/getElementType'

/// DroppableLayer - компонент в кторый можно что то перенести
export const DroppableLayer: FC<IDroppableLayer> = ({ parentElementId }) => {
  /// Id уровня (для самой формы id любой, для каждого layout элемента - id layout элемента)
  const { allElementsMap } = useAppSelector(state => state.formConstructor)
  const [elementsOnLayer, setElementsOnLayer] = useState<(ILayoutElement | IFormElement)[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    /// Подгружаем все эелементы на текущем уровне
    setElementsOnLayer(allElementsMap.get(parentElementId) || [])
  }, [allElementsMap, parentElementId])

  const handleOnDrop = (event: React.DragEvent) => {
    const formElemType = event.dataTransfer.getData('FormElementType') as FormElementTypes
    const elemType = event.dataTransfer.getData('ElementType') as ElementTypes

    event.stopPropagation()
    event.preventDefault()

    if (elemType) {
      const layoutElement: ILayoutElement = {
        id: uuid(),
        selected: false,
        childrenFromElements: [],
        childrenLayoutElements: [],
      }
      dispatch(
        formConstructorSlice.actions.addNewElement({
          parent: parentElementId,
          element: layoutElement,
        }),
      )
      return
    }

    if (formElemType) {
      const formElement: IFormElement = {
        id: uuid(),
        type: formElemType,
      }
      dispatch(
        formConstructorSlice.actions.addNewElement({
          parent: parentElementId,
          element: formElement,
        }),
      )
    }
  }

  return (
    <div
      className={styles.droppableContainer}
      onDrop={handleOnDrop}
      onDragOver={event => event.preventDefault()}
    >
      {elementsOnLayer.map(el => {
        // Тут происходит проверка, является ли элемент Layout елементом
        if (getElementType(el) === ElementTypes.Layout) {
          const element = el as ILayoutElement
          return <LayoutFromElement key={el.id} layoutElement={element} />
        } else {
          const element = el as IFormElement
          if (element.type === FormElementTypes.Button) {
            return <ButtonFormElement key={el.id} formElement={element} />
          }
        }
        return <></>
      })}
    </div>
  )
}

import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, useAppSelector } from '../../store/formElements'
import {
  ElementTypes,
  FormElementTypes,
  FormGroupsTypes,
  IFormElement,
  IFormElementButton,
  ILayoutElement,
} from '../../store/formElements/types'
import { ButtonFormElement } from '../Elements/ButtonFormElement'
import { LayoutFromElement } from '../Elements/LayoutFromElement'
import { IDroppableLayer } from './types'
import styles from './styles.module.css'
import { getElementType } from '../../utils/getElementType'

/// DroppableLayer - компонент в кторый можно что то перенести
export const DroppableLayer: FC<IDroppableLayer> = ({ parentElementId }) => {
  /// Id уровня (для самой формы id любой, для каждого layout элемента - id layout элемента)
  const { allElementsTree } = useAppSelector(state => state.formConstructor)
  const [elementsOnLayer, setElementsOnLayer] = useState<(ILayoutElement | IFormElement)[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    /// Подгружаем все эелементы на текущем уровне
    setElementsOnLayer(allElementsTree.get(parentElementId) || [])
  }, [allElementsTree, parentElementId])

  const handleOnDrop = (event: React.DragEvent) => {
    const formElemType = event.dataTransfer.getData('FormElementType') as FormElementTypes
    const groupElementType = event.dataTransfer.getData('FormGroupsType') as FormGroupsTypes

    event.stopPropagation()
    event.preventDefault()

    if (groupElementType) {
      switch (groupElementType) {
        case FormGroupsTypes.Layout:
          const layoutElement: ILayoutElement = {
            id: uuid(),
            childrenFromElements: [],
            childrenLayoutElements: [],
            props: {
              flex: 1,
            },
          }
          addFormElement(layoutElement)
          break
      }
      return
    }

    if (formElemType) {
      switch (formElemType) {
        case FormElementTypes.Button:
          const newButton: IFormElementButton = {
            id: uuid(),
            type: FormElementTypes.Button,
            props: {
              disabled: true,
              label: 'Кнопка',
              view: 'primary',
            },
          }
          addFormElement(newButton)
          break
      }
    }
  }

  const addFormElement = (element: IFormElement | ILayoutElement) => {
    dispatch(
      formConstructorSlice.actions.addNewElement({
        parent: parentElementId,
        element: element,
      }),
    )
  }

  return (
    <div
      className={styles.droppableContainer}
      onDrop={handleOnDrop}
      onDragOver={event => event.preventDefault()}
    >
      {elementsOnLayer.map(el => {
        // Тут происходит проверка, является ли элемент Layout елементом
        if (getElementType(el) === ElementTypes.FormGroups) {
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

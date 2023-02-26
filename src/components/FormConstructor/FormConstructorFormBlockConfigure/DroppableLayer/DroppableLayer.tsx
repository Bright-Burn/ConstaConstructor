import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, useAppSelector } from '../../store/formElements'
import {
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
import { getNewLayoutParentLevel } from '../../utils'

/// DroppableLayer - компонент в кторый можно что то перенести
export const DroppableLayer: FC<IDroppableLayer> = ({ parentElementId }) => {
  /// Id уровня (для самой формы id любой, для каждого layout элемента - id layout элемента)
  const { allElementsTree, allElementsMap } = useAppSelector(state => state.formConstructor)
  const [elementsOnLayer, setElementsOnLayer] = useState<(ILayoutElement | IFormElement)[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    /// Подгружаем все эелементы на текущем уровне
    const layerIds = allElementsTree.get(parentElementId) || []
    const elementsOnLayer: (ILayoutElement | IFormElement)[] = []
    layerIds.forEach(ids => {
      const elem = allElementsMap.get(ids)
      elem && elementsOnLayer.push(elem)
    })
    setElementsOnLayer([...elementsOnLayer])
  }, [allElementsTree, parentElementId, allElementsMap])

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
            parentId: parentElementId,
            type: FormGroupsTypes.Layout,
            props: {
              flex: 1,
            },
          }
          addLayout(layoutElement)
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
          addElement(newButton, parentElementId)
          break
      }
    }
  }

  const addLayout = (layoutElement: ILayoutElement) => {
    const newParentElementId = getNewLayoutParentLevel(
      parentElementId,
      allElementsTree,
      allElementsMap,
    )

    if (newParentElementId) {
      addElement(layoutElement, newParentElementId)
    }
  }

  const addElement = (element: IFormElement | ILayoutElement, parentElementId: string) => {
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
        if (el.type === FormGroupsTypes.Layout) {
          const element = el as ILayoutElement
          return <LayoutFromElement key={el.id} layoutElement={element} />
        } else if (el.type === FormElementTypes.Button) {
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

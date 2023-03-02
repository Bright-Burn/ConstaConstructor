import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, useAppSelector } from '../../store/formElements'
import {
  FormElementTypes,
  FormGroupsTypes,
  IFormElement,
  IFormElementButton,
  IGroupElement,
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
        case FormGroupsTypes.LayoutInner:
          const layoutElement: ILayoutElement = {
            id: uuid(),
            parentId: parentElementId,
            type: groupElementType,
            props: {
              constaProps: {
                flex: 1,
                direction: 'row',
              },
              className: '',
              baseProps: {},
            },
          }
          addLayoutInner(layoutElement)
          break
        case FormGroupsTypes.LayoutOuter: {
          const layoutElement: ILayoutElement = {
            id: uuid(),
            parentId: parentElementId,
            type: groupElementType,
            props: {
              constaProps: {
                flex: 1,
                direction: 'row',
              },
              className: '',
              baseProps: {},
            },
          }
          addLayoutOuter(layoutElement)
          break
        }
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
              className: '',
              baseProps: {},
            },
          }
          addElement(newButton, parentElementId)
          break
      }
    }
  }

  const addLayoutOuter = (layoutElement: ILayoutElement) => {
    const newParentElementId = getNewLayoutParentLevel(parentElementId, allElementsMap)

    if (newParentElementId) {
      addElement(layoutElement, newParentElementId)
    }
  }

  const addLayoutInner = (layoutElement: ILayoutElement) => {
    addElement(layoutElement, parentElementId)
  }

  const addElement = (element: IFormElement | IGroupElement, parentElementId: string) => {
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
        if (el.type === FormGroupsTypes.LayoutInner || el.type === FormGroupsTypes.LayoutOuter) {
          return <LayoutFromElement key={el.id} layoutElement={el} />
        } else if (el.type === FormElementTypes.Button) {
          return <ButtonFormElement key={el.id} formElement={el} />
        }
        return <></>
      })}
    </div>
  )
}

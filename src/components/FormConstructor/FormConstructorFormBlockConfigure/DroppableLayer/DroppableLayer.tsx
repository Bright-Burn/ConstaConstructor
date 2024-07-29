import type { FC } from 'react'
import React, { useEffect } from 'react'

import type { IFormElement, IGroupElement } from '../../coreTypes'
import {
  addFormElementWithDefaultInstance,
  addNewFormElement,
  getElementsOnLayer,
  setDraggableElement,
  updateOrders,
  useAppDispatch,
  useAppSelector,
} from '../../store'
import { FormGroupsDict } from '../FormGroupDict'

import type { AddNewElementPayload, IDroppableLayer } from './types'
import { useDropBaseComponent } from './useDropBaseComponent'

import styles from './styles.module.css'

/// DroppableLayer - компонент в кторый можно что то перенести
export const DroppableLayer: FC<IDroppableLayer> = ({ parentElementId, outerParentId }) => {
  /// Id уровня (для самой формы id любой, для каждого layout элемента - id layout элемента)
  const { draggableElement } = useAppSelector(state => state.formConstructor)

  const elementsOnLayer = useAppSelector(getElementsOnLayer(parentElementId))
  //TODO Удалить как во все старые макеты добавится свойство order/
  //Удалить со стора экшен updateOrders и его редьюсер
  useEffect(() => {
    const newElemArr: (IFormElement | IGroupElement)[] = []
    elementsOnLayer.forEach((elem, index) => {
      const newElem = { ...elem }
      if (!newElem.order) {
        newElem.order = index + 1
        newElemArr.push(newElem)
      }
    })
    if (newElemArr.length > 0) dispatch(updateOrders(newElemArr))
  }, [])

  const dispatch = useAppDispatch()
  const { handleOnDropBaseComponent } = useDropBaseComponent()

  const handleOnDrop = (event: React.DragEvent) => {
    // stopPropagation должен оставаться закомменченным,
    // иначе не будет работать перетаскивание в компоненте DragbleLayer
    // event.stopPropagation()
    event.preventDefault()

    const isBaseComponent = event.dataTransfer.getData('BaseComponent')
    if (isBaseComponent === 'true') {
      const payload = handleOnDropBaseComponent(parentElementId)
      if (payload) {
        dispatch(addFormElementWithDefaultInstance(payload))
      }
      return
    }
    if (draggableElement) {
      if ('isOuter' in draggableElement && draggableElement.isOuter && outerParentId) {
        addElements([{ element: draggableElement, parent: outerParentId }])
      } else {
        addElements([{ element: draggableElement, parent: parentElementId }])
      }
    }

    dispatch(setDraggableElement({ element: null }))
  }

  const addElements = (payload: AddNewElementPayload[]) => {
    dispatch(addNewFormElement(payload))
  }

  return (
    <div
      className={styles.droppableContainer}
      onDrop={handleOnDrop}
      onDragOver={event => {
        event.preventDefault()
      }}>
      {elementsOnLayer.map(el => {
        const Component = FormGroupsDict[el.type]
        return <Component key={el.id} element={el} />
      })}
    </div>
  )
}

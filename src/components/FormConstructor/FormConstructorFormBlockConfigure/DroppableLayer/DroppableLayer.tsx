import type { FC } from 'react'
import React from 'react'

import {
  addNewFormElement,
  getElementsOnLayer,
  setDraggableElement,
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

  const dispatch = useAppDispatch()
  const { handleOnDropBaseComponent } = useDropBaseComponent()

  const handleOnDrop = (event: React.DragEvent) => {
    event.stopPropagation()
    event.preventDefault()

    const isBaseComponent = event.dataTransfer.getData('BaseComponent')
    if (isBaseComponent === 'true') {
      const elementsToAdd = handleOnDropBaseComponent(parentElementId)
      elementsToAdd && addElements(elementsToAdd)
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

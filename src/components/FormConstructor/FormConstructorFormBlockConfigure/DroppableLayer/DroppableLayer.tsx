import React, { FC, useEffect } from 'react'
import {
  useAppSelector,
  useAppDispatch,
  getElementsOnLayer,
  addNewFormElement,
  setDraggableElement,
} from '../../store'

import { IDroppableLayer, AddNewElementPayload } from './types'
import styles from './styles.module.css'
import { FormGroupsDict } from '../FormGroupDict'
import { useDropBaseComponent } from './useDropBaseComponent'
import { DroppableLocalLayer } from '../DroppableLocalLayer'

/// DroppableLayer - компонент в кторый можно что то перенести
export const DroppableLayer: FC<IDroppableLayer> = ({ parentElementId, outerParentId }) => {
  /// Id уровня (для самой формы id любой, для каждого layout элемента - id layout элемента)
  const { draggableElement } = useAppSelector(state => state.formConstructor)

  const elementsOnLayer = useAppSelector(getElementsOnLayer(parentElementId))

  const dispatch = useAppDispatch()
  const { handleOnDropBaseComponent } = useDropBaseComponent()

  const handleOnDrop = (event: React.DragEvent) => {
    // event.stopPropagation()
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
        // event.stopPropagation()
      }}>
      {elementsOnLayer.map(el => {
        let Component = FormGroupsDict[el.type]
        if (el.type === 'Layout') {
          return <Component key={el.id} element={el} />
        }
        return (
          <DroppableLocalLayer parentElementId={el.parentId || ''} isLayout={false} id={el.id}>
            <Component key={el.id} element={el} />
          </DroppableLocalLayer>
        )
      })}
    </div>
  )
}

import React, { FC } from 'react'
import uuid from 'react-uuid'
import {
  useAppSelector,
  IFormElement,
  IGroupElement,
  AddNewElementPayload,
  useAppDispatch,
} from '../../store/formElements'
import {
  addNewElement,
  setDraggableBaseComponent,
  getDraggedBaseComponent,
  setDraggableElement,
} from '../../store'
import {
  IBaseComponent,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from '../../store/baseComponentsItems'
import { IDroppableLayer } from './types'
import styles from './styles.module.css'
import { FormGroupsDict } from '../FormGroupDict'
import { getElementsOnLayer } from '../../store/formElements/selectors'
import { useDropBaseComponent } from './useDropBaseComponent'

/// DroppableLayer - компонент в кторый можно что то перенести
export const DroppableLayer: FC<IDroppableLayer> = ({ parentElementId, outerParentId }) => {
  /// Id уровня (для самой формы id любой, для каждого layout элемента - id layout элемента)
  const { draggableElement } = useAppSelector(state => state.formConstructor)

  const elementsOnLayer = useAppSelector(getElementsOnLayer(parentElementId))
  console.log('elementsOnLayer', elementsOnLayer)
  const dispatch = useAppDispatch()
  const dispathBaseComponents = useBaseComponentsDispatch()
  const {handleOnDropBaseComponent} = useDropBaseComponent()


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
    dispatch(addNewElement(payload))
  }
  console.log(elementsOnLayer)
  return (
    <div
      className={styles.droppableContainer}
      onDrop={handleOnDrop}
      onDragOver={event => event.preventDefault()}
    >
      {elementsOnLayer.map(el => {
        let Component = FormGroupsDict[el.type]
        return <Component key={el.id} element={el} />
      })}
    </div>
  )
}

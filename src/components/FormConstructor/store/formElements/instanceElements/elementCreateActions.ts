import { DraggbleElement, IFormElement, IGroupElement } from '../../../coreTypes'
import { AppDispatch, RootState } from '../../setupStore'
import { getSiblingsCount } from '../formElementsActions'
import { getElementById, getElementsOnLayer } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import { AddNewElementPayload } from '../payload'
import uuid from 'react-uuid'
import { createInstanceForElement, manageInstanceLinkForElement } from './instanceActions'
import { pushHistoryElement } from '../../history'
import { deepCopyElements } from '../../../utils'
import { deleteFormElement } from './deleteFormElements'

/**
 * Добавляет новый элемент(вместе с экшеном)
 */
export const addNewFormElement =
  (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => {
    const elementsToAdd: (IFormElement | IGroupElement)[] = []
    addPayloads.forEach(payload => {
      const siblingsCount = getSiblingsCount(getState(), payload.parent)
      const payloadElement = payload.element
      const instanceId = uuid()

      dispatch(
        createInstanceForElement([
          {
            instanceId: instanceId,
            type: payloadElement.type,
            props: payloadElement.props,
          },
        ]),
      )

      if (isDragGrop(payloadElement)) {
        const elementType = payloadElement.type
        elementsToAdd.push({
          id: payloadElement.id,
          isOuter: payloadElement.isOuter,
          instanceId: instanceId,
          order: siblingsCount + 1,
          parentId: payload.parent,
          type: elementType,
        })
      } else if (isDragFormElement(payloadElement)) {
        const elementType = payloadElement.type
        elementsToAdd.push({
          id: payloadElement.id,
          instanceId: instanceId,
          parentId: payload.parent,
          order: siblingsCount + 1,
          type: elementType,
        })
      }

      dispatch(
        pushHistoryElement(() =>
          dispatch(formConstructorSlice.actions.deleteFormElement([payloadElement.id])),
        ),
      )
    })
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsToAdd))
  }

const isDragGrop = (
  element: DraggbleElement<IFormElement | IGroupElement>,
): element is DraggbleElement<IGroupElement> => {
  return 'isOuter' in element
}

const isDragFormElement = (
  element: DraggbleElement<IFormElement | IGroupElement>,
): element is DraggbleElement<IFormElement> => {
  return !('isOuter' in element)
}

/**
 * Создает НЕ глуюокую копию - копирует ссылку(view), но не сам инстансе
 */
export const copyLinkElement =
  (elementId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const parentElementToCopy = getElementById(elementId)(state)
    const treeElements: (IFormElement | IGroupElement)[] = []

    if (parentElementToCopy) {
      const siblingsCount = getSiblingsCount(getState(), parentElementToCopy?.parentId || '')
      const elements = getElementsOnLayer(parentElementToCopy.id)(state)
      treeElements.push({ ...parentElementToCopy, order: siblingsCount + 1 }, ...elements)
    }

    const newElements = deepCopyElements(treeElements)

    dispatch(
      manageInstanceLinkForElement(
        newElements.map(element => {
          return { id: element.instanceId, type: 'INC' }
        }),
      ),
    )

    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(newElements))
    newElements.forEach(elem => {
      dispatch(pushHistoryElement(() => dispatch(deleteFormElement(elem.id))))
    })
  }

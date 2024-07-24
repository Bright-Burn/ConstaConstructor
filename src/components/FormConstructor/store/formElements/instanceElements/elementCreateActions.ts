import { DraggbleElement, IFormElement, IGroupElement } from '../../../coreTypes'
import { AppDispatch, RootState } from '../../setupStore'
import { getSiblingsCount } from '../formElementsActions'
import { getElementById } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import { AddNewElementPayload } from '../payload'
import uuid from 'react-uuid'
import { createInstanceForElement, manageInstanceLinkForElement } from './instanceActions'
import { pushHistoryElement } from '../../history'

/**
 * Добавляет новый элемент(вместе с экшеном)
 */
export const addNewFormElement =
  (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => {
    addPayloads.forEach(payload => {
      const siblingsCount = getSiblingsCount(getState(), payload.parent)
      const payloadElement = payload.element
      const instanceId = uuid()

      dispatch(createInstanceForElement(instanceId, payloadElement.type, payloadElement.props))

      if (isDragGrop(payloadElement)) {
        const elementType = payloadElement.type
        dispatch(
          formConstructorSlice.actions.addNewFormElementAdapter({
            id: payloadElement.id,
            isOuter: payloadElement.isOuter,
            instanceId: instanceId,
            order: siblingsCount + 1,
            parentId: payload.parent,
            type: elementType,
          }),
        )
      } else if (isDragFormElement(payloadElement)) {
        const elementType = payloadElement.type
        dispatch(
          formConstructorSlice.actions.addNewFormElementAdapter({
            id: payloadElement.id,
            instanceId: instanceId,
            parentId: payload.parent,
            order: siblingsCount + 1,
            type: elementType,
          }),
        )
      }

      dispatch(
        pushHistoryElement(() =>
          dispatch(formConstructorSlice.actions.deleteFormElement([payloadElement.id])),
        ),
      )
    })
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
    const elementToCopy = getElementById(elementId)(getState())
    const copy = (originalElement: IFormElement | IGroupElement) => {
      const siblingsCount = getSiblingsCount(getState(), originalElement.parentId || '')
      const element = {
        ...originalElement,
        parentId: originalElement.parentId,
        order: siblingsCount + 1,
      }

      dispatch(manageInstanceLinkForElement(element.instanceId, 'INC'))

      dispatch(
        formConstructorSlice.actions.addNewFormElementAdapter({
          ...element,
          id: uuid(),
          instanceId: element.instanceId,
        }),
      )
    }
    if (elementToCopy) {
      copy(elementToCopy)
    }
  }

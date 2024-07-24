import { IFormElement, IGroupElement } from '../../../coreTypes'
import { AppDispatch, RootState } from '../../setupStore'
import { getSiblingsCount } from '../formElementsActions'
import { getElementById } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import { AddNewElementPayload } from '../payload'
import uuid from 'react-uuid'
import { createInstanceForElement, manageInstanceLinkForElement } from './instanceActions'

export const addNewFormElement =
  (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => {
    addPayloads.forEach(payload => {
      const siblingsCount = getSiblingsCount(getState(), payload.parent)

      const element: IFormElement | IGroupElement = {
        ...payload.element,
        parentId: payload.parent,
        order: siblingsCount + 1,
      }

      dispatch(createInstanceForElement(element, payload.props))
      dispatch(formConstructorSlice.actions.addNewFormElement(element))

      // dispatch(
      //   pushHistoryElement(() =>
      //     dispatch(formConstructorSlice.actions.deleteFormElement([element.id])),
      //   ),
      // )
    })
  }

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

      dispatch(manageInstanceLinkForElement(element, 'INC'))

      dispatch(
        formConstructorSlice.actions.addNewFormElement({
          ...element,
          id: uuid(),
          instanceId: element.instanceId,
        }),
      )

      // dispatch(
      //   pushHistoryElement(() =>
      //     dispatch(formConstructorSlice.actions.deleteFormElement([element.id])),
      //   ),
      // )
    }
    if (elementToCopy) {
      copy(elementToCopy)
    }
  }

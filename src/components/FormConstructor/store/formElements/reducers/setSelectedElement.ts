import { PayloadAction } from '@reduxjs/toolkit'
import { SetNewSelectedElement } from '../payload'
import { IFormConstructor, IFormElement, IGroupElement, UnionProps } from '../types'
import { pushHistory } from '../history'

export const setSelectedElement = (
  state: IFormConstructor,
  action: PayloadAction<SetNewSelectedElement>,
) => {
  if (!action.payload) {
    state.selectedElementProps = null
    state.selectedElement = null
    return
  }
  const element = state.allElementsMap.get(action.payload.elementId)
  if (element) {
    updateSelectedElement(state, element, action.payload.newProps)
  }

  pushHistory(state)
}

export const updateSelectedElement = (
  state: IFormConstructor,
  element: IFormElement | IGroupElement,
  newProps?: UnionProps | undefined,
) => {
  if (element) {
    if (newProps) {
      element.props = newProps
    }

    state.selectedElementProps = { ...(element as IFormElement | IGroupElement).props }
    state.selectedElement = {
      elementId: element.id,
      elementType: element.type,
    }

    const newAllelementMap = state.allElementsMap
    newAllelementMap.set(element.id, element)
    state.allElementsMap = newAllelementMap
  }
}


import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../../coreTypes'

export const deselectElement = (state: IFormConstructor) => {
  state.selectedElement = null
}

export const setSelectedElement = (
  state: IFormConstructor,
  action: PayloadAction<SetNewSelectedElement>,
) => {
  state.selectedElement = {
    elementId: action.payload.element.id,
    elementType: action.payload.element.type,
  }
}
type SetNewSelectedElement = {
  element: IFormElement | IGroupElement
}

import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../../../coreTypes'

export const deselectElement = (state: IFormConstructor) => {
  state.selectedView = null
}

export const setSelectedView = (
  state: IFormConstructor,
  action: PayloadAction<SetNewSelectedView>,
) => {
  state.selectedView = {
    elementId: action.payload.element.id,
    elementType: action.payload.element.type,
  }
}
type SetNewSelectedView = {
  element: IFormElement | IGroupElement
}

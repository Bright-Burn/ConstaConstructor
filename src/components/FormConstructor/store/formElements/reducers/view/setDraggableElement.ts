import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../../coreTypes'

import type { SetNewElementDraggableElem } from './payloads'

export const setDraggableElement = (
  state: IFormConstructor,
  action: PayloadAction<SetNewElementDraggableElem>,
) => {
  state.draggableElement = action.payload.element
}

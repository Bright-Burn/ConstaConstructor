import { PayloadAction } from '@reduxjs/toolkit'
import { SetNewElementDraggableElem } from '../payload'
import { IFormConstructor } from '../../../coreTypes'

export const setDraggableElement = (
  state: IFormConstructor,
  action: PayloadAction<SetNewElementDraggableElem>,
) => {
  state.draggableElement = action.payload.element
}

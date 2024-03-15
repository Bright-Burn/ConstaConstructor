import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement, UnionProps } from '../../../coreTypes'
import { pushHistory } from '../history'
import { layuoutAdapter } from '../initialState'

export const deselectElement = (state: IFormConstructor) => {
  state.selectedElementProps = null
  state.selectedElement = null
}
export const setSelectedElement = (
  state: IFormConstructor,
  action: PayloadAction<SetNewSelectedElement>,
) => {
  const element = action.payload.element

  let props = { ...(element.props as UnionProps) }

  if (action.payload.newProps) {
    props = action.payload.newProps
  }
  state.selectedElementProps = { ...props }
  state.selectedElement = {
    elementId: element.id,
    elementType: element.type,
  }
  layuoutAdapter.updateOne(state.allElements, { id: element.id, changes: { props } })

  pushHistory(state)
}
type SetNewSelectedElement = {
  element: IFormElement | IGroupElement
  newProps?: UnionProps
}

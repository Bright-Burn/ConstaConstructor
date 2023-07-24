import { PayloadAction } from '@reduxjs/toolkit'
import {  IFormConstructor, IFormElement, IGroupElement, UnionProps } from '../types'
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
 
 
    let porps = { ...(element.props as UnionProps) 
    }

  if (action.payload.newProps) {
    porps = action.payload.newProps
  }
  state.selectedElementProps = { ...porps }
  state.selectedElement = {
    elementId: element.id,
    elementType: element.type,
  }
  layuoutAdapter.updateOne(state.allElements, { id: element.id, changes: { props: porps } })

  pushHistory(state)
}
type SetNewSelectedElement = {
  element:  IFormElement | IGroupElement
  newProps?: UnionProps
}
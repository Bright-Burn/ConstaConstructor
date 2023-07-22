import { PayloadAction } from '@reduxjs/toolkit'
import { SetNewSelectedElement } from '../payload'
import { IFormConstructor, IFormElement, IGroupElement, UnionProps } from '../types'
import { pushHistory } from '../history'
import { layuoutAdapter } from '../initialState'

export const setSelectedElement = (
  state: IFormConstructor,
  action: PayloadAction<SetNewSelectedElement>,
) => {
  if (!action.payload) {
    state.selectedElementProps = null
    state.selectedElement = null
    return
  }
  // перенести в экшн
  const { selectById } = layuoutAdapter.getSelectors<IFormConstructor>(state => state.allElements)
  const element = selectById(state, action.payload.elementId)

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
  //TODO избавиться от as
  let porps = { ...(element.props as UnionProps) }

  if (newProps) {
    porps = newProps
  }
  state.selectedElementProps = { ...porps }
  state.selectedElement = {
    elementId: element.id,
    elementType: element.type,
  }
  layuoutAdapter.updateOne(state.allElements, { id: element.id, changes: { props: porps } })
  // const newAllelementMap = state.allElementsMap
  // newAllelementMap.set(element.id, element)
  // state.allElementsMap = newAllelementMap
}
function isEmpty(obj: any) {
  return !obj || !Object.keys(obj).some(x => obj[x] !== void 0)
}

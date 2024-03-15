import {
  baseComponentsReducer,
  baseComponentsSlice,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from './baseComponentsSlices'
import type { AddBaseComponent, SetDraggableBaseComponent } from './payload'
import type { IBaseComponent, IBaseComponentsItems } from './types'

export {
  type AddBaseComponent,
  baseComponentsReducer,
  baseComponentsSlice,
  type IBaseComponent,
  type IBaseComponentsItems,
  type SetDraggableBaseComponent,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
}

export { addBaseElement, setDraggableBaseComponent } from './baseComponentsActions'
export { getDraggedBaseComponent } from './baseComponentsSelectors'

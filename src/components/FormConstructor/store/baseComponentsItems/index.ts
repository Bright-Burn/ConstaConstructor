import { AddBaseComponent, SetDraggableBaseComponent } from './payload'
import {
  baseComponentsSlice,
  baseComponentsReducer,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from './baseComponentsSlices'
import { IBaseComponent, IBaseComponentsItems } from './types'

export {
  type SetDraggableBaseComponent,
  type IBaseComponent,
  type AddBaseComponent,
  type IBaseComponentsItems,
  baseComponentsSlice,
  baseComponentsReducer,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
}

export { addBaseElement, setDraggableBaseComponent } from './baseComponentsActions'
export { getDraggedBaseComponent } from './baseComponentsSelectors'

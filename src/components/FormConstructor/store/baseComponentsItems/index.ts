import { AddBaseComponent, SetDraggableBaseComponent } from './payload'
import {
  baseComponentsSlice,
  baseComponentsReducer,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from './slices'
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

export {addBaseElement, setDraggableBaseComponent} from './actions'
export {getDraggedBaseComponent} from './selectors'
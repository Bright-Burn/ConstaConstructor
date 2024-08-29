import {
  baseComponentsReducer,
  baseComponentsSlice,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from './baseComponentsSlices'
import type { AddBaseComponent, SetDraggableBaseComponent } from './payload'
import type { BaseComponentSerializable, IBaseComponent, IBaseComponentsItems } from './types'

export {
  type AddBaseComponent,
  type BaseComponentSerializable,
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

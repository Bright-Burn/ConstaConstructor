export { addBaseElement, setDraggableBaseComponent } from './baseComponentsActions'
export { getDraggedBaseComponent } from './baseComponentsSelectors'
export {
  baseComponentsReducer,
  baseComponentsSlice,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from './baseComponentsSlices'
export { loadBaseComponentFromJson } from './loadBaseComponentFromJson'
export type { AddBaseComponent, SetDraggableBaseComponent } from './payload'
export type { IBaseComponent, IBaseComponentsItems } from './types'

// export {
//   type AddBaseComponent,
//   baseComponentsReducer,
//   baseComponentsSlice,
//   type IBaseComponent,
//   type IBaseComponentsItems,
//   type SetDraggableBaseComponent,
//   useBaseComponentsDispatch,
//   useBaseComponentsSelector,
// }

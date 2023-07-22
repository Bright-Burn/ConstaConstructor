import { RootState } from '../setupStore'

export const getDraggedBaseComponent = (state: RootState) =>
  state.baseComponents.draggableBaseComponent

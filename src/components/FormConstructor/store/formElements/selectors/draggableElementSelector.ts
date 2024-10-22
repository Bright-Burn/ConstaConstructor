import type { RootState } from '../../setupStore'

export const draggableElementSelector = (state: RootState) => state.formConstructor.draggableElement

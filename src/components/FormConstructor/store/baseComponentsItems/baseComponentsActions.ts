import type { BaseComponentToSave } from '../projectSaveLoad'
import { baseComponentSaveToState } from '../projectSaveLoad'
import type { AppDispatch } from '../setupStore'

import { baseComponentsSlice } from './baseComponentsSlices'
import type { IBaseComponent } from './types'

export const addBaseElement = (baseElement: BaseComponentToSave) => (dispatch: AppDispatch) => {
  const baseComponent = baseComponentSaveToState(baseElement)
  dispatch(baseComponentsSlice.actions.addNewBaseElement({ baseComponent }))
}

export const setDraggableBaseComponent = (el: IBaseComponent | null) => (dispatch: AppDispatch) => {
  dispatch(baseComponentsSlice.actions.setDraggableBaseComponent({ baseComponent: el }))
}

import type { BaseComponentToSave } from '../projectSaveLoad'
import { baseComponentSaveToState, parseBaseComponentString } from '../projectSaveLoad'
import type { AppDispatch } from '../setupStore'

import { baseComponentsSlice } from './baseComponentsSlices'

export const loadBaseComponentFromString = (json: string) => (dispatch: AppDispatch) => {
  // Добавить проверку типов
  const baseComponentToSave: BaseComponentToSave = parseBaseComponentString(json)

  const baseComponent = baseComponentSaveToState(baseComponentToSave)
  dispatch(baseComponentsSlice.actions.addNewBaseElement({ baseComponent }))
}

import {
  baseComponentSaveToState,
  parseBaseComponentString,
  type BaseComponentToSave,
} from '../projectSaveLoad'
import type { AppDispatch } from '../setupStore'
import { baseComponentsSlice } from './baseComponentsSlices'

export const loadBaseComponentFromJson = (json: string) => (dispatch: AppDispatch) => {
  // Добавить проверку типов
  const baseComponentToSave: BaseComponentToSave = parseBaseComponentString(json)

  const baseComponent = baseComponentSaveToState(baseComponentToSave)
  dispatch(baseComponentsSlice.actions.addNewBaseElement({ baseComponent }))
}

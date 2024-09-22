import { parseBaseComponentString, type BaseComponentToSave } from '../projectSaveLoad'
import type { AppDispatch } from '../setupStore'

import { addBaseElement } from './baseComponentsActions'

export const loadBaseComponentFromJson = (json: string) => (dispatch: AppDispatch) => {
  // Добавить проверку типов
  const baseComponent: BaseComponentToSave = parseBaseComponentString(json)
  dispatch(addBaseElement(baseComponent))
}

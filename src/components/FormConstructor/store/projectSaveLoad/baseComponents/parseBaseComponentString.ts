import { JsonHelper } from '../../../../../helpers'
import { BaseComponentToSave } from '../types'

export const parseBaseComponentString = (json: string) => {
  // Добавить проверку типов
  const baseComponent: BaseComponentToSave = JsonHelper.parse(json)
  return baseComponent
}

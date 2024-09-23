import { JsonHelper } from '../../../../../helpers'
import type { BaseComponentToSave } from '../types'

/**
 * Парсит строку в промежуточную структуру сериализуеммого базового компонента
 * @param projectString Json Строка
 * @returns Промежуточную структура сериализуеммого базового компонента
 */
export const parseBaseComponentString = (json: string) => {
  //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
  const baseComponent: BaseComponentToSave = JsonHelper.parse(json)
  // Здесь будет использоваться адаптер для поддержания версии выгрузки проекта для переезда на новые пропсы при необходимости
  return baseComponent
}

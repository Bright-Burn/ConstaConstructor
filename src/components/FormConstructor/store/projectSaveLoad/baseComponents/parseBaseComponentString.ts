import { JsonHelper } from '../../../../../helpers'
import type { BaseComponentToSave } from '../types'
import { baseComponentVersionAdapter } from '../versionAdapter'

/**
 * Парсит строку в промежуточную структуру сериализуеммого базового компонента
 * @param projectString Json Строка
 * @returns Промежуточную структура сериализуеммого базового компонента
 */
export const parseBaseComponentString = (json: string) => {
  //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
  const baseComponent = JsonHelper.parse(json)
  // Здесь будет использоваться адаптер для поддержания версии проекта для переезда на новые пропсы
  if (baseComponent?.projectVersion === undefined) {
    console.info('Run adapter base component')
    return baseComponentVersionAdapter(baseComponent)
  }

  return baseComponent as BaseComponentToSave
}

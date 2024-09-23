import { JsonHelper } from '../../../../../helpers'
import { FormConstructorToSave } from '../types'

/**
 * Парсит строку в промежуточную структуру сериализуеммого проекта
 * @param projectString Json Строка
 * @returns Промежуточную структура сериализуеммого проекта
 */
export const parseProjectString = (projectString: string) => {
  //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
  const parsedFile = JsonHelper.parse(projectString)
  // Здесь будет использоваться адаптер для поддержания версии проекта для переезда на новые пропсы
  const project = parsedFile.project as FormConstructorToSave
  return project
}

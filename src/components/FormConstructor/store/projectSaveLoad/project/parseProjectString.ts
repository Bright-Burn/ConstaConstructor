import { JsonHelper } from '../../../../../helpers'
import type { FormConstructorToSave } from '../types'
import { projectVersionAdapter } from '../versionAdapter'

/**
 * Парсит строку в промежуточную структуру сериализуеммого проекта
 * @param projectString Json Строка
 * @returns Промежуточную структура сериализуеммого проекта
 */
export const parseProjectString = (projectString: string) => {
  //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
  const parsedFile = JsonHelper.parse(projectString)
  // Здесь будет использоваться адаптер для поддержания версии проекта для переезда на новые пропсы
  const project = parsedFile.project
  if (project?.projectVersion === undefined) {
    console.info('Run adapter')
    return projectVersionAdapter(project)
  }

  return project as FormConstructorToSave
}

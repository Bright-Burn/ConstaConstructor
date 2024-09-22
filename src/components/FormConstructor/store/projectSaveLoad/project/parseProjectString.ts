import { JsonHelper } from '../../../../../helpers'
import { FormConstructorToSave } from '../types'

export const parseProjectString = (projectString: string) => {
  //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
  const parsedFile = JsonHelper.parse(projectString)
  const project = parsedFile.project as FormConstructorToSave
  return project
}

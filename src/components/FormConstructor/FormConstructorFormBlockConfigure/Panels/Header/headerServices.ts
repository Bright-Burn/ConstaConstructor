import { JsonHelper } from '../../../../../helpers'
import type { FormConstructorToSave } from '../../../projectSaveLoad'
import {
  loadProjectFromFile,
  saveProjectToFile,
  saveProjectToHTML,
  useAppDispatch,
} from '../../../store'
import { readFile } from '../../../utils'

export const useProject = () => {
  const dispatch = useAppDispatch()

  const onDownloadProject = (e: DragEvent | React.ChangeEvent) => {
    const target = e.target as EventTarget & HTMLInputElement
    if (target.files) {
      const file = target.files[0]
      readFile(file).then(json => {
        //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
        const parsedFile = JsonHelper.parse(json)
        const project = parsedFile.project as FormConstructorToSave
        dispatch(loadProjectFromFile(project))
      })
    }
  }

  const onSaveProject = (projectName: string) => {
    dispatch(saveProjectToFile({ name: projectName, description: '' }))
  }

  const saveToHtml = (projectName: string) => {
    dispatch(saveProjectToHTML({ name: projectName, description: '' }))
  }
  return { onDownloadProject, onSaveProject, saveToHtml }
}

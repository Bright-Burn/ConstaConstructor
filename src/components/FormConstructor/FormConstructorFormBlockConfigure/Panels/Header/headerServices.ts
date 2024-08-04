import { useState } from 'react'

import { JsonHelper } from '../../../../../helpers'
import type { FormConstructorToSave } from '../../../projectSaveLoad'
import {
  loadProjectFromFile,
  saveProjectToFile,
  saveProjectToHtml,
  useAppDispatch,
} from '../../../store'
import { readFile } from '../../../utils'

export const useProject = () => {
  const dispatch = useAppDispatch()
  const [projectName, setProjectName] = useState<string | null>('Новый проект')

  const onDownloadProject = (e: DragEvent | React.ChangeEvent) => {
    const target = e.target as EventTarget & HTMLInputElement
    if (target.files) {
      const file = target.files[0]
      readFile(file).then(json => {
        //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
        const parsedFile: any = JsonHelper.parse(json)
        const project = parsedFile.project as FormConstructorToSave
        dispatch(loadProjectFromFile(project))
      })
    }
  }

  const onSaveProject = () => {
    if (projectName) dispatch(saveProjectToFile({ name: projectName, description: '' }))
  }
  const onChangeProjectName = (value: string | null) => {
    setProjectName(value)
  }
  const saveToHtml = () => {
    dispatch(saveProjectToHtml(projectName))
  }
  return { onDownloadProject, onSaveProject, onChangeProjectName, projectName, saveToHtml }
}

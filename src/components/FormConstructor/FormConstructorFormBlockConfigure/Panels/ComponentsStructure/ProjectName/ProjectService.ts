import { useState } from 'react'

import { JsonHelper } from '../../../../../helpers'
import type { FormConstructorToSave } from '../../../projectSaveLoad'
import {
  loadProjectFromFile,
  saveProjectToFile,
  saveProjectToHTML,
  useAppDispatch,
} from '../../../store'
import { readFile } from '../../../utils'

export const useProjectName = () => {
  const dispatch = useAppDispatch()
  const [projectName, setProjectName] = useState<string | null>('Новый проект')

  const onChangeProjectName = (value: string | null) => {
    setProjectName(value)
  }
  const saveToHtml = () => {
    if (projectName) dispatch(saveProjectToHTML({ name: projectName, description: '' }))
  }
  return { onDownloadProject, onSaveProject, onChangeProjectName, projectName, saveToHtml }
}

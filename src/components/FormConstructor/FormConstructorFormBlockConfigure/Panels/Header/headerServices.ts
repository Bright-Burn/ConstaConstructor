import { readFile } from '../../../utils'
import { loadProjectFromStorage, saveProjectToFile, saveProjectToHtml, useAppDispatch } from '../../../store'
import { useState } from 'react'
import { JsonHelper } from '../../../../../helpers'

export const useProject = () => {
  const dispatch = useAppDispatch()
  const [projectName, setProjectName] = useState<string | null>('Новый проект')

  const onDownloadProject = (e: DragEvent | React.ChangeEvent) => {
    const target = e.target as EventTarget & HTMLInputElement
    if (target.files) {
      const file = target.files[0]
      readFile(file).then(json => {
        //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
        const parsedFile: any = JSON.parse(json)
        dispatch(loadProjectFromStorage(parsedFile.project))
      })
    }
  }
  const onDownloadProjectFromDiv = (json: string) => {
        const parsedFile: any = JSON.parse(json)
        dispatch(loadProjectFromStorage(parsedFile.project))
  }
  const onSaveProject = () => {
    if (projectName) dispatch(saveProjectToFile({ name: projectName, description: '' }))
  }
  const onChangeProjectName = ({ value }: { value: string | null }) => {
    setProjectName(value)
  }
  const saveToHtml = () => {
    dispatch(saveProjectToHtml(projectName))
  }
  return { onDownloadProject, onSaveProject, onChangeProjectName, projectName,onDownloadProjectFromDiv, saveToHtml }
}
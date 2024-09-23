import {
  loadProjectFromString,
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
        dispatch(loadProjectFromString(json))
      })
    }
  }

  const onSaveProject = (projectName: string) => {
    dispatch(saveProjectToFile({ name: projectName }))
  }

  const saveToHtml = (projectName: string) => {
    dispatch(saveProjectToHTML({ name: projectName }))
  }
  return { onDownloadProject, onSaveProject, saveToHtml }
}

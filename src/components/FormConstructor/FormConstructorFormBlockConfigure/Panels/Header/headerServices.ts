import { readFile } from '../../../utils'
import { loadProjectFromStorage, saveProjectToFile, useAppDispatch } from '../../../store'
import { useState } from 'react'
import { ConstaColors } from '../../../../ConstaPalette'

export const useProject = () => {
  const dispatch = useAppDispatch()
  const [projectName, setProjectName] = useState<string | null>('Новый проект')

  const onDownloadOldProject = (e: DragEvent | React.ChangeEvent) => {
    const target = e.target as EventTarget & HTMLInputElement
    if (target.files) {
      const file = target.files[0]
      readFile(file).then(json => {
        //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
        const parsedFile: any = JSON.parse(json)

        dispatch(
          loadProjectFromStorage({
            ...parsedFile.project,
            allElements: {
              ...parsedFile.project.allElements.map((arr: any) => {
                return {
                  ...arr,
                  props: {
                    props: {
                      ...(arr.type === 'SelectForm'
                        ? {
                            ...arr.props,
                            groups: ['Первая группа', 'Вторая группа', 'Третья группа'],
                          }
                        : arr.type === 'Layout'
                        ? {
                            ...arr.props,
                            styles: {
                              ...arr.props.styles,
                              borderColor:
                                arr.props.styles &&
                                ConstaColors.includes(arr.props.styles.borderColor)
                                  ? arr.props.styles.borderColor
                                  : 'color-bg-default',
                            },
                          }
                        : arr.props),
                    },
                    type: arr.type,
                  },
                }
              }),
            },
          }),
        )
      })
    }
  }
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
  const onSaveProject = () => {
    if (projectName) dispatch(saveProjectToFile({ name: projectName, description: '' }))
  }
  const onChangeProjectName = ({ value }: { value: string | null }) => {
    setProjectName(value)
  }
  return {
    onDownloadProject,
    onSaveProject,
    onDownloadOldProject,
    onChangeProjectName,
    projectName,
  }
}

import { FC, ReactNode, useEffect } from 'react'
import {
  useAppDispatch,
  useAppSelector,
  deleteFormElement,
  checkViewMode,
  loadProjectFromStorage,
  onSetViewMode,
} from '../../store'
import css from './styles.module.css'
import { togglePanels } from '../../store'
import { popHistoryElement } from '../../store/history'

interface Props {
  children?: ReactNode
}

export const FormConstructorFormBlockEventListener: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const viewMode = useAppSelector(checkViewMode)
  useEffect(() => {
    const loadedData = document.getElementById('loaded_data')

    if (loadedData) {
      //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
      const parsedFile: any = JSON.parse(loadedData.innerHTML)
      dispatch(onSetViewMode())
      dispatch(loadProjectFromStorage(parsedFile.project))
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'Space' && ctrlKey) {
        dispatch(togglePanels())
      }
    }
    /// Полуает последнее состояние из истории
    const onKeyGoBack = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'KeyZ' && ctrlKey) {
        console.log('TODO написать реализацию истории')
        dispatch(popHistoryElement())
      }
    }

    document.addEventListener('keydown', onKeyGoBack)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keydown', onKeyGoBack)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code } = e
      if (selectedElement && code === 'Delete') {
        dispatch(deleteFormElement(selectedElement.elementId))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedElement])
  console.log(children)
  return <div className={css.formConstructorEventListener}>{children}</div>
}

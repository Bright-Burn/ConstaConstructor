import type { FC, ReactNode } from 'react'
import { useEffect } from 'react'

import { JsonHelper } from '../../../../helpers'
import {
  copyFormElementLink,
  deleteFormElement,
  loadProjectFromStorage,
  onSetViewMode,
  popHistoryElement,
  selectedElementSelector,
  togglePanels,
  useAppDispatch,
  useAppSelector,
} from '../../store'

import css from './styles.module.css'

interface Props {
  children?: ReactNode
}

export const FormConstructorFormBlockEventListener: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()
  const selectedElement = useAppSelector(selectedElementSelector)

  useEffect(() => {
    const loadedData = document.getElementById('loaded_data')

    if (loadedData) {
      //TODO надо сделать проверку рантайм, что файл соответствует нашему контракту!
      const parsedFile: any = JsonHelper.parse(loadedData.innerHTML)
      dispatch(onSetViewMode())
      dispatch(loadProjectFromStorage(parsedFile.project))
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'Space' && ctrlKey) {
        e.preventDefault()
        dispatch(togglePanels())
      }
    }
    /// Полуает последнее состояние из истории
    const onKeyGoBack = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'KeyZ' && ctrlKey) {
        e.preventDefault()
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
        e.preventDefault()
        dispatch(deleteFormElement(selectedElement.elementId))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedElement])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'KeyD' && ctrlKey && selectedElement) {
        e.preventDefault()
        dispatch(copyFormElementLink(selectedElement.elementId))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedElement])

  return <div className={css.formConstructorEventListener}>{children}</div>
}

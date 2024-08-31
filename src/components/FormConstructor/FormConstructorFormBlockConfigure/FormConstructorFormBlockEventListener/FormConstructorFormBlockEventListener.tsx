import type { FC, ReactNode } from 'react'
import { useEffect } from 'react'

import { JsonHelper } from '../../../../helpers'
import {
  clearSameInstanceIds,
  copyFormElementLink,
  deleteView,
  getSelectedView,
  insertNewElements,
  loadProjectFromStorage,
  onSetViewMode,
  popHistoryElement,
  setSameElementsIdsById,
  setSelectedView,
  setViewToCopyId,
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
  const selectedView = useAppSelector(getSelectedView)

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
    const onToggleLeftPanel = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'BracketLeft' && ctrlKey) {
        e.preventDefault()
        dispatch(togglePanels('left'))
      }
    }
    const onToggleRightPanel = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'BracketRight' && ctrlKey) {
        e.preventDefault()
        dispatch(togglePanels('right'))
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
    document.addEventListener('keydown', onToggleLeftPanel)
    document.addEventListener('keydown', onToggleRightPanel)

    return () => {
      document.removeEventListener('keydown', onToggleLeftPanel)
      document.removeEventListener('keydown', onToggleRightPanel)
      document.removeEventListener('keydown', onKeyGoBack)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code } = e
      if (selectedView && code === 'Delete') {
        e.preventDefault()
        dispatch(deleteView(selectedView.elementId))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedView])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'KeyD' && ctrlKey && selectedView) {
        e.preventDefault()
        dispatch(copyFormElementLink(selectedView.elementId, selectedView.elementType))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedView])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (selectedView && code === 'KeyQ' && ctrlKey) {
        e.preventDefault()
        dispatch(clearSameInstanceIds())
        dispatch(setSameElementsIdsById(selectedView.elementId))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedView])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (selectedView && code === 'KeyC' && ctrlKey) {
        e.preventDefault()
        dispatch(setViewToCopyId(selectedView.elementId))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedView])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (selectedView && code === 'KeyI' && ctrlKey) {
        e.preventDefault()
        dispatch(clearSameInstanceIds())
        dispatch(insertNewElements(selectedView.elementId, selectedView.elementType))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedView])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code } = e
      if (code === 'Escape') {
        e.preventDefault()
        dispatch(clearSameInstanceIds())
        dispatch(setSelectedView(null))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return <div className={css.formConstructorEventListener}>{children}</div>
}

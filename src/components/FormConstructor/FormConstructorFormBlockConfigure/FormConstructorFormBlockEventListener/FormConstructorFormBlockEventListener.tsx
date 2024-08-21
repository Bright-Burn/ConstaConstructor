import type { FC, ReactNode } from 'react'
import { useEffect } from 'react'

import { JsonHelper } from '../../../../helpers'
import {
  clearSameInstanceIds,
  copyFormElementLink,
  deleteFormElement,
  insertNewElements,
  loadProjectFromStorage,
  onSetViewMode,
  popHistoryElement,
  setElementToCopyId,
  setSameElementsIdsById,
  setSelectedElement,
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
  const { selectedElement } = useAppSelector(state => state.formConstructor)

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
        dispatch(copyFormElementLink(selectedElement))
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
      if (selectedElement && code === 'KeyQ' && ctrlKey) {
        e.preventDefault()
        dispatch(clearSameInstanceIds())
        dispatch(setSameElementsIdsById(selectedElement.elementId))
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
      if (selectedElement && code === 'KeyC' && ctrlKey) {
        e.preventDefault()
        dispatch(setElementToCopyId(selectedElement.elementId))
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
      if (selectedElement && code === 'KeyI' && ctrlKey) {
        e.preventDefault()
        dispatch(clearSameInstanceIds())
        dispatch(insertNewElements(selectedElement))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedElement])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code } = e
      if (code === 'Escape') {
        e.preventDefault()
        dispatch(clearSameInstanceIds())
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(setSelectedElement(null))
      }
    }
    document.body.addEventListener('keydown', escHandler)
    return () => {
      document.body.removeEventListener('keydown', escHandler)
    }
  }, [selectedElement])

  return <div className={css.formConstructorEventListener}>{children}</div>
}

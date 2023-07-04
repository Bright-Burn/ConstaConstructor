import { FC, ReactNode, useEffect } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../store/formElements'
import css from './styles.module.css'

interface Props {
  children?: ReactNode
}

export const FormConstructorFormBlockEventListener: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { selectedElement } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'Space' && ctrlKey) {
        dispatch(formConstructorSlice.actions.togglePanelsByHotkey())
      }
    }

    const onHistoryBack = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (ctrlKey && code === 'KeyZ') {
        dispatch(formConstructorSlice.actions.setHistoryBackState())
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keydown', onHistoryBack)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keydown', onHistoryBack)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code } = e
      if (selectedElement && code === 'Delete') {
        dispatch(
          formConstructorSlice.actions.deleteElement({
            elementId: selectedElement.elementId,
          }),
        )
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedElement])

  return <div className={css.formConstructorEventListener}>{children}</div>
}


import { FC, ReactNode, useEffect } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../store/formElements'
import css from './styles.module.css'
import { historySlice, useHistorySelector } from '../../store/history'

interface Props {
  children?: ReactNode
}

export const FormConstructorFormBlockEventListener: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { savePointToUse } = useHistorySelector(state => state.history)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'Space' && ctrlKey) {
        dispatch(formConstructorSlice.actions.togglePanelsByHotkey())
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    /// Применяет изменения
    const onKeyGoBack = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'KeyZ' && ctrlKey && savePointToUse) {
        console.log(savePointToUse)

        dispatch(
          formConstructorSlice.actions.loadFromSavePoint({
            savePoint: savePointToUse,
          }),
        )
        dispatch(historySlice.actions.pop())
      }
    }

    document.addEventListener('keydown', onKeyGoBack)

    return () => {
      document.removeEventListener('keydown', onKeyGoBack)
    }
  }, [savePointToUse])

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


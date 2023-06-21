import React, { FC, ReactNode, useEffect } from 'react'
import { formConstructorSlice, useAppDispatch } from '../../store/formElements'
import css from './styles.module.css'

interface Props {
  children?: ReactNode
}

export const FormConstructorFormBlockEventListener: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()

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

  return <div className={css.formConstructorEventListener}>{children}</div>
}


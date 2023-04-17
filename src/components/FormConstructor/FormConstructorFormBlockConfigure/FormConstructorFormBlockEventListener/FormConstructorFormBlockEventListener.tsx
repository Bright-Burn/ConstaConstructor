import React, { FC, ReactNode, useEffect } from 'react'
import {
  formConstructorSlice,
  useAppDispatch,
  useAppSelector,
} from '../../store/formElements/slices'
import css from './styles.module.css'

interface Props {
  children?: ReactNode
}
export const FormConstructorFormBlockEventListener: FC<Props> = ({ children }) => {
  console.log(children)

  const dispatch = useAppDispatch()
  const settingsPanelState = useAppSelector(state => state.formConstructor.settingsPanelState)
  const componentsStructurePanelState = useAppSelector(
    state => state.formConstructor.componentsStructurePanelState,
  )

  const onKeyDown = (e: { code: string; ctrlKey: any }) => {
    if (e.code === 'Space' && e.ctrlKey) {
      dispatch(
        formConstructorSlice.actions.togglePanelsByHotkey({
          settingsPanelState: settingsPanelState,
          componentsStructurePanelState: componentsStructurePanelState,
        }),
      )
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', () => {})
    }
  }, [])

  return (
    <div className={css.formConstructerEventListener} onKeyDown={onKeyDown}>
      {children}
    </div>
  )
}

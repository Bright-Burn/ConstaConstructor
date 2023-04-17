import { FC, useEffect } from 'react'
import { FormConstructorFormBlockConfigure } from './FormConstructorFormBlockConfigure'
import css from './styles.module.css'
import { formConstructorSlice, useAppDispatch, useAppSelector } from './store/formElements/slices'

export const FormConstructor: FC = () => {
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
    <div className={css.formConstructor} onKeyDown={onKeyDown}>
      <FormConstructorFormBlockConfigure>
        <FormConstructorFormBlockConfigure.ComponentsStructure />
        <FormConstructorFormBlockConfigure.WhiteFormBlock />
        <FormConstructorFormBlockConfigure.Settings />
      </FormConstructorFormBlockConfigure>
    </div>
  )
}

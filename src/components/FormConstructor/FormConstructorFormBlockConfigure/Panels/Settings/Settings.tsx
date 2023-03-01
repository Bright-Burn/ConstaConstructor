import React, { FC } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../../store/formElements'
import { FormGroupsTypes } from '../../../store/formElements/types'
import { LayoutSettings } from './LayoutSettings'
import { Checkbox } from '@consta/uikit/Checkbox'
import styles from './styles.module.css'

export const Settings: FC = () => {
  const { selectedElement, isGridVisible } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const getSettingsPanel = () => {
    if (selectedElement) {
      switch (selectedElement.elementType) {
        case FormGroupsTypes.LayoutInner || FormGroupsTypes.LayoutOuter:
          return <LayoutSettings />
        default:
          return <>Not implement</>
      }
    }
  }

  const onClickShowGrid = () => {
    dispatch(
      formConstructorSlice.actions.showGrid({
        isGridVisible: !isGridVisible,
      }),
    )
  }

  return (
    <div className={`${styles.settingsBlock} borderCard`}>
      <>
        <Checkbox checked={isGridVisible} label={'Показать сетку'} onClick={onClickShowGrid} />
        {getSettingsPanel()}
      </>
    </div>
  )
}

import React, { FC } from 'react'
import { useAppSelector } from '../../../store/formElements'
import { FormGroupsTypes } from '../../../store/formElements/types'
import { LayoutSettings } from './LayoutSettings'
import styles from './styles.module.css'

export const Settings: FC = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)

  const getSettingsPanel = () => {
    if (selectedElement) {
      switch (selectedElement.elementType) {
        case FormGroupsTypes.Layout:
          return <LayoutSettings />
        default:
          return <>Not implement</>
      }
    }
  }

  return <div className={`${styles.settingsBlock} borderCard`}>{getSettingsPanel()}</div>
}

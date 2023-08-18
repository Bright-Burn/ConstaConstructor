import React, { FC, useState } from 'react'
import { saveModuleToFile, useAppDispatch, useAppSelector } from '../../../store'
import { FormElementTypes, FormGroupsTypes } from '../../../coreTypes'
import { LayoutSettings } from './LayoutSettings'
import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft'
import { NotFound } from './NotFound'
import { getSettingsPanelState, toggleSettingsPanelState } from '../../../store'
import { TextField } from '@consta/uikit/TextField'
import { IconUpload } from '@consta/icons/IconUpload'

// import { projectFromSerilizable } from '../../../projectSaveLoad'

export const Settings: FC = () => {
  const [moduleName, setModuleName] = useState<string | null>(null)

  const settingsPanelState = useAppSelector(getSettingsPanelState)

  const dispatch = useAppDispatch()

  const changeTextFieldValue = ({ value }: { value: string | null }) => setModuleName(value)

  const onSaveModule = () => {
    if (selectedElement && moduleName) {
      dispatch(saveModuleToFile(selectedElement.elementId, moduleName))
    }
  }

  const toggleSettingsPanel = () => {
    dispatch(toggleSettingsPanelState())
  }

  return (
    <>
      {settingsPanelState ? (
        <div className={`borderCard ${styles.settingsBlock} ${styles.settingsContainer} `}>
          <div className={`${styles.elementSettings} m-t-s`}>{getSettingsPanel()}</div>
          <div className={styles.exportText}>
            <TextField
              width='full'
              value={moduleName}
              onChange={changeTextFieldValue}
              type='text'
              label='Экспортировать компонент'
              placeholder='Введите название компонента'
            />
            <Button
              className={styles.exportButton}
              view='clear'
              iconLeft={IconUpload}
              onClick={onSaveModule}
            />
          </div>
        </div>
      ) : (
        <div className={styles.toggleButton}>
          <Button onlyIcon iconLeft={IconArrowLeft} onClick={toggleSettingsPanel} size='s' />
        </div>
      )}
    </>
  )
}

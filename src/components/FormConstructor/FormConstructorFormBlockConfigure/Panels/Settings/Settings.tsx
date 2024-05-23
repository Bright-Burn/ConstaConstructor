import type { FC } from 'react'
import { useState } from 'react'
import { IconArrowLeft } from '@consta/icons/IconArrowLeft'
import { IconClose } from '@consta/icons/IconClose'
import { IconUpload } from '@consta/icons/IconUpload'
import { Button } from '@consta/uikit/Button'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import {
  checkViewMode,
  getSettingsPanelState,
  saveModuleToFile,
  toggleSettingsPanelState,
  useAppDispatch,
  useAppSelector,
} from '../../../store'

import { SettingPanelQualifier } from './SettingsPanelQualifier'

import styles from './styles.module.css'

export const Settings: FC = () => {
  const [moduleName, setModuleName] = useState<string | null>(null)

  const settingsPanelState = useAppSelector(getSettingsPanelState)

  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const isViewMode = useAppSelector(checkViewMode)

  const dispatch = useAppDispatch()

  const changeTextFieldValue = (value: string | null) => {
    setModuleName(value)
  }

  const onSaveModule = () => {
    if (selectedElement && moduleName) {
      dispatch(saveModuleToFile(selectedElement.elementId, moduleName))
    }
  }

  const toggleSettingsPanel = () => {
    dispatch(toggleSettingsPanelState())
  }

  if (isViewMode) {
    return null
  }
  return settingsPanelState ? (
    <div className={`${styles.settingsBlock} ${styles.settingsContainer} `}>
      <div className={styles.settingsTitle}>
        <Text size="xs">Настройки </Text>
        <Button
          onlyIcon={true}
          iconLeft={IconClose}
          size="xs"
          view="ghost"
          onClick={toggleSettingsPanel}
        />
      </div>
      <SettingPanelQualifier />
      <div className={styles.exportText}>
        <TextField
          value={moduleName}
          type="text"
          size="xs"
          label="Экспортировать компонент"
          placeholder="Введите название компонента"
          onChange={changeTextFieldValue}
        />
        <Button
          className={styles.exportButton}
          view="clear"
          size="xs"
          iconLeft={IconUpload}
          onClick={onSaveModule}
        />
      </div>
    </div>
  ) : (
    <div className={styles.toggleButton}>
      <Button onlyIcon={true} iconLeft={IconArrowLeft} size="s" onClick={toggleSettingsPanel} />
    </div>
  )
}

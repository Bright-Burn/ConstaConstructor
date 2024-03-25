import type { FC } from 'react'
import { useState } from 'react'
import { IconUpload } from '@consta/icons/IconUpload'
import { Button } from '@consta/uikit/Button'
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft'
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
// import { projectFromSerilizable } from '../../../projectSaveLoad'

export const Settings: FC = () => {
  const [moduleName, setModuleName] = useState<string | null>(null)

  const settingsPanelState = useAppSelector(getSettingsPanelState)

  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const isViewMode = useAppSelector(checkViewMode)

  const dispatch = useAppDispatch()

  const changeTextFieldValue = ({ value }: { value: string | null }) => {
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
      <SettingPanelQualifier />
      <div className={styles.exportText}>
        <TextField
          width="full"
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

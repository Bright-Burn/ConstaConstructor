import type { FC } from 'react'
import { IconArrowLeft } from '@consta/icons/IconArrowLeft'
import { IconClose } from '@consta/icons/IconClose'
import { Button } from '@consta/uikit/Button'
import { Text } from '@consta/uikit/Text'

import {
  checkDevMode,
  checkViewMode,
  getSettingsPanelState,
  toggleSettingsPanelState,
  useAppDispatch,
  useAppSelector,
} from '../../../store'

import { DevModeSettings } from './DevModeSettigs'
import { SettingPanelQualifier } from './SettingsPanelQualifier'

import styles from './styles.module.css'

export const Settings: FC = () => {
  const settingsPanelState = useAppSelector(getSettingsPanelState)

  const isViewMode = useAppSelector(checkViewMode)
  const isDevMode = useAppSelector(checkDevMode)

  const dispatch = useAppDispatch()

  const toggleSettingsPanel = () => {
    dispatch(toggleSettingsPanelState())
  }

  if (isViewMode) {
    return null
  }
  return settingsPanelState ? (
    isDevMode ? (
      <DevModeSettings />
    ) : (
      <div className={`${styles.settingsBlock} ${styles.settingsContainer} `}>
        <div className={styles.settingsTitle}>
          <Text size="xs">Design </Text>
          <Button
            onlyIcon={true}
            iconLeft={IconClose}
            size="xs"
            view="ghost"
            onClick={toggleSettingsPanel}
          />
        </div>
        <Text size="xs" view="secondary" className="p-t-s">
          Base
        </Text>
        <SettingPanelQualifier />
      </div>
    )
  ) : (
    <div className={styles.toggleButton}>
      <Button onlyIcon={true} iconLeft={IconArrowLeft} size="s" onClick={toggleSettingsPanel} />
    </div>
  )
}

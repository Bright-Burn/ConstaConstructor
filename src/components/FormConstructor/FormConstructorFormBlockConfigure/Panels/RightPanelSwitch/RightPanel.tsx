import {
  useAppSelector,
  getRightPanelState,
  getRightPanelType,
  RightPanelType,
} from '../../../store'
import css from './styles.module.css'

import { OpenRightPaneButton } from './OpenRightPaneButton'
import { FC } from 'react'
import { FormConstructorFormBlockConfigure } from '../../FormConstructorFormBlockConfigure'
import { RightPanelHeader } from './RightPanelHeader'

const rightPanelConfig: Record<RightPanelType, FC> = {
  DeveloperPanel: () => <FormConstructorFormBlockConfigure.DeveloperPanel />,
  Settings: () => <FormConstructorFormBlockConfigure.Settings />,
}

export const RightPanelSwitch = () => {
  const rightPanelState = useAppSelector(getRightPanelState)
  const rightPanelMode = useAppSelector(getRightPanelType)

  const RightPanelContent = rightPanelConfig[rightPanelMode]

  return rightPanelState ? (
    <div className={css.rightPanelContainer}>
      <RightPanelHeader />
      <RightPanelContent />
    </div>
  ) : (
    <OpenRightPaneButton />
  )
}

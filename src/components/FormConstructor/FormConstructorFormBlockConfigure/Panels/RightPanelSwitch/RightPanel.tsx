import type { FC } from 'react'

import type { RightPanelType } from '../../../store'
import {
  getRightPanelState,
  getRightPanelType,
  getSelectedView,
  useAppSelector,
} from '../../../store'
import { FormConstructorFormBlockConfigure } from '../../FormConstructorFormBlockConfigure'

import { OpenRightPaneButton } from './OpenRightPaneButton'
import { RightPanelHeader } from './RightPanelHeader'

import css from './styles.module.css'

const rightPanelConfig: Record<RightPanelType, FC> = {
  DeveloperPanel: () => <FormConstructorFormBlockConfigure.DeveloperPanel />,
  Settings: () => <FormConstructorFormBlockConfigure.Settings />,
}

export const RightPanelSwitch = () => {
  const rightPanelVisible = useAppSelector(getRightPanelState)
  const rightPanelMode = useAppSelector(getRightPanelType)
  // Признак был ли выбран Layout
  const isViewTypeLayout = useAppSelector(getSelectedView)?.elementType === 'Layout'

  // Выбранный компонент в правой части
  const RightPanelContent = isViewTypeLayout
    ? rightPanelConfig[rightPanelMode]
    : rightPanelConfig['Settings']

  return rightPanelVisible ? (
    <div className={css.rightPanelContainer}>
      <RightPanelHeader />
      <RightPanelContent />
    </div>
  ) : (
    <OpenRightPaneButton />
  )
}

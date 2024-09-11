import {
  useAppSelector,
  getRightPanelState,
  getRightPanelType,
  RightPanelType,
  getSelectedView,
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

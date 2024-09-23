import type { FC } from 'react'

import type { RightPanelType } from '../../../store'
import {
  checkViewMode,
  getRightPanelState,
  getRightPanelType,
  getSelectedView,
  useAppSelector,
} from '../../../store'
import { FormConstructorFormBlockConfigure } from '../../FormConstructorFormBlockConfigure'
import { codeElements } from '../DeveloperPanel'

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
  const selectedElementType = useAppSelector(getSelectedView)?.elementType
  const isViewMode = useAppSelector(checkViewMode)

  if (isViewMode) {
    return null
  }
  const developPanelAvailable = selectedElementType && codeElements.has(selectedElementType)

  // Выбранный компонент в правой части
  const RightPanelContent = developPanelAvailable
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

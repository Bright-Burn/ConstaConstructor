import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '../store'

import { FormConstructorFormBlockEventListener } from './FormConstructorFormBlockEventListener'
import {
  ComponentsStructure,
  DeveloperPanel,
  FormBlock,
  Header,
  RightPanelSwitch,
  Settings,
} from './Panels'
import type { IFormConstructorFormBlockConfigure } from './types'

interface Props {
  children?: ReactNode
}

export const FormConstructorFormBlockConfigure: FC<Props> & IFormConstructorFormBlockConfigure = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <FormConstructorFormBlockEventListener>{children}</FormConstructorFormBlockEventListener>
    </Provider>
  )
}

FormConstructorFormBlockConfigure.RightPanelSwitch = RightPanelSwitch
FormConstructorFormBlockConfigure.DeveloperPanel = DeveloperPanel
FormConstructorFormBlockConfigure.Settings = Settings
FormConstructorFormBlockConfigure.WhiteFormBlock = FormBlock
FormConstructorFormBlockConfigure.ComponentsStructure = ComponentsStructure
FormConstructorFormBlockConfigure.Header = Header

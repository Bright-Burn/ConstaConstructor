import { FC, ReactNode } from 'react'
import { IFormConstructorFormBlockConfigure } from './types'
import { ComponentsStructure, FormBlock, Settings, Header } from './Panels'
import { Provider } from 'react-redux'
import { store } from '../store'
import { FormConstructorFormBlockEventListener } from './FormConstructorFormBlockEventListener/FormConstructorFormBlockEventListener'

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

FormConstructorFormBlockConfigure.Settings = Settings
FormConstructorFormBlockConfigure.WhiteFormBlock = FormBlock
FormConstructorFormBlockConfigure.ComponentsStructure = ComponentsStructure
FormConstructorFormBlockConfigure.Header = Header

import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ConpomonentStructure } from './Panels/ConpomonentStructure'
import { Settings } from './Panels/SettingsBlock'
import { store } from '../store'
import { IFormConstructorFormBlockConfigure } from './types'
import { FormBlock } from './Panels/FormBlock'

interface Props {
  children?: ReactNode
}

const FormConstructorFormBlockConfigure: FC<Props> & IFormConstructorFormBlockConfigure = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>
}

FormConstructorFormBlockConfigure.Settings = Settings
FormConstructorFormBlockConfigure.WhiteFormBlock = FormBlock
FormConstructorFormBlockConfigure.ConpomonentStructure = ConpomonentStructure

export default FormConstructorFormBlockConfigure

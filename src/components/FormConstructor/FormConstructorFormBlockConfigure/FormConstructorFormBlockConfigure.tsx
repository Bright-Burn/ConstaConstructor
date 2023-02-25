import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { IFormConstructorFormBlockConfigure } from './types'
import { ConpomonentStructure, FormBlock, Settings } from './Panels'

interface Props {
  children?: ReactNode
}

export const FormConstructorFormBlockConfigure: FC<Props> & IFormConstructorFormBlockConfigure = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>
}

FormConstructorFormBlockConfigure.Settings = Settings
FormConstructorFormBlockConfigure.WhiteFormBlock = FormBlock
FormConstructorFormBlockConfigure.ConpomonentStructure = ConpomonentStructure

import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { IFormConstructorFormBlockConfigure } from './types'

interface Props {
  children?: ReactNode
}

const FormConstructorFormBlockConfigure: FC<Props> & IFormConstructorFormBlockConfigure = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>
}

// Дивы тут временно
FormConstructorFormBlockConfigure.SettingsBlock = () => <div></div>
FormConstructorFormBlockConfigure.WhiteFormBlock = () => <div></div>
FormConstructorFormBlockConfigure.ConpomonentStructureBlock = () => <div></div>

export default FormConstructorFormBlockConfigure

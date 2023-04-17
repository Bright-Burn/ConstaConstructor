import { FC, ReactNode } from 'react'
import { IFormConstructorFormBlockConfigure } from './types'
import { ComponentsStructure, FormBlock, Settings } from './Panels'

interface Props {
  children?: ReactNode
}

export const FormConstructorFormBlockConfigure: FC<Props> & IFormConstructorFormBlockConfigure = ({
  children,
}) => {
  return <>{children}</>
}

FormConstructorFormBlockConfigure.Settings = Settings
FormConstructorFormBlockConfigure.WhiteFormBlock = FormBlock
FormConstructorFormBlockConfigure.ComponentsStructure = ComponentsStructure

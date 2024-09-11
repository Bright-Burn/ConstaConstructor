import { LayoutElementPropsStyles } from '../../../../coreTypes'

export type BuildedCode = {
  jsxCode: string
  cssCode: string
}

export type LayoutStylesBuilder = (props: LayoutElementPropsStyles) => BuildedCode

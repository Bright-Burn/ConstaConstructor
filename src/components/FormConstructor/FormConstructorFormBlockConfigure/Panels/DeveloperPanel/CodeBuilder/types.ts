import type { LayoutElementPropsStyles } from '../../../../coreTypes'

export type BuildedCode = {
  jsxCode: string
  cssCode: string
}

export type LayoutStylesBuilder = (
  componentName: string,
  props: LayoutElementPropsStyles,
) => BuildedCode

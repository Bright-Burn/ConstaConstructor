import type { LayoutElementPropsStyles } from '../../../../../coreTypes'
import type { BuildedCode } from '../types'

export type LayoutStylesBuilder = (
  componentName: string,
  props: LayoutElementPropsStyles,
) => BuildedCode

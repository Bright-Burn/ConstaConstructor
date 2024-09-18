import type { LayoutElementPropsStyles } from '../../../../../coreTypes'
import type { GeneratedCode } from '../types'

export type LayoutStylesBuilder = (
  componentName: string,
  props: LayoutElementPropsStyles,
) => GeneratedCode

import type { UnionProps } from '../../../../../coreTypes'
import type { GeneratedCode } from '../types'

export type DefaultCodeBuilder = (
  componentName: string,
  JsxName: string,
  props: UnionProps['props'],
) => GeneratedCode

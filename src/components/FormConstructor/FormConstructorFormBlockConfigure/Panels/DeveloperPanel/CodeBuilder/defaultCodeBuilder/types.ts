import { UnionProps } from '../../../../../coreTypes'
import { GeneratedCode } from '../types'

export type DefaultCodeBuilder = (
  componentName: string,
  props: UnionProps['props'],
) => GeneratedCode

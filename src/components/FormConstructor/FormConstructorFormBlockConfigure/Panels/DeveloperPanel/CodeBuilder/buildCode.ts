import type { AllElementTypes, FormInstance } from '../../../../coreTypes'

import { buildLayoutCode } from './layoutCodeBuilder'
import type { BuildedCode } from './types'

type GenericBuildeFunc<T extends AllElementTypes> = (
  componentName: string,
  props: FormInstance<T>['props'],
) => BuildedCode

type CodeBuilder = {
  [T in AllElementTypes]?: GenericBuildeFunc<T>
}

export const codeBuilders: CodeBuilder = {
  Layout: (name, props) => buildLayoutCode(name, props.props),
}

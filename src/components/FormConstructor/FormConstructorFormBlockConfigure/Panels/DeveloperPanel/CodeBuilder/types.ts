import type { AllElementTypes, FormInstance } from '../../../../coreTypes'

export type BuildedCode = {
  jsxCode: string
  cssCode: string
}

export type GenericBuildeFunc<T extends AllElementTypes> = (
  componentName: string,
  props: FormInstance<T>['props'],
) => BuildedCode

export type CodeBuilder = {
  [T in AllElementTypes]?: GenericBuildeFunc<T>
}

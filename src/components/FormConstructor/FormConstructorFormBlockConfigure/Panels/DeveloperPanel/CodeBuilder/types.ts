import type { AllElementTypes, FormInstance } from '../../../../coreTypes'

export type GeneratedCode = {
  jsxCode: string
  cssCode: string
}

export type GenericBuildeFunc<T extends AllElementTypes> = (
  componentName: string,
  props: FormInstance<T>['props'],
) => GeneratedCode

export type CodeBuilder = {
  [T in AllElementTypes]?: GenericBuildeFunc<T>
}

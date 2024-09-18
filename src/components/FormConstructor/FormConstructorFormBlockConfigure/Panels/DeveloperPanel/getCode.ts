import type { AllElementTypes, UnionProps } from '../../../coreTypes'

import type { BuildedCode } from './CodeBuilder'
import { codeBuilders } from './CodeBuilder'

export const getCode = (selectedViewProps: UnionProps, viewLabel: string) => {
  let code: BuildedCode | null = null

  switch (selectedViewProps.type) {
    case 'Layout': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
  }
  return code
}

// Элементы для которых реализована панель разработчика
export const codeElements: Set<AllElementTypes> = new Set(['Layout'])

import type { UnionProps } from '../../../coreTypes'

import type { GeneratedCode } from './CodeBuilder'
import { codeBuilders } from './CodeBuilder'

export const getCode = (selectedViewProps: UnionProps, viewLabel: string) => {
  let code: GeneratedCode | null = null

  switch (selectedViewProps.type) {
    case 'Layout': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'Button': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'Badge': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
  }
  return code
}

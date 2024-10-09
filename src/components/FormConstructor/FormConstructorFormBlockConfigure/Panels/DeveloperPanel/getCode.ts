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
    case 'Avatar': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'AvatarGroup': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'BreadcrumbsFormElement': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'Card': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'Checkbox': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'ComboBox': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'ChoiceGroup': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'DatePicker': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'DataTime': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'Informer': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'List': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'RadioButton': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'SelectForm': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'Switch': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'Tabs': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
    case 'Tag': {
      const buildFunc = codeBuilders[selectedViewProps.type]
      if (buildFunc) {
        code = buildFunc(viewLabel, selectedViewProps)
      }
      break
    }
  }
  return code
}

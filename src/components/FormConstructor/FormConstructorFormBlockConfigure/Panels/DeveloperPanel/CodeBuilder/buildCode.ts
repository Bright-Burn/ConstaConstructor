import { buildCodeDefault } from './defaultCodeBuilder'
import { buildLayoutCode } from './layoutCodeBuilder'
import type { CodeBuilder } from './types'

/**
 * Общий билдер для генерации кода
 */
export const codeBuilders: CodeBuilder = {
  Layout: (componentLabel, props) => buildLayoutCode(componentLabel, props.props),
  Button: (componentLabel, props) => buildCodeDefault(componentLabel, 'Button', props.props),
  Badge: (componentLabel, props) => buildCodeDefault(componentLabel, 'Badge', props.props),
  Avatar: (componentLabel, props) => buildCodeDefault(componentLabel, 'Avatar', props.props),
  AvatarGroup: (componentLabel, props) =>
    buildCodeDefault(componentLabel, 'AvatarGroup', props.props),
  BreadcrumbsFormElement: (componentLabel, props) =>
    buildCodeDefault(componentLabel, 'Breadcrumbs', props.props),
  Card: (componentLabel, props) => buildCodeDefault(componentLabel, 'Card', props.props),
  Checkbox: (componentLabel, props) => buildCodeDefault(componentLabel, 'Checkbox', props.props),
  ComboBox: (componentLabel, props) => buildCodeDefault(componentLabel, 'ComboBox', props.props),
} as const

// Элементы для которых реализована панель разработчика
export const codeElements: Set<string> = new Set(Object.keys(codeBuilders))

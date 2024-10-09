import { buildCodeDefault } from './defaultCodeBuilder'
import { buildLayoutCode } from './layoutCodeBuilder'
import { buildListCode } from './listCodeBuilder'
import { textCodeBuilder } from './textCodeBuilder'
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
  ComboBox: (componentLabel, props) => buildCodeDefault(componentLabel, 'Combobox', props.props),
  ChoiceGroup: (componentLabel, props) =>
    buildCodeDefault(componentLabel, 'ChoiceGroup', props.props),
  DatePicker: (componentLabel, props) =>
    buildCodeDefault(componentLabel, 'DatePicker', props.props),
  DataTime: (componentLabel, props) => buildCodeDefault(componentLabel, 'DateTime', props.props),
  Informer: (componentLabel, props) => buildCodeDefault(componentLabel, 'Informer', props.props),
  List: (componentLabel, props) => buildListCode(componentLabel, props.props),
  RadioButton: (componentLabel, props) => buildCodeDefault(componentLabel, 'Radio', props.props),
  SelectForm: (componentLabel, props) => buildCodeDefault(componentLabel, 'Select', props.props),
  Switch: (componentLabel, props) => buildCodeDefault(componentLabel, 'Switch', props.props),
  Tabs: (componentLabel, props) => buildCodeDefault(componentLabel, 'Tabs', props.props),
  Tag: (componentLabel, props) => buildCodeDefault(componentLabel, 'Tag', props.props),
  Text: (componentLabel, props) => textCodeBuilder(componentLabel, props.props),
} as const

// Элементы для которых реализована панель разработчика
export const codeElements: Set<string> = new Set(Object.keys(codeBuilders))

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
} as const

// Элементы для которых реализована панель разработчика
export const codeElements: Set<string> = new Set(Object.keys(codeBuilders))

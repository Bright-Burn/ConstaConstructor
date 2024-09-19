import { buildCodeDefault } from './defaultCodeBuilder'
import { buildLayoutCode } from './layoutCodeBuilder'
import type { CodeBuilder } from './types'

/**
 * Общий билдер для генерации кода
 */
export const codeBuilders: CodeBuilder = {
  Layout: (name, props) => buildLayoutCode(name, props.props),
  Button: (name, props) => buildCodeDefault(name, props.props),
}

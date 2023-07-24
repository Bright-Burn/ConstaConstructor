import { TextProps } from '@consta/uikit/Text'
import { BaseProps, IFormElement } from './types'

type TextContent = { content: string }

export type TextElementProps = TextProps & BaseProps & TextContent

export interface IFormElementText extends IFormElement {
  props: TextElementProps
}

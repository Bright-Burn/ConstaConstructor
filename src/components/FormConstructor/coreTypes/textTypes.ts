import { TextProps } from '@consta/uikit/Text'
import { BaseProps, BrandProps, ConcreteSelectedElement, FormElementDictTypes, IFormElement } from './types'

type TextContent = { content: string }

export type TextElementProps = TextProps & TextContent & BaseProps

export type TextElement = ConcreteSelectedElement<typeof FormElementDictTypes.Text>

export type BrandTextElementProps = BrandProps<TextElementProps, 'Text'>

export interface IFormElementText extends IFormElement {
  props: BrandTextElementProps
}

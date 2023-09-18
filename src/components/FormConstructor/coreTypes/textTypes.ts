import {
  TextPropAlign,
  TextPropDisplay,
  TextPropFont,
  TextPropLineHeight,
  TextPropSize,
  TextPropSpacing,
  TextPropType,
  TextPropView,
  TextPropWeight,
} from '@consta/uikit/Text'
import {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

type TextContent = { content: string }

export type TransformTextType = 'underline' | 'uppercase' | 'italic'

export type TextElementProps = {
  size?: TextPropSize
  view?: TextPropView
  align?: TextPropAlign
  cursor?: 'pointer'
  decoration?: 'underline'
  display?: TextPropDisplay
  font?: TextPropFont
  lineHeight?: TextPropLineHeight
  spacing?: TextPropSpacing
  fontStyle?: 'italic'
  transform?: 'uppercase'
  type?: TextPropType
  weight?: TextPropWeight
  width?: 'default'
  truncate?: boolean
  transformText?: TransformTextType
} & BaseProps &
  TextContent

export type TextElement = ConcreteSelectedElement<typeof FormElementDictTypes.Text>

export type BrandTextElementProps = BrandProps<TextElementProps, 'Text'>

export interface IFormElementText extends IFormElement {
  props: BrandTextElementProps
}

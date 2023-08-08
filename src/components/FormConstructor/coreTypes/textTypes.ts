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
import { IconComponent } from '@consta/uikit/Icon'

type TextContent = { content: string }

export type AlignTextType = { name: TextPropAlign; icon: IconComponent }

export type textDecorationType = {
  name?: 'underline' | 'uppercase' | 'italic'
  icon?: IconComponent
}

export type TextElementProps = {
  size?: TextPropSize
  view?: TextPropView
  align?: AlignTextType
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
  transformText: textDecorationType
} & BaseProps &
  TextContent

export type TextElement = ConcreteSelectedElement<typeof FormElementDictTypes.Text>

export type BrandTextElementProps = BrandProps<TextElementProps, 'Text'>

export interface IFormElementText extends IFormElement {
  props: BrandTextElementProps
}

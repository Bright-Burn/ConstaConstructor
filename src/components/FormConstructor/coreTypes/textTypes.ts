import type { IconComponent } from '@consta/icons/Icon'
import type {
  TextPropAlign,
  TextPropDisplay,
  TextPropFont,
  TextPropLineHeight,
  TextPropSize,
  TextPropSpacing,
  TextPropView,
  TextPropWeight,
} from '@consta/uikit/Text'

import type { ConstaColor } from '../../ConstaPalette'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

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
  weight?: TextPropWeight
  width?: 'default'
  truncate?: boolean
  transformText: textDecorationType
  style?: TextlementStyles
} & BaseProps &
  TextContent

export type TextElement = ConcreteSelectedElement<typeof FormElementDictTypes.Text>

export type BrandTextElementProps = BrandProps<TextElementProps, 'Text'>

export type IFormElementText = OmitInstanceId<
  IFormElement & {
    props: BrandTextElementProps
  }
>
export type TextlementStyles = {
  color: ConstaColor | undefined
}

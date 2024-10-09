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

import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type AlignTextType = { name: TextPropAlign; icon: IconComponent }

type TextPropTransform = 'underline' | 'uppercase' | 'italic'

export type TextDecorationType = {
  name?: TextPropTransform
  icon?: IconComponent
}

type UiLibProps = {
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
  weight?: TextPropWeight
  width?: 'default'
  truncate?: boolean
  transformText?: TextPropTransform
  content: string
}

type Styles = {
  color: ConstaColor | undefined
}

export type TextProps = InstanceProps<UiLibProps, Styles>

export type TextElement = ConcreteSelectedView<typeof FormElementDictTypes.Text>

export type BrandTextProps = BrandProps<TextProps, 'Text'>

export type IFormElementText = OmitInstanceId<
  IFormElement & {
    props: BrandTextProps
  }
>

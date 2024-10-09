import type {
  TextPropDisplay,
  TextPropFont,
  TextPropLineHeight,
  TextPropSize,
  TextPropSpacing,
  TextPropView,
  TextPropWeight,
} from '@consta/uikit/Text'

import type { ConstaColor } from '../../../../../ConstaPalette'
import type { AlignTextType, BaseProps, TextDecorationType } from '../../../../coreTypes'

type Styles = {
  color: ConstaColor | undefined
}

export type TextProps_Deprecated = {
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
  transformText: TextDecorationType
  style?: Styles
  content: string
} & BaseProps

import {
  TextPropSize,
  TextPropView,
  TextPropAlign,
  TextPropWeight,
  TextPropDisplay,
  TextPropFont,
  TextPropType,
} from '@consta/uikit/Text'
import { AlignTextType } from '../../../../coreTypes'

export type ValueTypes =
  | TextPropSize
  | TextPropView
  | TextPropAlign
  | TextPropWeight
  | TextPropDisplay
  | TextPropFont
  | TextPropType
  | string
  | TextPropType
  | null
  | AlignTextType

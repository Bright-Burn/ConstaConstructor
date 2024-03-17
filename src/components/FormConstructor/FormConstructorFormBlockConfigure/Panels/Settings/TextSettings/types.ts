import type {
  TextPropAlign,
  TextPropDisplay,
  TextPropFont,
  TextPropSize,
  TextPropType,
  TextPropView,
  TextPropWeight,
} from '@consta/uikit/Text'

import type { AlignTextType } from '../../../../coreTypes'

export type ValueTypes =
  | TextPropSize
  | TextPropView
  | TextPropAlign
  | TextPropWeight
  | TextPropDisplay
  | TextPropFont
  | TextPropType
  | null
  | AlignTextType

import {
  TextPropView,
  TextPropSize,
  TextPropAlign,
  TextPropWeight,
  TextPropLineHeight,
  TextPropSpacing,
  TextPropDecoration,
  TextPropDisplay,
  TextPropFontStyle,
  TextPropFont,
  TextPropCursor,
  TextPropType,
  TextPropTransform,
} from '@consta/uikit/Text'
import { TextElementProps } from '../../../../coreTypes'
export const sizes: TextPropSize[] = [
  'm',
  '2xs',
  'xs',
  's',
  'l',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
]
export const views: TextPropView[] = [
  'primary',
  'alert',
  'brand',
  'ghost',
  'link',
  'linkMinor',
  'secondary',
  'success',
  'warning',
]
export const textAlign: TextPropAlign[] = ['left', 'center', 'right']
export const weight: TextPropWeight[] = [
  'thin',
  'light',
  'regular',
  'medium',
  'semibold',
  'bold',
  'black',
]
export const lineHeight: TextPropLineHeight[] = ['2xs', 'xs', 's', 'm', 'l']
export const spacing: TextPropSpacing[] = ['xs', 's', 'm', 'l']
export const display: TextPropDisplay[] = ['block', 'inlineBlock', 'inline']
export const font: TextPropFont[] = ['primary', 'mono']
export const type: TextPropType[] = ['blockquote', 'p', 'h3', 'h2', 'h1']

const decoration: TextPropDecoration = 'underline'
const fontStyle: TextPropFontStyle = 'italic'
const cursor: TextPropCursor = 'pointer'
const transform: TextPropTransform = 'uppercase'

export const getPropsValue = (field: keyof TextElementProps) => {
  switch (field) {
    case 'decoration':
      return decoration
    case 'fontStyle':
      return fontStyle
    case 'cursor':
      return cursor
    case 'transform':
      return transform
  }
}

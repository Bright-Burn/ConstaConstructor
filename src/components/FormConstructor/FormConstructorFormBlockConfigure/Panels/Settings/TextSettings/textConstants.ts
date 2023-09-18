import {
  TextPropView,
  TextPropSize,
  TextPropLineHeight,
  TextPropDecoration,
  TextPropDisplay,
  TextPropFontStyle,
  TextPropFont,
  TextPropCursor,
  TextPropType,
  TextPropTransform,
  TextPropAlign,
} from '@consta/uikit/Text'
import { TextElementProps } from '../../../../coreTypes'
import { IconAlignLeft } from '@consta/icons/IconAlignLeft'
import { IconAlignCenter } from '@consta/icons/IconAlignCenter'
import { IconAlignRight } from '@consta/icons/IconAlignRight'
import { IconColorText } from '@consta/icons/IconColorText'
import { IconItalic } from '@consta/icons/IconItalic'
import { IconType } from '@consta/icons/IconType'
import { IconComponent } from '@consta/uikit/Icon'

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
export const textAlign: TextDecorationType[] = [
  { name: 'left', icon: IconAlignLeft },
  { name: 'center', icon: IconAlignCenter },
  { name: 'right', icon: IconAlignRight },
]

export type TextDecorationType = {
  name: string
  icon: IconComponent
}

export const alignDist: Record<TextPropAlign, TextDecorationType> = {
  left: { name: 'left', icon: IconAlignLeft },
  center: { name: 'center', icon: IconAlignCenter },
  right: { name: 'right', icon: IconAlignRight },
}

export const transformText: TextDecorationType[] = [
  { name: 'underline', icon: IconColorText },
  { name: 'uppercase', icon: IconType },
  { name: 'italic', icon: IconItalic },
]
export const weight = ['', 'thin', 'light', 'regular', 'medium', 'semibold', 'bold', 'black']
export const lineHeight: TextPropLineHeight[] = ['2xs', 'xs', 's', 'm', 'l']
export const spacing = ['', 'xs', 's', 'm', 'l']
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

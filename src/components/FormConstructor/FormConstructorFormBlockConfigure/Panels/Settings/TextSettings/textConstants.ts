import { IconAlignCenter } from '@consta/icons/IconAlignCenter'
import { IconAlignLeft } from '@consta/icons/IconAlignLeft'
import { IconAlignRight } from '@consta/icons/IconAlignRight'
import { IconColorText } from '@consta/icons/IconColorText'
import { IconItalic } from '@consta/icons/IconItalic'
import { IconType } from '@consta/icons/IconType'
import type { TextPropLineHeight, TextPropSize, TextPropView } from '@consta/uikit/Text'

import type { AlignTextType, textDecorationType } from '../../../../coreTypes'

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
export const textAlign: AlignTextType[] = [
  { name: 'left', icon: IconAlignLeft },
  { name: 'center', icon: IconAlignCenter },
  { name: 'right', icon: IconAlignRight },
]

export const transformText: textDecorationType[] = [
  { name: 'underline', icon: IconColorText },
  { name: 'uppercase', icon: IconType },
  { name: 'italic', icon: IconItalic },
]
export const weight: ('thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black')[] = [
  'thin',
  'light',
  'regular',
  'medium',
  'semibold',
  'bold',
  'black',
]
export const lineHeight: TextPropLineHeight[] = ['2xs', 'xs', 's', 'm', 'l']
export const spacing: ('xs' | 's' | 'm' | 'l')[] = ['xs', 's', 'm', 'l']

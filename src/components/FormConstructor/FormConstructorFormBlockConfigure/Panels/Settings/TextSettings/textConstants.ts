import { IconAlignCenter } from '@consta/icons/IconAlignCenter'
import { IconAlignLeft } from '@consta/icons/IconAlignLeft'
import { IconAlignRight } from '@consta/icons/IconAlignRight'
import { IconColorText } from '@consta/icons/IconColorText'
import { IconItalic } from '@consta/icons/IconItalic'
import { IconType } from '@consta/icons/IconType'
import type { TextPropLineHeight, TextPropSize, TextPropView } from '@consta/uikit/Text'

import type { AlignTextType, TextDecorationType } from '../../../../coreTypes'

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
  'secondary',
  'brand',
  'ghost',
  'link',
  'linkMinor',
  'system',
  'normal',
  'success',
  'warning',
  'alert',
  'caution',
  'critical',
]
export const textAlign: AlignTextType[] = [
  { name: 'left', icon: IconAlignLeft },
  { name: 'center', icon: IconAlignCenter },
  { name: 'right', icon: IconAlignRight },
]

export const transformText: TextDecorationType[] = [
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

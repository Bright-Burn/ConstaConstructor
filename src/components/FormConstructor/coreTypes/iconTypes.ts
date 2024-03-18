import { IconAdd } from '@consta/icons/IconAdd'
import { IconAddToComparison } from '@consta/icons/IconAddToComparison'
import { IconAlert } from '@consta/icons/IconAlert'
import { IconAllDone } from '@consta/icons/IconAllDone'
import { IconArrowFirst } from '@consta/icons/IconArrowFirst'
import { IconArrowLast } from '@consta/icons/IconArrowLast'
import { IconArrowNext } from '@consta/icons/IconArrowNext'
import { IconArrowPrevious } from '@consta/icons/IconArrowPrevious'
import { IconArrowRedone } from '@consta/icons/IconArrowRedone'
import { IconArrowUndone } from '@consta/icons/IconArrowUndone'
import { IconCancel } from '@consta/icons/IconCancel'
import { IconCheck } from '@consta/icons/IconCheck'
import { IconClose } from '@consta/icons/IconClose'
import { IconCopy } from '@consta/icons/IconCopy'
import { IconDownload } from '@consta/icons/IconDownload'
import { IconDraggable } from '@consta/icons/IconDraggable'
import { IconEdit } from '@consta/icons/IconEdit'
import { IconExit } from '@consta/icons/IconExit'
import { IconEye } from '@consta/icons/IconEye'
import { IconEyeClose } from '@consta/icons/IconEyeClose'
import { IconHealth } from '@consta/icons/IconHealth'
import { IconInComparison } from '@consta/icons/IconInComparison'
import { IconInfo } from '@consta/icons/IconInfo'
import { IconIntroduction } from '@consta/icons/IconIntroduction'
import { IconLoading } from '@consta/icons/IconLoading'
import { IconOpenInNew } from '@consta/icons/IconOpenInNew'
import { IconPaste } from '@consta/icons/IconPaste'
import { IconQuestion } from '@consta/icons/IconQuestion'
import { IconRemove } from '@consta/icons/IconRemove'
import { IconRemoveFromComparison } from '@consta/icons/IconRemoveFromComparison'
import { IconReply } from '@consta/icons/IconReply'
import { IconResize } from '@consta/icons/IconResize'
import { IconRestart } from '@consta/icons/IconRestart'
import { IconRevert } from '@consta/icons/IconRevert'
import { IconRouble } from '@consta/icons/IconRouble'
import { IconRoute } from '@consta/icons/IconRoute'
import { IconShuffle } from '@consta/icons/IconShuffle'
import { IconSlide } from '@consta/icons/IconSlide'
import { IconTrash } from '@consta/icons/IconTrash'
import { IconUpload } from '@consta/icons/IconUpload'
import { IconWarning } from '@consta/icons/IconWarning'
import type { IconPropSize, IconPropView } from '@consta/uikit/Icon'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

export type IconNames = keyof typeof Icons

export type IconProps = {
  size?: IconPropSize
  view?: IconPropView
  icons: IconNames
} & BaseProps

export interface IFormElementIcon extends IFormElement {
  props: BrandIconProps
}

export type BrandIconProps = BrandProps<IconProps, 'Icon'>

export type IconElement = ConcreteSelectedElement<typeof FormElementDictTypes.Icon>

export const Icons = {
  IconAlert,
  IconHealth,
  IconInfo,
  IconQuestion,
  IconRouble,
  IconWarning,
  IconAdd,
  IconAddToComparison,
  IconAllDone,
  IconArrowLast,
  IconArrowFirst,
  IconArrowNext,
  IconArrowPrevious,
  IconArrowRedone,
  IconArrowUndone,
  IconCancel,
  IconCheck,
  IconClose,
  IconCopy,
  IconDownload,
  IconDraggable,
  IconEdit,
  IconExit,
  IconEye,
  IconEyeClose,
  IconInComparison,
  IconIntroduction,
  IconLoading,
  IconOpenInNew,
  IconPaste,
  IconRemove,
  IconRemoveFromComparison,
  IconReply,
  IconResize,
  IconRestart,
  IconRevert,
  IconRoute,
  IconShuffle,
  IconSlide,
  IconTrash,
  IconUpload,
}
export const icons: IconNames[] = [
  'IconAlert',
  'IconHealth',
  'IconInfo',
  'IconQuestion',
  'IconRouble',
  'IconWarning',
  'IconAdd',
  'IconAddToComparison',
  'IconAllDone',
  'IconArrowLast',
  'IconArrowFirst',
  'IconArrowNext',
  'IconArrowPrevious',
  'IconArrowRedone',
  'IconArrowUndone',
  'IconCancel',
  'IconCheck',
  'IconClose',
  'IconCopy',
  'IconDownload',
  'IconDraggable',
  'IconEdit',
  'IconExit',
  'IconEye',
  'IconEyeClose',
  'IconInComparison',
  'IconIntroduction',
  'IconLoading',
  'IconOpenInNew',
  'IconPaste',
  'IconRemove',
  'IconRemoveFromComparison',
  'IconReply',
  'IconResize',
  'IconRestart',
  'IconRevert',
  'IconRoute',
  'IconShuffle',
  'IconSlide',
  'IconTrash',
  'IconUpload',
]

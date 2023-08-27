import { IconPropSize, IconPropView } from '@consta/uikit/Icon'
import {
  BaseProps,
  IFormElement,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
} from './types'
import { IconAlert } from '@consta/icons/IconAlert'
import { IconHealth } from '@consta/icons/IconHealth'
import { IconInfo } from '@consta/icons/IconInfo'
import { IconQuestion } from '@consta/icons/IconQuestion'
import { IconRouble } from '@consta/icons/IconRouble'
import { IconWarning } from '@consta/icons/IconWarning'
import { IconAdd } from '@consta/icons/IconAdd'
import { IconClose } from '@consta/icons/IconClose'
import { IconAddToComparison } from '@consta/icons/IconAddToComparison'
import { IconAllDone } from '@consta/icons/IconAllDone'
import { IconArrowLast } from '@consta/icons/IconArrowLast'
import { IconArrowFirst } from '@consta/icons/IconArrowFirst'
import { IconArrowNext } from '@consta/icons/IconArrowNext'
import { IconArrowPrevious } from '@consta/icons/IconArrowPrevious'
import { IconArrowRedone } from '@consta/icons/IconArrowRedone'
import { IconArrowUndone } from '@consta/icons/IconArrowUndone'
import { IconCancel } from '@consta/icons/IconCancel'
import { IconCheck } from '@consta/icons/IconCheck'
import { IconCopy } from '@consta/icons/IconCopy'
import { IconDownload } from '@consta/icons/IconDownload'
import { IconDraggable } from '@consta/icons/IconDraggable'
import { IconEdit } from '@consta/icons/IconEdit'
import { IconExit } from '@consta/icons/IconExit'
import { IconEye } from '@consta/icons/IconEye'
import { IconEyeClose } from '@consta/icons/IconEyeClose'
import { IconInComparison } from '@consta/icons/IconInComparison'
import { IconIntroduction } from '@consta/icons/IconIntroduction'
import { IconLoading } from '@consta/icons/IconLoading'
import { IconOpenInNew } from '@consta/icons/IconOpenInNew'
import { IconPaste } from '@consta/icons/IconPaste'
import { IconRemove } from '@consta/icons/IconRemove'
import { IconRemoveFromComparison } from '@consta/icons/IconRemoveFromComparison'
import { IconReply } from '@consta/icons/IconReply'
import { IconResize } from '@consta/icons/IconResize'
import { IconRestart } from '@consta/icons/IconRestart'
import { IconRevert } from '@consta/icons/IconRevert'
import { IconRoute } from '@consta/icons/IconRoute'
import { IconShuffle } from '@consta/icons/IconShuffle'
import { IconSlide } from '@consta/icons/IconSlide'
import { IconTrash } from '@consta/icons/IconTrash'
import { IconUpload } from '@consta/icons/IconUpload'

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
  IconAlert: IconAlert,
  IconHealth: IconHealth,
  IconInfo: IconInfo,
  IconQuestion: IconQuestion,
  IconRouble: IconRouble,
  IconWarning: IconWarning,
  IconAdd: IconAdd,
  IconAddToComparison: IconAddToComparison,
  IconAllDone: IconAllDone,
  IconArrowLast: IconArrowLast,
  IconArrowFirst: IconArrowFirst,
  IconArrowNext: IconArrowNext,
  IconArrowPrevious: IconArrowPrevious,
  IconArrowRedone: IconArrowRedone,
  IconArrowUndone: IconArrowUndone,
  IconCancel: IconCancel,
  IconCheck: IconCheck,
  IconClose: IconClose,
  IconCopy: IconCopy,
  IconDownload: IconDownload,
  IconDraggable: IconDraggable,
  IconEdit: IconEdit,
  IconExit: IconExit,
  IconEye: IconEye,
  IconEyeClose: IconEyeClose,
  IconInComparison: IconInComparison,
  IconIntroduction: IconIntroduction,
  IconLoading: IconLoading,
  IconOpenInNew: IconOpenInNew,
  IconPaste: IconPaste,
  IconRemove: IconRemove,
  IconRemoveFromComparison: IconRemoveFromComparison,
  IconReply: IconReply,
  IconResize: IconResize,
  IconRestart: IconRestart,
  IconRevert: IconRevert,
  IconRoute: IconRoute,
  IconShuffle: IconShuffle,
  IconSlide: IconSlide,
  IconTrash: IconTrash,
  IconUpload: IconUpload,
}

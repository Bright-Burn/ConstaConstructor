import { IconPropSize, IconPropView } from '@consta/uikit/Icon'
import { BaseProps, IFormElement } from './types'
import { Icons } from '../../FormConstructorFormBlockConfigure/Elements/IconFormElement/mocks'

export type iconNames = keyof typeof Icons

export type IconProps = {
    size?: IconPropSize   
    view?: IconPropView
    icons: iconNames
  } & BaseProps
  

export interface IFormElementIcon extends IFormElement {
  props: IconProps
}

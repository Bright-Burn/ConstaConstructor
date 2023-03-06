import { IconPropSize, IconPropView } from '@consta/icons/Icon'
import { BaseProps, IFormElement } from './types'

export type Props = {
    view?: IconPropView
    size?: IconPropSize
}

export type IconElementProps = Props & BaseProps

export interface IFormElementIcon extends IFormElement {
    props: IconElementProps
}

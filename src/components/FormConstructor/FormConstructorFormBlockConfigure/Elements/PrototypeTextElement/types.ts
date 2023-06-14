import { BaseProps, IFormElement } from '../../../store/formElements/types'

export type PrototypeTextProps = {
  top: number
  left: number
  width: number | string
  height: number | string
  className: string
  zIndex: number
  text?: string
} & BaseProps

export interface ICustomTextParams extends IFormElement {
  props: PrototypeTextProps
}

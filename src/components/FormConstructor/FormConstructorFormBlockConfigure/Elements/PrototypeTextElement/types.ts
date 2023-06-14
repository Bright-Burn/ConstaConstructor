import { BaseProps } from '../../../store/formElements/types'
import { BaseTypes } from '../../Panels/Settings/BaseSettings/types';

export type PrototypeTextPropsType = {
  top: number
  left: number
  width: number | string
  height: number | string
  className: string
  zIndex: number
  text?: string
} & BaseProps

export class PrototypeTextProps {
  public top: number
  public left: number
  public width: number | string
  public text: string | undefined
  public className: string
  public height: number | string
  public zIndex: number
  public baseProps: BaseTypes;
  
  constructor(options: PrototypeTextPropsType) {
    this.baseProps = options.baseProps
    this.top = options.top
    this.left = options.left
    this.width = options.width
    this.height = options.height
    this.className = options.className
    this.zIndex = options.zIndex
    this.text = options.text
  }
}

import type { BaseProps } from '../../../../coreTypes'
import type { BaseTypes } from '../BaseSettings/types'

export type PrototypePropsType = {
  top: number
  left: number
  width: number | string
  height: number | string
  className: string
  zIndex: number
  text?: string
} & BaseProps

export class PrototypeProps {
  public baseProps: BaseTypes
  public className: string
  public top: number
  public left: number
  public width: number | string
  public height: number | string
  public zIndex: number
  public text?: string | undefined

  constructor(options: PrototypePropsType) {
    this.baseProps = options.baseProps
    this.className = options.className
    this.top = options.top
    this.left = options.left
    this.width = options.width
    this.height = options.height
    this.zIndex = options.zIndex

    if ('text' in options) {
      this.text = options.text
    }
  }
}

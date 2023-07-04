import { FC } from 'react'
import { SelectableLayer } from './SelectableLayer'
import { ISelectableLayer } from './types'

export const SelectableLayerFullWidth: FC<ISelectableLayer> = props => {
  let className = 'container'
  if (props.className) {
    className += ` ${props.className}`
  }
  return <SelectableLayer {...props} className={className} />
}

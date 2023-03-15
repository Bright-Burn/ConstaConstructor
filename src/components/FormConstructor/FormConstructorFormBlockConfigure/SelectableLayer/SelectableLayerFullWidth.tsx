import { FC } from 'react'
import { SelectableLayer } from './SelectableLayer'
import { ISelectableLayer } from './types'

export const SelectableLayerFullWidth: FC<ISelectableLayer> = props => {
  return <SelectableLayer {...props} className='container' />
}

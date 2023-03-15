import { FC } from 'react'
import { SelectableLayer } from './SelectableLayer'
import { ISelectableLayer } from './types'

import styles from './styles.module.css'

export const SelectableLayerFitSpace: FC<ISelectableLayer> = ({ className, ...rest }) => {
  return <SelectableLayer {...rest} className={`container ${styles.fitSpace} ${className}`} />
}


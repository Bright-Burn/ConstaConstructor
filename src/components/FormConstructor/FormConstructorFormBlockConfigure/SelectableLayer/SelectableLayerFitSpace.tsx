import { FC } from 'react'
import { SelectableLayer } from './SelectableLayer'
import { ISelectableLayer } from './types'

import styles from './styles.module.css'

export const SelectableLayerFitSpace: FC<ISelectableLayer> = props => {
  return <SelectableLayer {...props} className={`container ${styles.fitSpace}`} />
}

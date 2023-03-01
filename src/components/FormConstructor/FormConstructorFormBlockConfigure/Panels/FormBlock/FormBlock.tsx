import React, { FC, useState } from 'react'
import { DroppableLayer } from '../../DroppableLayer'
import styles from './styles.module.css'

export const FormBlock: FC = () => {
  const [formBlockParentId] = useState<string>('root')
  return (
    <div className={`${styles.formBlock} borderCard`}>
      <div className={`${styles.formBlockContent}`}>
        <DroppableLayer parentElementId={formBlockParentId} />
      </div>
    </div>
  )
}

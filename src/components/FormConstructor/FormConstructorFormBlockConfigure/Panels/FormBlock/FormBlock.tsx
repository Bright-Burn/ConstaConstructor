import type { FC } from 'react'

import { useAppSelector } from '../../../store'
import { DroppableLayer } from '../../DroppableLayer'

import styles from './styles.module.css'

export const FormBlock: FC = () => {
  const { selectedPageId } = useAppSelector(state => state.formConstructor)

  return (
    <div className={styles.formBlockContainer}>
      <div className={styles.formBlock}>
        <div key={selectedPageId} className={styles.formBlockContent} id="formBlock">
          <DroppableLayer parentElementId={selectedPageId} />
        </div>
      </div>
    </div>
  )
}

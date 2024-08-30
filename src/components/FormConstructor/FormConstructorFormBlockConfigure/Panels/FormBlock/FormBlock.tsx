import type { FC } from 'react'

import { useAppSelector } from '../../../store'
import { DroppableLayer } from '../../DroppableLayer'

import { Pages } from './Pages'

import styles from './styles.module.css'

export const FormBlock: FC = () => {
  const pages = useAppSelector(state => state.formConstructor.pages)
  const { selectedPageId } = useAppSelector(state => state.formConstructor)

  return (
    <div className={styles.formBlock}>
      <Pages pages={pages} />
      <div className={styles.formBlock}>
        {pages.map(page =>
          page.id === selectedPageId ? (
            <div key={page.id} className={styles.formBlockContent} id="formBlock">
              <DroppableLayer parentElementId={page.id} />
            </div>
          ) : null,
        )}
      </div>
    </div>
  )
}

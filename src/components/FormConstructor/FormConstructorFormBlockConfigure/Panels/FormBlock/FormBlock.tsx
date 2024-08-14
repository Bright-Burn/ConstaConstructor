import type { FC } from 'react'
import { useEffect } from 'react'

import {
  pagesSelector,
  selectedElementSelector,
  selectedPageIdSelector,
  setSelectedElement,
  useAppDispatch,
  useAppSelector,
} from '../../../store'
import { DroppableLayer } from '../../DroppableLayer'

import { Pages } from './Pages'

import styles from './styles.module.css'

export const FormBlock: FC = () => {
  const pages = useAppSelector(pagesSelector)
  const selectedPageId = useAppSelector(selectedPageIdSelector)

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

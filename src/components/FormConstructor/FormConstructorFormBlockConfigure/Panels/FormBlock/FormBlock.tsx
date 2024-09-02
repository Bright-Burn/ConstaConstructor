import type { FC } from 'react'

import { getSelectedPageId, useAppSelector } from '../../../store'
import { getPages } from '../../../store/formElements/selectors/viewSelectors'
import { DroppableLayer } from '../../DroppableLayer'

import { Pages } from './Pages'

import styles from './styles.module.css'

export const FormBlock: FC = () => {
  const pages = useAppSelector(getPages)
  const selectedPageId = useAppSelector(getSelectedPageId)

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

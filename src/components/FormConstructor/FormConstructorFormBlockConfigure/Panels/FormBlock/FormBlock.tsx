import React, { FC } from 'react'
import { DroppableLayer } from '../../DroppableLayer'
import styles from './styles.module.css'
import { Pages } from './Pages/Pages'
import { usePagesSelector } from '../../../store/pagesOfLayout'

export const FormBlock: FC = () => {
  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

  return (
    <div className={`${styles.formBlock} borderCard`}>
      <Pages pages={pages} />
      <div className={`${styles.formBlock} borderCard`}>
        {pages.map(page =>
          page.isActive ? (
            <div className={`${styles.formBlockContent}`}>
              <DroppableLayer parentElementId={page.parentId} />
            </div>
          ) : (
            <></>
          ),
        )}
      </div>
    </div>
  )
}

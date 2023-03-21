import React, { FC } from 'react'
import { DroppableLayer } from '../../DroppableLayer'
import styles from './styles.module.css'
import { usePages } from './Pages/usePages'
import { Pages } from './Pages/Pages'

export const FormBlock: FC = () => {
  const [pages, addNewPage, changeActivePage, closePage] = usePages()

  return (
    <div className={`${styles.formBlock} borderCard`}>
      <Pages
        pages={pages}
        addNewPage={addNewPage}
        changeActivePage={changeActivePage}
        closePage={closePage}
      />
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

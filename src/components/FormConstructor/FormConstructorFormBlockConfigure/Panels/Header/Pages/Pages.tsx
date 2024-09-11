import { useState } from 'react'
import { Card } from '@consta/uikit/Card'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'

import {
  changeActivePage,
  changePageName,
  checkIsGridVisible,
  getPages,
  toggleGrid,
  useAppDispatch,
  useAppSelector,
} from '../../../../store'

import { PageButton } from './PageButton'
import { PagePopover } from './PagePopover'
import type { PagesProps } from './types'

import style from '../Header.module.css'
import styles from './styles.module.css'

export const Pages = () => {
  const pages = useAppSelector(getPages)
  const [isNameEdited, setIsNameEdited] = useState<boolean>(false)
  const { selectedPageId } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const changePage = (pageId: string) => {
    dispatch(changeActivePage(pageId))
  }

  const setNewPageName = (pageName: string | null) => {
    setIsNameEdited(!isNameEdited)
    pageName && dispatch(changePageName(pageName))
  }

  const changeIsNameEdited = () => {
    setIsNameEdited(!isNameEdited)
  }

  const visiblePages = pages.slice(0, 7)
  const pagesUnderPopover = pages.slice(7)

  return (
    <div className={`container-row space-center ${styles.pagesBlock}`}>
      <div className={styles.pages}>
        {visiblePages.map((page, index) => {
          return (
            <PageButton
              changePage={changePage}
              changeIsNameEdited={changeIsNameEdited}
              index={index}
              page={page}
              isSelectedPage={selectedPageId === page.id}
              pageId={page.id}
              pageName={page.name}
            />
          )
        })}
        <div className={styles.divider} />
        <PagePopover
          isNameEdited={isNameEdited}
          selectedPageId={selectedPageId}
          pages={pagesUnderPopover}
          setNewPageName={setNewPageName}
          changePage={changePage}
          changeIsNameEdited={changeIsNameEdited}
        />
      </div>
    </div>
  )
}

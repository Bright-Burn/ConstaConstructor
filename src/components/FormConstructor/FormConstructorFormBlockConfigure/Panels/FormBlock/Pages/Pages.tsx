import { useState } from 'react'
import { Card } from '@consta/uikit/Card'
import { Switch } from '@consta/uikit/Switch'

import {
  changeActivePage,
  changePageName,
  checkIsGridVisible,
  toggleGrid,
  useAppDispatch,
  useAppSelector,
} from '../../../../store'

import { PageButton } from './PageButton'
import { PageEdit } from './PageEdit'
import { PagePopover } from './PagePopover'
import type { PagesProps } from './types'

import styles from './styles.module.css'

export const Pages = ({ pages }: PagesProps) => {
  const [isNameEdited, setIsNameEdited] = useState<boolean>(false)
  const { selectedPageId } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()
  const isGridVisible = useAppSelector(checkIsGridVisible)

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

  const onClickShowGrid = () => {
    dispatch(toggleGrid())
  }
  const visiblePages = pages.slice(0, 7)
  const pagesUnderPopover = pages.slice(7)

  return (
    <div className={`container-row space-center ${styles.pagesBlock}`}>
      <div className={styles.pages}>
        {visiblePages.map((page, index) => {
          return (
            <Card key={page.id} shadow={false} className={styles.pageBlock} form="round">
              {selectedPageId === page.id && isNameEdited ? (
                <PageEdit
                  isSelectedPage={selectedPageId === page.id}
                  setNewPageName={setNewPageName}
                  defaultPageName={page.name}
                />
              ) : (
                <PageButton
                  changePage={changePage}
                  changeIsNameEdited={changeIsNameEdited}
                  index={index}
                  page={page}
                  isSelectedPage={selectedPageId === page.id}
                  pageId={page.id}
                  pageName={page.name}
                />
              )}
            </Card>
          )
        })}
        <PagePopover
          isNameEdited={isNameEdited}
          selectedPageId={selectedPageId}
          pages={pagesUnderPopover}
          setNewPageName={setNewPageName}
          changePage={changePage}
          changeIsNameEdited={changeIsNameEdited}
        />
      </div>
      <div className="container-row align-center ">
        <span className="m-r-s">Сетка</span>
        <Switch checked={isGridVisible} size="s" onChange={onClickShowGrid} />
      </div>
    </div>
  )
}

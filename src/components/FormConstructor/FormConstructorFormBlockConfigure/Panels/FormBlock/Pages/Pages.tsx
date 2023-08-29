import styles from './styles.module.css'
import { PagesProps } from './types'
import { Card } from '@consta/uikit/Card'
import {
  changeActivePage,
  useAppDispatch,
  useAppSelector,
  toggleGrid,
  changePageName,
} from '../../../../store'
import { useState } from 'react'
import { IconShape } from '@consta/icons/IconShape'
import { PageButton } from './PageButton'
import { PagePopover } from './PagePopover'
import { PageEdit } from './PageEdit'

export const Pages = ({ pages }: PagesProps) => {
  const [isNameEdited, setEditedName] = useState<boolean>(false)
  const { selectedPageId } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const changePage = (pageId: string) => {
    dispatch(changeActivePage(pageId))
  }

  const setNewPageName = (pageName: string | null) => {
    setEditedName(!isNameEdited)
    pageName && dispatch(changePageName(pageName))
  }

  const onClickShowGrid = () => {
    dispatch(toggleGrid())
  }

  return (
    <div className={`container-row space-center ${styles.pagesBlock}`}>
      <div className={styles.pages}>
        {pages.map((page, index) => {
          if (index > 7) return
          return (
            <Card shadow={false} className={`${styles.pageBlock}`} form='round'>
              {selectedPageId === page.id && isNameEdited ? (
                <PageEdit
                  isSelectedPage={selectedPageId === page.id}
                  setNewPageName={setNewPageName}
                  defaultPageName={page.name}
                />
              ) : (
                <PageButton
                  changePage={changePage}
                  setEditedName={setEditedName}
                  index={index}
                  page={page}
                  isNameEdited={isNameEdited}
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
          pages={pages}
          setNewPageName={setNewPageName}
          changePage={changePage}
          setEditedName={setEditedName}
        />
      </div>
      <IconShape className={styles.iconGrid} onClick={onClickShowGrid} />
    </div>
  )
}

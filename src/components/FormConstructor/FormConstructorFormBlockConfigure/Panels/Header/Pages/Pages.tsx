import { changeActivePage, getPages, useAppDispatch, useAppSelector } from '../../../../store'

import { PageButton } from './PageButton'
import { PagePopover } from './PagePopover'

import styles from './styles.module.css'

export const Pages = () => {
  const pages = useAppSelector(getPages)
  const { selectedPageId } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const changePage = (pageId: string) => {
    dispatch(changeActivePage(pageId))
  }

  const visiblePages = pages.slice(0, 7)
  const pagesUnderPopover = pages.slice(7)

  return (
    <div className={`container-row space-center ${styles.pagesBlock}`}>
      <div className={styles.pages}>
        {visiblePages.map((page, index) => {
          return (
            <PageButton
              key={page.id}
              changePage={changePage}
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
          selectedPageId={selectedPageId}
          pages={pagesUnderPopover}
          changePage={changePage}
        />
      </div>
    </div>
  )
}

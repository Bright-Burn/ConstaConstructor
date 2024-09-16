import {
  changeActivePage,
  getPages,
  getSelectedPageId,
  useAppDispatch,
  useAppSelector,
} from '../../../../store'

import { PageButton } from './PageButton'
import { PagePopover } from './PagePopover'

import styles from './styles.module.css'

export const Pages = () => {
  const pages = useAppSelector(getPages)
  const selectedPageId = useAppSelector(getSelectedPageId)
  const dispatch = useAppDispatch()

  const changePage = (pageId: string) => {
    dispatch(changeActivePage(pageId))
  }
  // 7 - количество видимых страниц по умолчанию. Мб стоит подумать как это сделать более изящно
  const visiblePages = pages.slice(0, 13)
  const pagesUnderPopover = pages.slice(13)

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

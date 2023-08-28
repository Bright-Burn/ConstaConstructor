import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { PagesProps } from './types'
import { Card } from '@consta/uikit/Card'
import {
  changeActivePage,
  useAppDispatch,
  useAppSelector,
  addNewPage,
  deletePage as deletePageAction,
  toggleGrid,
  changeNamePage,
} from '../../../../store'
import { useRef, useState } from 'react'
import { IconShape } from '@consta/icons/IconShape'
import { IconCheck } from '@consta/icons/IconCheck'
import { TextField } from '@consta/uikit/TextField'
import { PageButton } from './PageButton'
import { PagePopover } from './PagePopover'

export const Pages = ({ pages }: PagesProps) => {
  const [isPopoverOpened, setPopoverOpened] = useState<boolean>(false)
  const [pageName, setPageName] = useState<string | null>(null)
  const [isNameEdited, setNameEdited] = useState<boolean>(false)
  const { selectedPageId } = useAppSelector(state => state.formConstructor)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const dispatch = useAppDispatch()

  const changePage = (pageId: string) => {
    dispatch(changeActivePage(pageId))
  }

  const deletePage = (pageId: string) => {
    dispatch(deletePageAction(pageId))
  }

  const addPage = () => {
    dispatch(addNewPage())
  }

  const handleChangePageName = ({ value }: { value: string | null }) => setPageName(value)

  const newNamePage = (pageName: string | null) => {
    setNameEdited(!isNameEdited)
    pageName && dispatch(changeNamePage(pageName, selectedPageId))
  }

  const onClickShowGrid = () => {
    dispatch(toggleGrid())
  }

  const changeValueName = (id: number) => {
    setNameEdited(!isNameEdited)
    setPageName(pages[id].name)
  }

  return (
    <div className={`container-row space-center ${styles.pagesBlock}`}>
      <div className={styles.pages}>
        {pages.map((page, index) => {
          if (index > 7) return
          return (
            <Card shadow={false} className={`${styles.pageBlock}`} form='round'>
              {selectedPageId === page.id && isNameEdited ? (
                <>
                  <TextField
                    size='xs'
                    type='text'
                    value={pageName}
                    onChange={handleChangePageName}></TextField>
                  <Button
                    iconLeft={IconCheck}
                    view={selectedPageId === page.id ? 'ghost' : 'clear'}
                    size='xs'
                    form='brick'
                    onlyIcon
                    onClick={() => newNamePage(pageName)}
                  />
                </>
              ) : (
                <PageButton
                  changePage={changePage}
                  changeValueName={changeValueName}
                  deletePage={deletePage}
                  index={index}
                  isSelectedPage={selectedPageId === page.id}
                  pageId={page.id}
                  pageName={page.name}
                />
              )}
            </Card>
          )
        })}
        <PagePopover
          anchorRef={anchorRef}
          isNameEdited={isNameEdited}
          isPopoverOpened={isPopoverOpened}
          selectedPageId={selectedPageId}
          pageName={pageName}
          pages={pages}
          addPage={addPage}
          newNamePage={newNamePage}
          changePage={changePage}
          changeValueName={changeValueName}
          handleChangePageName={handleChangePageName}
          setPopoverOpened={setPopoverOpened}
        />
      </div>
      <IconShape className={styles.iconGrid} onClick={onClickShowGrid} />
    </div>
  )
}

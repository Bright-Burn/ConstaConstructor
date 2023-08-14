import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { IconClose } from '@consta/uikit/IconClose'
import { PagesProps } from './types'
import { Card } from '@consta/uikit/Card'
import {
  changeActivePage,
  useAppDispatch,
  useAppSelector,
  addNewPage,
  deletePage as deletePageAction,
  toggleGrid,
} from '../../../../store'
import { useRef, useState } from 'react'
import { Popover } from '@consta/uikit/Popover'
import { IconArrowDown } from '@consta/icons/IconArrowDown'
import { IconArrowUp } from '@consta/icons/IconArrowUp'
import { IconShape } from '@consta/icons/IconShape'
import { IconCheck } from '@consta/icons/IconCheck'
import { changeNamePage } from '../../../../store/formElements'
import { TextField } from '@consta/uikit/TextField'

export const Pages = ({ pages }: PagesProps) => {
  const [openPopover, setOpenPopover] = useState<boolean>(false)
  const [namePage, setNamePage] = useState<string | null>(null)
  const [isChangeName, setChangeName] = useState<boolean>(false)
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

  const handleChangeNamePage = ({ value }: { value: string | null }) => setNamePage(value)

  const newNamePage = (pageName: string | null) => {
    setChangeName(!isChangeName)
    pageName && dispatch(changeNamePage(pageName, selectedPageId))
  }

  const onClickShowGrid = () => {
    dispatch(toggleGrid())
  }

  const changeValueName = (id: number) => {
    setChangeName(!isChangeName)
    setNamePage(pages[id].name)
  }

  return (
    <div className={`container-row space-center ${styles.pagesBlock}`}>
      <div className={styles.pages}>
        {pages.map((page, index) => {
          if (index > 7) return
          return (
            <Card shadow={false} className={`${styles.pageBlock}`} form='round'>
              {selectedPageId === page.id && isChangeName ? (
                <>
                  <TextField
                    size='xs'
                    type='text'
                    value={namePage}
                    onChange={handleChangeNamePage}></TextField>
                  <Button
                    iconLeft={IconCheck}
                    view={selectedPageId === page.id ? 'ghost' : 'clear'}
                    size='xs'
                    form='brick'
                    onlyIcon
                    onClick={() => newNamePage(namePage)}
                  />
                </>
              ) : (
                <>
                  <Button
                    view={selectedPageId === page.id ? 'ghost' : 'clear'}
                    label={`${page.name}`}
                    size='xs'
                    onDoubleClick={() => changeValueName(index)}
                    form='brick'
                    onClick={() => changePage(page.id)}
                  />
                  {selectedPageId === page.id && (
                    <Button
                      iconLeft={IconClose}
                      view={selectedPageId === page.id ? 'ghost' : 'clear'}
                      size='xs'
                      form='brick'
                      onlyIcon
                      onClick={() => deletePage(page.id)}
                    />
                  )}
                </>
              )}
            </Card>
          )
        })}

        {pages.length >= 9 && openPopover ? (
          <Button
            size='xs'
            view='clear'
            onlyIcon
            iconLeft={IconArrowUp}
            ref={anchorRef}
            onClick={() => setOpenPopover(!openPopover)}
          />
        ) : (
          pages.length >= 9 && (
            <Button
              size='xs'
              view='clear'
              onlyIcon
              iconLeft={IconArrowDown}
              onClick={() => setOpenPopover(!openPopover)}
            />
          )
        )}
        {pages.length < 9 ? (
          <Button label='+' view='clear' size='xs' onClick={addPage} />
        ) : (
          openPopover && (
            <>
              <Popover
                direction='downRight'
                spareDirection='downStartLeft'
                offset='2xs'
                arrowOffset={0}
                isInteractive={true}
                anchorRef={anchorRef}
                equalAnchorWidth={false}>
                {pages.map((page, index) => {
                  if (index < 8) return
                  return (
                    <Card shadow={false} className={`${styles.popoverPageBlock}`} form='round'>
                      {selectedPageId === page.id && isChangeName ? (
                        <>
                          <TextField
                            size='xs'
                            type='text'
                            value={namePage}
                            onChange={handleChangeNamePage}></TextField>
                          <Button
                            iconLeft={IconCheck}
                            view={selectedPageId === page.id ? 'ghost' : 'clear'}
                            size='xs'
                            form='brick'
                            onlyIcon
                            onClick={() => newNamePage(namePage)}
                          />
                        </>
                      ) : (
                        <>
                          <Button
                            label={`${page.name}`}
                            view={selectedPageId === page.id ? 'ghost' : 'clear'}
                            size='xs'
                            form='brick'
                            onDoubleClick={() => changeValueName(index)}
                            onClick={() => changePage(page.id)}
                          />
                          {selectedPageId === page.id && (
                            <Button
                              iconLeft={IconClose}
                              view={selectedPageId === page.id ? 'ghost' : 'clear'}
                              size='xs'
                              form='brick'
                              onlyIcon
                              onClick={() => deletePage(page.id)}
                            />
                          )}
                        </>
                      )}
                    </Card>
                  )
                })}
                <Button label='+' view='clear' size='xs' onClick={addPage} />
              </Popover>
            </>
          )
        )}
      </div>
      <IconShape className={styles.iconGrid} onClick={onClickShowGrid} />
    </div>
  )
}

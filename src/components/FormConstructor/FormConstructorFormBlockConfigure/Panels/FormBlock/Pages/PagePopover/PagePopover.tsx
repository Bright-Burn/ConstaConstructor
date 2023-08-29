import { IconArrowDown } from '@consta/icons/IconArrowDown'
import { IconArrowUp } from '@consta/icons/IconArrowUp'
import { Button } from '@consta/uikit/Button'
import { Card } from '@consta/uikit/Card'
import { Popover } from '@consta/uikit/Popover'
import styles from '../styles.module.css'
import { FC, useRef, useState } from 'react'
import { IPagePopover } from './types'
import { useAppDispatch, addNewPage } from '../../../../../store'
import { PageEdit } from '../PageEdit'
import { PageButton } from '../PageButton'

export const PagePopover: FC<IPagePopover> = ({
  selectedPageId,
  isNameEdited,
  pages,
  setNewPageName,
  changePage,
  setEditedName,
}) => {
  const [isPopoverOpened, setPopoverOpened] = useState<boolean>(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const dispatch = useAppDispatch()

  const addPage = () => {
    dispatch(addNewPage())
  }

  return (
    <>
      {pages.length >= 9 && (
        <Button
          size='xs'
          view='clear'
          onlyIcon
          iconLeft={isPopoverOpened ? IconArrowUp : IconArrowDown}
          ref={anchorRef}
          onClick={() => setPopoverOpened(!isPopoverOpened)}
        />
      )}

      {pages.length < 9 ? (
        <Button label='+' view='clear' size='xs' onClick={addPage} />
      ) : (
        isPopoverOpened && (
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
                    {selectedPageId === page.id && isNameEdited ? (
                      <PageEdit
                        defaultPageName={page.name}
                        isSelectedPage={selectedPageId === page.id}
                        setNewPageName={setNewPageName}
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
              <Button label='+' view='clear' size='xs' onClick={addPage} />
            </Popover>
          </>
        )
      )}
    </>
  )
}

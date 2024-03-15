import type { FC } from 'react'
import { useRef, useState } from 'react'
import { IconArrowDown } from '@consta/icons/IconArrowDown'
import { IconArrowUp } from '@consta/icons/IconArrowUp'
import { Button } from '@consta/uikit/Button'
import { Card } from '@consta/uikit/Card'
import { Popover } from '@consta/uikit/Popover'

import { addNewPage, useAppDispatch } from '../../../../../store'
import { PageButton } from '../PageButton'
import { PageEdit } from '../PageEdit'

import type { IPagePopover } from './types'

import styles from '../styles.module.css'

export const PagePopover: FC<IPagePopover> = ({
  selectedPageId,
  isNameEdited,
  pages,
  setNewPageName,
  changePage,
  changeIsNameEdited,
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
          ref={anchorRef}
          size="xs"
          view="clear"
          onlyIcon={true}
          iconLeft={isPopoverOpened ? IconArrowUp : IconArrowDown}
          onClick={() => {
            setPopoverOpened(!isPopoverOpened)
          }}
        />
      )}

      {pages.length < 9 ? (
        <Button label="+" view="clear" size="xs" onClick={addPage} />
      ) : (
        isPopoverOpened && (
          <Popover
            direction="downRight"
            spareDirection="downStartLeft"
            offset="2xs"
            arrowOffset={0}
            isInteractive={true}
            anchorRef={anchorRef}
            equalAnchorWidth={false}>
            {pages.map((page, index) => {
              if (index < 8) return
              return (
                <Card shadow={false} className={`${styles.popoverPageBlock}`} form="round">
                  {selectedPageId === page.id && isNameEdited ? (
                    <PageEdit
                      defaultPageName={page.name}
                      isSelectedPage={selectedPageId === page.id}
                      setNewPageName={setNewPageName}
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
            <Button label="+" view="clear" size="xs" onClick={addPage} />
          </Popover>
        )
      )}
    </>
  )
}

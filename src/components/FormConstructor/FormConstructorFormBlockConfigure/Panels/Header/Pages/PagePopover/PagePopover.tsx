import type { FC } from 'react'
import { useRef, useState } from 'react'
import { IconArrowDown } from '@consta/icons/IconArrowDown'
import { IconArrowUp } from '@consta/icons/IconArrowUp'
import { Button } from '@consta/uikit/Button'
import { Card } from '@consta/uikit/Card'
import { Popover } from '@consta/uikit/Popover'

import { addNewPage, useAppDispatch } from '../../../../../store'
import { PageButton } from '../PageButton'

import type { IPagePopover } from './types'

import styles from '../styles.module.css'

export const PagePopover: FC<IPagePopover> = ({ selectedPageId, pages, changePage }) => {
  const [isPopoverOpened, setPopoverOpened] = useState<boolean>(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const dispatch = useAppDispatch()

  const addPage = () => {
    dispatch(addNewPage())
  }

  return (
    <>
      {pages.length >= 1 && (
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

      {pages.length < 1 ? (
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
              return (
                <Card key={page.id} shadow={false} className={styles.popoverPageBlock} form="round">
                  <PageButton
                    changePage={changePage}
                    index={index}
                    page={page}
                    isSelectedPage={selectedPageId === page.id}
                    pageId={page.id}
                    pageName={page.name}
                  />
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

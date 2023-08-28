import { IconArrowDown } from '@consta/icons/IconArrowDown'
import { IconArrowUp } from '@consta/icons/IconArrowUp'
import { IconCheck } from '@consta/icons/IconCheck'
import { IconClose } from '@consta/icons/IconClose'
import { IconEdit } from '@consta/icons/IconEdit'
import { Button } from '@consta/uikit/Button'
import { Card } from '@consta/uikit/Card'
import { Popover } from '@consta/uikit/Popover'
import { TextField } from '@consta/uikit/TextField'
import { deletePage } from '../../../../../store'
import styles from '../styles.module.css'
import { FC } from 'react'
import { IPagePopover } from './types'

export const PagePopover: FC<IPagePopover> = ({
  isPopoverOpened,
  anchorRef,
  selectedPageId,
  isNameEdited,
  pageName,
  pages,
  setPopoverOpened,
  addPage,
  handleChangePageName,
  newNamePage,
  changePage,
  changeValueName,
}) => {
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
                      <>
                        <Button
                          label={page.name}
                          view={selectedPageId === page.id ? 'ghost' : 'clear'}
                          size='xs'
                          form='brick'
                          onClick={() => changePage(page.id)}
                        />
                        {selectedPageId === page.id && (
                          <>
                            <Button
                              iconLeft={IconEdit}
                              view={selectedPageId === page.id ? 'ghost' : 'clear'}
                              size='xs'
                              form='brick'
                              onlyIcon
                              onClick={() => changeValueName(index)}
                            />
                            <Button
                              iconLeft={IconClose}
                              view={selectedPageId === page.id ? 'ghost' : 'clear'}
                              size='xs'
                              form='brick'
                              onlyIcon
                              onClick={() => deletePage(page.id)}
                            />
                          </>
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
    </>
  )
}

import React from 'react'
import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { IconClose } from '@consta/uikit/IconClose'
import { PagesProps } from './types'
import { Card } from '@consta/uikit/Card'

export const Pages = ({ pages, addNewPage, changeActivePage, closePage }: PagesProps) => {
  return (
    <div className={`container-row space-center borderCard ${styles.pagesBlock}`}>
      <>
        {pages.map((page, index) => (
          <Card className={`${styles.pageBlock}`} form='round'>
            <Button
              label={`${page.name}`}
              view='ghost'
              size='xs'
              form='brick'
              onClick={() => changeActivePage(index)}
            />
            <Button
              iconLeft={IconClose}
              view='ghost'
              size='xs'
              form='brick'
              onlyIcon
              onClick={() => closePage(index)}
            />
          </Card>
        ))}
      </>
      <Button label='+' view='ghost' size='xs' onClick={addNewPage} />
    </div>
  )
}

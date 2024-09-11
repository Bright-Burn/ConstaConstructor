import type { FC } from 'react'
import { IconClose } from '@consta/icons/IconClose'
import { Button } from '@consta/uikit/Button'

import { deletePage as deletePageAction, useAppDispatch } from '../../../../../store'

import type { IPageButton } from './types'

import styles from '../styles.module.css'

export const PageButton: FC<IPageButton> = ({ isSelectedPage, pageId, page, changePage }) => {
  const dispatch = useAppDispatch()

  const deletePage = (pageId: string) => {
    dispatch(deletePageAction(pageId))
  }

  return (
    <div className={styles.pageContainer}>
      <Button
        view={isSelectedPage ? 'ghost' : 'clear'}
        label={page.name}
        size="xs"
        form="brick"
        onClick={() => {
          changePage(pageId)
        }}
      />
      <Button
        iconLeft={IconClose}
        view={isSelectedPage ? 'ghost' : 'clear'}
        size="xs"
        form="brick"
        onlyIcon={true}
        onClick={() => {
          deletePage(pageId)
        }}
      />
    </div>
  )
}

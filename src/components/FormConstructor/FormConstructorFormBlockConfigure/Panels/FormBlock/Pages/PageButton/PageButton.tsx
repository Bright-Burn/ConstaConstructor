import type { FC } from 'react'
import { IconClose } from '@consta/icons/IconClose'
import { IconEdit } from '@consta/icons/IconEdit'
import { Button } from '@consta/uikit/Button'

import { deletePage as deletePageAction, useAppDispatch } from '../../../../../store'

import type { IPageButton } from './types'

export const PageButton: FC<IPageButton> = ({
  isSelectedPage,
  pageId,
  page,
  changePage,
  changeIsNameEdited,
}) => {
  const dispatch = useAppDispatch()

  const changeValueName = () => {
    changeIsNameEdited()
  }

  const deletePage = (pageId: string) => {
    dispatch(deletePageAction(pageId))
  }

  return (
    <>
      <Button
        view={isSelectedPage ? 'ghost' : 'clear'}
        label={page.name}
        size="xs"
        form="brick"
        onClick={() => {
          changePage(pageId)
        }}
      />
      {!!isSelectedPage && (
        <>
          <Button
            iconLeft={IconEdit}
            view="ghost"
            size="xs"
            form="brick"
            onlyIcon={true}
            onClick={() => {
              changeValueName()
            }}
          />
          <Button
            iconLeft={IconClose}
            view="ghost"
            size="xs"
            form="brick"
            onlyIcon={true}
            onClick={() => {
              deletePage(pageId)
            }}
          />
        </>
      )}
    </>
  )
}

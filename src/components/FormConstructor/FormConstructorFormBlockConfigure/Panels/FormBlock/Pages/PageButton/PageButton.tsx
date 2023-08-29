import { IconClose } from '@consta/icons/IconClose'
import { IconEdit } from '@consta/icons/IconEdit'
import { Button } from '@consta/uikit/Button'
import { FC } from 'react'
import { IPageButton } from './types'
import { useAppDispatch, deletePage as deletePageAction } from '../../../../../store'

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
        size='xs'
        form='brick'
        onClick={() => changePage(pageId)}
      />
      {isSelectedPage && (
        <>
          <Button
            iconLeft={IconEdit}
            view={isSelectedPage ? 'ghost' : 'clear'}
            size='xs'
            form='brick'
            onlyIcon
            onClick={() => changeValueName()}
          />
          <Button
            iconLeft={IconClose}
            view={isSelectedPage ? 'ghost' : 'clear'}
            size='xs'
            form='brick'
            onlyIcon
            onClick={() => deletePage(pageId)}
          />
        </>
      )}
    </>
  )
}

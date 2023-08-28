import { IconClose } from '@consta/icons/IconClose'
import { IconEdit } from '@consta/icons/IconEdit'
import { Button } from '@consta/uikit/Button'
import { FC } from 'react'
import { IPageButton } from './types'

export const PageButton: FC<IPageButton> = ({
  isSelectedPage,
  pageName,
  pageId,
  index,
  deletePage,
  changePage,
  changeValueName,
}) => {
  return (
    <>
      <Button
        view={isSelectedPage ? 'ghost' : 'clear'}
        label={pageName}
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
            onClick={() => changeValueName(index)}
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

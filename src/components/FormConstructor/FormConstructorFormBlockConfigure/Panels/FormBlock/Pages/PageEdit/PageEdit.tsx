import { Button } from '@consta/uikit/Button'
import { FC, useState } from 'react'
import { IPageEdit } from './types'
import { TextField } from '@consta/uikit/TextField'
import { IconCheck } from '@consta/icons/IconCheck'

export const PageEdit: FC<IPageEdit> = ({ setNewPageName, isSelectedPage, defaultPageName }) => {
  const [pageName, setPageName] = useState<string | null>(defaultPageName)

  const changePageName = ({ value }: { value: string | null }) => setPageName(value)

  return (
    <>
      <TextField size='xs' type='text' value={pageName} onChange={changePageName}></TextField>
      <Button
        iconLeft={IconCheck}
        view={isSelectedPage ? 'ghost' : 'clear'}
        size='xs'
        form='brick'
        onlyIcon
        onClick={() => setNewPageName(pageName)}
      />
    </>
  )
}

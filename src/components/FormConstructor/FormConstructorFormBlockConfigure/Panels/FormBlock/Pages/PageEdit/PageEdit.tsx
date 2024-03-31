import type { FC } from 'react'
import { useState } from 'react'
import { IconCheck } from '@consta/icons/IconCheck'
import { Button } from '@consta/uikit/Button'
import { TextField } from '@consta/uikit/TextField'

import type { IPageEdit } from './types'

export const PageEdit: FC<IPageEdit> = ({ setNewPageName, isSelectedPage, defaultPageName }) => {
  const [pageName, setPageName] = useState<string | null>(defaultPageName)

  const changePageName = (value: string | null) => {
    setPageName(value)
  }

  return (
    <>
      <TextField size="xs" type="text" value={pageName} onChange={changePageName} />
      <Button
        iconLeft={IconCheck}
        view={isSelectedPage ? 'ghost' : 'clear'}
        size="xs"
        form="brick"
        onlyIcon={true}
        onClick={() => {
          setNewPageName(pageName)
        }}
      />
    </>
  )
}

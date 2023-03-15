import { FC } from 'react'
import { Button } from '@consta/uikit/Button'
import { IconInfo } from '@consta/uikit/IconInfo'
import { IconKebab } from '@consta/uikit/IconKebab'

export const IconsCell: FC<{}> = () => {
  const buttonSettings = {
    size: 's',
    view: 'clear',
    onlyIcon: true,
  } as const
  return (
    <div>
      <Button iconRight={IconInfo} {...buttonSettings} />
      <Button iconRight={IconKebab} {...buttonSettings} />
    </div>
  )
}

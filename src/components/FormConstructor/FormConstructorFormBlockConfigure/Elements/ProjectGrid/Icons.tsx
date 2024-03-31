import type { FC } from 'react'
import { IconInfo } from '@consta/icons/IconInfo'
import { IconKebab } from '@consta/icons/IconKebab'
import { Button } from '@consta/uikit/Button'

export const IconsCell: FC = () => {
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

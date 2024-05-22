import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Avatar } from '@consta/uikit/Avatar'

import type { AvatarProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IAvatarElement } from './types'

export const AvatarFormElement: FC<IAvatarElement> = ({ element }) => {
  const [avatarProps, setAvatarProps] = useState<AvatarProps>()

  useLayoutEffect(() => {
    setAvatarProps(element.props.props)
  }, [element])
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Avatar}>
      <Avatar {...avatarProps} />
    </SelectableLayer>
  )
}

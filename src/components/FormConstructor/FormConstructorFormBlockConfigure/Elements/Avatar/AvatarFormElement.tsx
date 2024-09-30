import type { FC } from 'react'
import { Avatar } from '@consta/uikit/Avatar'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IAvatarElement } from './types'

export const AvatarFormElement: FC<IAvatarElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props
  const avatarProps = props?.uiLibProps
  const className = props?.className

  if (!avatarProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Avatar}>
      <Avatar className={className} {...avatarProps} />
    </SelectableLayer>
  )
}

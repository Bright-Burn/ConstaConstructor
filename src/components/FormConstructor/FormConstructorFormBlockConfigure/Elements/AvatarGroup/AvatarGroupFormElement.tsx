import type { FC } from 'react'
import { AvatarGroup } from '@consta/uikit/AvatarGroup'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IAvatarGroupElement } from './types'

export const AvatarGroupFormElement: FC<IAvatarGroupElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const avatarGroupProps = props?.uiLibProps
  const className = props?.className

  if (!avatarGroupProps) {
    return null
  }

  // Необходимо что бы у AvatarGroup className всегда включал в себя AvatarGroup для правильного отображения
  const avatarGroupClassName = `AvatarGroup ${className}`

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.AvatarGroup}>
      <AvatarGroup
        className={avatarGroupClassName}
        items={avatarGroupProps.items}
        size={avatarGroupProps.size}
        form={avatarGroupProps.form}
        monochrome={avatarGroupProps.monochrome}
        visibleCount={avatarGroupProps.visibleCount}
      />
    </SelectableLayer>
  )
}

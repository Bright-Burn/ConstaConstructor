import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { AvatarGroup } from '@consta/uikit/AvatarGroup'

import type { AvatarGroupProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IAvatarGroupElement } from './types'

export const AvatarGroupFormElement: FC<IAvatarGroupElement> = ({ element }) => {
  const [avatarGroupProps, setAvatarGroupProps] = useState<AvatarGroupProps>()

  useLayoutEffect(() => {
    setAvatarGroupProps(element.props.props)
  }, [element])
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.AvatarGroup}>
      <AvatarGroup
        items={avatarGroupProps?.items}
        size={avatarGroupProps?.size}
        form={avatarGroupProps?.form}
        monochrome={avatarGroupProps?.monochrome}
        visibleCount={avatarGroupProps?.visibleCount}
      />
    </SelectableLayer>
  )
}

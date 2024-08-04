import type { FC } from 'react'
import { AvatarGroup } from '@consta/uikit/AvatarGroup'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IAvatarGroupElement } from './types'

export const AvatarGroupFormElement: FC<IAvatarGroupElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.AvatarGroup}>
      <AvatarGroup
        items={props?.items}
        size={props?.size}
        form={props?.form}
        monochrome={props?.monochrome}
        visibleCount={props?.visibleCount}
      />
    </SelectableLayer>
  )
}

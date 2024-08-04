import type { FC } from 'react'
import { Badge } from '@consta/uikit/Badge'

import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IBadgeFormElement } from './types'

export const BadgeFormElement: FC<IBadgeFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Badge}>
      <Badge
        {...props}
        iconLeft={props?.iconLeft ? Icons[props.iconLeft] : undefined}
        iconRight={props?.iconRight ? Icons[props.iconRight] : undefined}
      />
    </SelectableLayer>
  )
}

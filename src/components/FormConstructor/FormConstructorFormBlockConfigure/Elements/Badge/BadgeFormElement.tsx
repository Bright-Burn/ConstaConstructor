import type { FC } from 'react'
import { Badge } from '@consta/uikit/Badge'

import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IBadgeFormElement } from './types'

export const BadgeFormElement: FC<IBadgeFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const className = props?.className
  const uiLibProps = props?.uiLibProps

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Badge}>
      <Badge
        className={className}
        {...uiLibProps}
        iconLeft={uiLibProps.iconLeft ? Icons[uiLibProps.iconLeft] : undefined}
        iconRight={uiLibProps.iconRight ? Icons[uiLibProps.iconRight] : undefined}
      />
    </SelectableLayer>
  )
}

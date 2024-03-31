import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Badge } from '@consta/uikit/Badge'

import type { BadgeProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IBadgeFormElement } from './types'

export const BadgeFormElement: FC<IBadgeFormElement> = ({ element }) => {
  const [badgeProps, setbadgeProps] = useState<BadgeProps>()

  useLayoutEffect(() => {
    setbadgeProps(element.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Badge}>
      <Badge
        {...badgeProps}
        iconLeft={badgeProps?.iconLeft ? Icons[badgeProps.iconLeft] : undefined}
      />
    </SelectableLayer>
  )
}

import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Badge } from '@consta/uikit/Badge'

import type { BadgeProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { Icons } from '../IconFormElement/mocks'

import type { IBadgeFormElement } from './types'

export const BadgeFormElement: FC<IBadgeFormElement> = ({ element }) => {
  const [badgeProps, setbadgeProps] = useState<BadgeProps>()

  useLayoutEffect(() => {
    const badgeFormElement = element
    setbadgeProps(badgeFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Badge}>
      <Badge {...badgeProps} icon={!!badgeProps?.iconLeft && Icons[badgeProps.iconLeft]} />
    </SelectableLayer>
  )
}

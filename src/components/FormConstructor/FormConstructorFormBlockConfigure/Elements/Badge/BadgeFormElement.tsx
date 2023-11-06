import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IBadgeFormElement } from './types'
import { Badge } from '@consta/uikit/Badge'
import { BadgeProps } from '../../../coreTypes/badgeTypes'
import { Icons } from '../IconFormElement/mocks'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'
import { rootId } from '../../../store/formElements/initialState'

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
      <DroppableLocalLayer isLayout={false} parentElementId={element.parentId || rootId}>
        <Badge {...badgeProps} icon={badgeProps?.iconLeft && Icons[badgeProps.iconLeft]} />
      </DroppableLocalLayer>
    </SelectableLayer>
  )
}

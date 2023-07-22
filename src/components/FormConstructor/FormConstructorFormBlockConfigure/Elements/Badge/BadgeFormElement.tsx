import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IBadgeFormElement } from './types'
import { Badge } from '@consta/uikit/Badge'
import { BadgeProps } from '../../../store/formElements/badgeTypes'

export const BadgeFormElement: FC<IBadgeFormElement> = ({ element }) => {
  const [badgeProps, setbadgeProps] = useState<BadgeProps>()

  useLayoutEffect(() => {
    const badgeFormElement = element
    setbadgeProps(badgeFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Badge}
    >
      <Badge {...badgeProps} />
    </SelectableLayer>
  )
}

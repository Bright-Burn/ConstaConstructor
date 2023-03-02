import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IBadgeFormElement } from './types'
import { Badge } from '@consta/uikit/Badge'
import { BadgeProps, IFormElementBadge } from '../../../store/formElements/badgeTypes'

export const BadgeFormElement: FC<IBadgeFormElement> = ({ formElement }) => {
  const [badgeProps, setbadgeProps] = useState<BadgeProps | undefined>()

  useLayoutEffect(() => {
    const badgeFormElement = formElement as IFormElementBadge
    setbadgeProps(badgeFormElement.props)
  }, [formElement])

  return (
    <SelectableLayer
      parentElementId={formElement.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Badge}
    >
      <Badge {...badgeProps} />
    </SelectableLayer>
  )
}

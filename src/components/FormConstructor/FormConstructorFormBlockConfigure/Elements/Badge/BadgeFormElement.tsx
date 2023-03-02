import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IBadgeFormElement } from './types'
import { Badge } from '@consta/uikit/Badge'
import { BadgeProps, IFormElementBadge } from '../../../store/formElements/badge'

export const BadgeFormElement: FC<IBadgeFormElement> = ({ formElement }) => {
  const [badgeProps, setbadgeProps] = useState<BadgeProps | undefined>()

  useLayoutEffect(() => {
    const btnFormElement = formElement as IFormElementBadge
    setbadgeProps(btnFormElement.props)
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

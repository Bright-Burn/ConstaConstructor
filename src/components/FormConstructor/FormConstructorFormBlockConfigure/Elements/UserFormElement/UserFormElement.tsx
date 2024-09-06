import type { FC } from 'react'
import { User } from '@consta/uikit/User'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IUserFormElement } from './types'
import { getIsFilledClassName } from '../../../utils'

export const UserFormElement: FC<IUserFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const isFilled = props?.filled || false

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.User}
      className={getIsFilledClassName(isFilled)}>
      <User {...props} />
    </SelectableLayer>
  )
}

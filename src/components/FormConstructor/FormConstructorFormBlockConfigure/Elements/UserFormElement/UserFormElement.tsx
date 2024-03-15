import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { User } from '@consta/uikit/User'

import type { IFormElementUser, UserProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IUserFormElement } from './types'

export const UserFormElement: FC<IUserFormElement> = ({ element }) => {
  const [userProps, setUserProps] = useState<UserProps>()

  useLayoutEffect(() => {
    const userFormElement = element as IFormElementUser
    setUserProps(userFormElement.props.props)
  }, [element])

  const isFilled = element.props.props.filled

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.User}
      className={isFilled ? 'container-row flex-grow-1' : ''}>
      <User {...userProps} />
    </SelectableLayer>
  )
}

import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IUserFormElement } from './types'
import { IFormElementUser, UserProps } from '../../../coreTypes'
import { User } from '@consta/uikit/User'

export const UserFormElement: FC<IUserFormElement> = ({ element }) => {
  const [userProps, setUserProps] = useState<UserProps>()

  useLayoutEffect(() => {
    const userFormElement = element as IFormElementUser
    setUserProps(userFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.User}
    >
      <User {...userProps} />
    </SelectableLayer>
  )
}

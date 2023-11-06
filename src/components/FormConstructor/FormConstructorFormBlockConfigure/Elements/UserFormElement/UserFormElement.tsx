import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IUserFormElement } from './types'
import { IFormElementUser, UserProps } from '../../../coreTypes'
import { User } from '@consta/uikit/User'
import { rootId } from '../../../store/formElements/initialState'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'

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
      <DroppableLocalLayer
        isLayout={false}
        parentElementId={element.parentId || rootId}
        elemId={element.id}>
        <User {...userProps} />
      </DroppableLocalLayer>
    </SelectableLayer>
  )
}

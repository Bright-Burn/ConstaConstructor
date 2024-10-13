import type { FC } from 'react'
import { User } from '@consta/uikit/User'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { getIsFilledClassName } from '../../../utils'
import { SelectableLayer } from '../../SelectableLayer'

import type { IUserFormElement } from './types'

export const UserFormElement: FC<IUserFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  //логика для заполнения элемента
  const isFilled = props?.styles.filled || false

  const uiLibProps = props?.uiLibProps
  const className = props?.className

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.User}
      className={getIsFilledClassName(isFilled)}>
      <User className={className} {...uiLibProps} style={{ flexGrow: isFilled ? 1 : 0 }} />
    </SelectableLayer>
  )
}

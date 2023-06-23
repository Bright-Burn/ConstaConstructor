import { FC } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import {
  ButtonElementProps,
  ElementTypes,
  FormElementTypes,
} from '../../../store/formElements/types'
import { IconUser } from '@consta/uikit/IconUser'
import { IconSelect } from '@consta/uikit/IconSelect'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const props = element.props as ButtonElementProps

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Button}>
      <Button
        {...props}
        iconLeft={props.iconLeft && IconUser}
        iconRight={props.iconRight && IconSelect}
      />
    </SelectableLayer>
  )
}

import { FC } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import {
  ButtonElementProps,
  ElementTypes,
  FormElementTypes,
} from '../../../store/formElements/types'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const props = element.props as ButtonElementProps

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Button}>
      <Button {...props} />
    </SelectableLayer>
  )
}

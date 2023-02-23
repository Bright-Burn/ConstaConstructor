import React, { FC } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'

export const ButtonFormElement: FC<IButtonFormElement> = ({ formElement }) => {
  return (
    <SelectableLayer
      parentElementId={formElement.id}
      elementType={ElementTypes.FormElement}
      formElementType={FormElementTypes.Button}
    >
      <Button label='Продолжить' view='secondary' />
    </SelectableLayer>
  )
}

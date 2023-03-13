import React, { FC, useLayoutEffect, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { SelectableLayer } from '../../SelectableLayer'
import { IButtonFormElement } from './types'
import {
  ButtonElementProps,
  ElementTypes,
  FormElementTypes,
  IFormElementButton,
} from '../../../store/formElements/types'

export const ButtonFormElement: FC<IButtonFormElement> = ({ Element }) => {
  const [buttonProps, setButtonProps] = useState<ButtonElementProps | undefined>()

  useLayoutEffect(() => {
    const btnFormElement = Element as IFormElementButton
    setButtonProps(btnFormElement.props)
  }, [Element])

  return (
    <SelectableLayer
      parentElementId={Element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Button}
    >
      <Button {...buttonProps} />
    </SelectableLayer>
  )
}

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

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const [buttonProps, setButtonProps] = useState<ButtonElementProps | undefined>()

  useLayoutEffect(() => {
    const btnFormElement = element as IFormElementButton
    setButtonProps(btnFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Button}
    >
      <Button {...buttonProps} />
    </SelectableLayer>
  )
}

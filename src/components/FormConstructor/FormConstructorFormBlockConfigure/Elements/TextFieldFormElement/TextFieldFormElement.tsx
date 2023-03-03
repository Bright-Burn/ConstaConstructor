import React, { FC, useLayoutEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'
import { SelectableLayer } from '../../SelectableLayer'
import { ITextFieldFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { IFormElementTextField, TextFieldProps } from '../../../store/formElements/textFieldTypes'

export const TextFieldFormElement: FC<ITextFieldFormElement> = ({ formElement }) => {
  const [textFieldProps, setTextFieldProps] = useState<TextFieldProps | undefined>()

  useLayoutEffect(() => {
    const textFieldFormElement = formElement as IFormElementTextField
    setTextFieldProps(textFieldFormElement.props)
  }, [formElement])

  return (
    <SelectableLayer
      parentElementId={formElement.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.TextField}
    >
      <TextField {...textFieldProps} />
    </SelectableLayer>
  )
}

import React, { FC, useLayoutEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'
import { SelectableLayer } from '../../SelectableLayer'
import { ITextFieldFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements'
import { IFormElementTextField, TextFieldProps } from '../../../store/formElements'

export const TextFieldFormElement: FC<ITextFieldFormElement> = ({ element }) => {
  const [textFieldProps, setTextFieldProps] = useState<TextFieldProps>()

  useLayoutEffect(() => {
    const textFieldFormElement = element as IFormElementTextField
    setTextFieldProps(textFieldFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.TextField}
    >
      <TextField {...textFieldProps} />
    </SelectableLayer>
  )
}

import { FC, useLayoutEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'
import { SelectableLayer } from '../../SelectableLayer'
import { ITextFieldFormElement } from './types'
import {
  IFormElementTextField,
  TextFieldProps,
  ElementTypes,
  FormElementDictTypes,
} from '../../../coreTypes'

export const TextFieldFormElement: FC<ITextFieldFormElement> = ({ element }) => {
  const [textFieldProps, setTextFieldProps] = useState<TextFieldProps>()

  useLayoutEffect(() => {
    const textFieldFormElement = element as IFormElementTextField
    setTextFieldProps(textFieldFormElement.props.props)
  }, [element])
  //логика для заполнения элемента
  const isFilled = element.props.filled
  //
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.TextField}
      className={isFilled ? 'container-row flex-grow-1' : ''}>
      <TextField style={{ width: '100%' }} {...textFieldProps} />
    </SelectableLayer>
  )
}

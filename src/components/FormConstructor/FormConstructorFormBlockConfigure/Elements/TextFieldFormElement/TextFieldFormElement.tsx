import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'

import type { TextFieldProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITextFieldFormElement } from './types'

export const TextFieldFormElement: FC<ITextFieldFormElement> = ({ element }) => {
  const [textFieldProps, setTextFieldProps] = useState<TextFieldProps>()

  useLayoutEffect(() => {
    const textFieldFormElement = element
    setTextFieldProps(textFieldFormElement.props.props)
  }, [element])
  //логика для заполнения элемента
  const isFilled = element.props.props.filled
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

import { FC, useLayoutEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'
import { SelectableLayer } from '../../SelectableLayer'
import { ITextFieldFormElement } from './types'
import { TextFieldProps, ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'
import { rootId } from '../../../store/formElements/initialState'

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
      <DroppableLocalLayer
        isLayout={false}
        parentElementId={element.parentId || rootId}
        elemId={element.id}>
        <TextField style={{ width: '100%' }} {...textFieldProps} />
      </DroppableLocalLayer>
    </SelectableLayer>
  )
}

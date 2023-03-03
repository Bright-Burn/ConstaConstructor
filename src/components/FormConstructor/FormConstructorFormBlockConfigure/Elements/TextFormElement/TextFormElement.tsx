import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { ITextFormElement } from './types'
import { Text } from '@consta/uikit/Text'
import { IFormElementText, TextElementProps } from '../../../store/formElements'

export const TextFormElement: FC<ITextFormElement> = ({ formElement }) => {
  const [textProps, setTextProps] = useState<TextElementProps | undefined>()

  useLayoutEffect(() => {
    const textFormElement = formElement as IFormElementText
    setTextProps(textFormElement.props)
  }, [formElement])

  return (
    <SelectableLayer
      parentElementId={formElement.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Text}
    >
      <Text {...textProps}>{textProps?.content} </Text>
    </SelectableLayer>
  )
}

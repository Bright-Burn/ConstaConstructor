import { FC, useLayoutEffect, useState } from 'react'
import {
  ElementTypes,
  FormElementDictTypes,
  IFormElementText,
  TextElementProps,
} from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { ITextFormElement } from './types'
import { Text } from '@consta/uikit/Text'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'
import { rootId } from '../../../store/formElements/initialState'

export const TextFormElement: FC<ITextFormElement> = ({ element }) => {
  const [textProps, setTextProps] = useState<TextElementProps>()

  useLayoutEffect(() => {
    const textFormElement = element as IFormElementText
    setTextProps(textFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Text}>
      <DroppableLocalLayer isLayout={false} parentElementId={element.parentId || rootId}>
        <Text {...textProps} align={textProps?.align?.name}>
          {textProps?.content}
        </Text>
      </DroppableLocalLayer>
    </SelectableLayer>
  )
}

import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Text } from '@consta/uikit/Text'

import type { IFormElementText, TextElementProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITextFormElement } from './types'

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
      <Text {...textProps} align={textProps?.align?.name}>
        {textProps?.content}
      </Text>
    </SelectableLayer>
  )
}

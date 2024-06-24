import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Text } from '@consta/uikit/Text'

import type { TextElementProps, TextlementStyles } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITextFormElement } from './types'

export const TextFormElement: FC<ITextFormElement> = ({ element }) => {
  const [textProps, setTextProps] = useState<TextElementProps>()

  useLayoutEffect(() => {
    const textFormElement = element
    setTextProps(textFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Text}>
      <Text {...textProps} align={textProps?.align?.name} style={getStyles(textProps?.style)}>
        {textProps?.content}
      </Text>
    </SelectableLayer>
  )
}
const getStyles = (styles: TextlementStyles | undefined) => {
  if (!styles) return {}
  const style = {
    color: `var(--${styles.color})`,
  }
  return style
}

import type { FC } from 'react'
import { Text } from '@consta/uikit/Text'

import type { TextlementStyles } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITextFormElement } from './types'

export const TextFormElement: FC<ITextFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Text}>
      <Text {...props} align={props?.align?.name} style={getStyles(props?.style)}>
        {props?.content}
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

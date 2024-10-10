import type { FC } from 'react'
import { Text } from '@consta/uikit/Text'

import type { TextProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITextFormElement } from './types'

export const TextFormElement: FC<ITextFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const uiLibProps = props?.uiLibProps
  const className = props?.className

  if (!uiLibProps) {
    return null
  }

  const style = getStyles(props.styles)

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Text}>
      <Text className={className} {...uiLibProps} style={style}>
        {uiLibProps.content}
      </Text>
    </SelectableLayer>
  )
}
const getStyles = (styles: TextProps['styles'] | undefined) => {
  if (!styles) return {}
  const style = {
    color: `var(--${styles.color})`,
  }
  return style
}

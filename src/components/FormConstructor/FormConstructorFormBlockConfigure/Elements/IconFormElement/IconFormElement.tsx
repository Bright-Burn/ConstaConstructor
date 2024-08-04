import type { FC } from 'react'
import React from 'react'

import type { IconElementStyles } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IIconFormElement } from './types'

export const IconFormElement: FC<IIconFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Icon}>
      {!!props &&
        React.createElement(Icons[props.icons], {
          ...props,
          style: getStyles(props.style),
        })}
    </SelectableLayer>
  )
}
const getStyles = (styles: IconElementStyles | undefined) => {
  if (!styles) return {}
  const style = {
    color: `var(--${styles.color})`,
  }
  return style
}

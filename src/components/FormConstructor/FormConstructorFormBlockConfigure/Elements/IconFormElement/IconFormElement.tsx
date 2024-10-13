import type { FC } from 'react'
import React from 'react'

import type { IconElementStyles } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IIconFormElement } from './types'

export const IconFormElement: FC<IIconFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const uiLibProps = props?.uiLibProps
  const className = props?.className

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Icon}>
      {React.createElement(Icons[props.uiLibProps.icons], {
        ...uiLibProps,
        className,
        style: getStyles(props.styles),
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

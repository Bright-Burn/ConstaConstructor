import type { FC } from 'react'
import React, { useLayoutEffect, useState } from 'react'

import type { IconElementStyles, IconProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IIconFormElement } from './types'

export const IconFormElement: FC<IIconFormElement> = ({ element }) => {
  const [iconProps, setIconProps] = useState<IconProps>()

  useLayoutEffect(() => {
    setIconProps(element.props.props)
  }, [element])
  console.log('L16 iconProps ===', iconProps)
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Icon}>
      {!!iconProps &&
        React.createElement(Icons[iconProps.icons], {
          ...iconProps,
          style: getStyles(iconProps.styles),
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

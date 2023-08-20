import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IIconFormElement } from './types'
import { IFormElementIcon, IconProps } from '../../../coreTypes'
import { Icons } from './mocks'
import React from 'react'
export const IconFormElement: FC<IIconFormElement> = ({ element }) => {
  const [iconProps, setIconProps] = useState<IconProps>()

  useLayoutEffect(() => {
    const iconFormElement = element
    setIconProps(iconFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Icon}
    >
      {iconProps && React.createElement(Icons[iconProps.icons], iconProps)}
    </SelectableLayer>
  )
}

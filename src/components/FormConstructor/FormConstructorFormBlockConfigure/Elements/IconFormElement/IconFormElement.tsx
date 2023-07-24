import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IIconFormElement } from './types'
import { IFormElementIcon, IconProps } from '../../../coreTypes'
import { Icons } from './mocks'
import React from 'react'
export const IconFormElement: FC<IIconFormElement> = ({ element }) => {
  const [iconProps, setIconProps] = useState<IconProps>()

  useLayoutEffect(() => {
    const iconFormElement = element as IFormElementIcon
    setIconProps(iconFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Icon}
    >
      {iconProps && React.createElement(Icons[iconProps.icons], iconProps)}
    </SelectableLayer>
  )
}

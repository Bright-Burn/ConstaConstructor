import type { FC } from 'react'
import React, { useLayoutEffect, useState } from 'react'

import type { IconProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import { Icons } from './mocks'
import type { IIconFormElement } from './types'
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
      elementType={FormElementDictTypes.Icon}>
      {!!iconProps && React.createElement(Icons[iconProps.icons], iconProps)}
    </SelectableLayer>
  )
}

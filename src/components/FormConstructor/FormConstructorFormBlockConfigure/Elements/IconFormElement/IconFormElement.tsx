import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IIconFormElement } from './types'
import { IFormElementIcon, IconElementProps } from '../../../store/formElements'
import { IconUser } from '@consta/icons/IconUser'

export const IconFormElement: FC<IIconFormElement> = ({ formElement }) => {
  const [iconProps, setIconProps] = useState<IconElementProps | undefined>()

  useLayoutEffect(() => {
    const iconFormElement = formElement as IFormElementIcon
    setIconProps(iconFormElement.props)
  }, [formElement])

  return (
    <SelectableLayer
      parentElementId={formElement.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Icon}
    >
      <IconUser {...iconProps} />
    </SelectableLayer>
  )
}

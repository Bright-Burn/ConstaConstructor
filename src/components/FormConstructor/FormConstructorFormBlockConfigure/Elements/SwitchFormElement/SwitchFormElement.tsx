import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { ISwitchFormElement } from './types'
import { Switch } from '@consta/uikit/Switch'
import { IFormElementSwitch, SwitchProps } from '../../../coreTypes'

export const SwitchFormElement: FC<ISwitchFormElement> = ({ element }) => {
  const [switchProps, setSwitchProps] = useState<SwitchProps>()

  useLayoutEffect(() => {
    const switchFormElement = element as IFormElementSwitch
    setSwitchProps(switchFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Switch}
    >
      <Switch {...switchProps} checked={switchProps?.checked} />
    </SelectableLayer>
  )
}

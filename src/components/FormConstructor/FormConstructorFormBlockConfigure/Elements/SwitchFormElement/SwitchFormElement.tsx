import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Switch } from '@consta/uikit/Switch'

import type { SwitchProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { ISwitchFormElement } from './types'

export const SwitchFormElement: FC<ISwitchFormElement> = ({ element }) => {
  const [switchProps, setSwitchProps] = useState<SwitchProps>()

  useLayoutEffect(() => {
    const switchFormElement = element
    setSwitchProps(switchFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Switch}>
      <Switch {...switchProps} checked={switchProps?.checked} />
    </SelectableLayer>
  )
}

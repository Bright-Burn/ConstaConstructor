import type { FC } from 'react'
import { Switch } from '@consta/uikit/Switch'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ISwitchFormElement } from './types'

export const SwitchFormElement: FC<ISwitchFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Switch}>
      <Switch {...props} checked={props?.checked} />
    </SelectableLayer>
  )
}

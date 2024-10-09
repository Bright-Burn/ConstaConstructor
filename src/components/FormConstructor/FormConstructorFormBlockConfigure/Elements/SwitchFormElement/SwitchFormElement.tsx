import type { FC } from 'react'
import { Switch } from '@consta/uikit/Switch'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ISwitchFormElement } from './types'

export const SwitchFormElement: FC<ISwitchFormElement> = ({ element }) => {
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
      elementType={FormElementDictTypes.Switch}>
      <Switch
        className={className}
        checked={uiLibProps.checked}
        disabled={uiLibProps.disabled}
        align={uiLibProps.align}
        label={uiLibProps.label}
        size={uiLibProps.size}
        view={uiLibProps.view}
      />
    </SelectableLayer>
  )
}

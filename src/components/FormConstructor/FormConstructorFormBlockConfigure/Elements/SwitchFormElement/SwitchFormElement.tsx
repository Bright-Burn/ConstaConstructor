import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { ISwitchFormElement } from './types'
import { Switch } from '@consta/uikit/Switch'
import { SwitchProps } from '../../../coreTypes'
import { rootId } from '../../../store/formElements/initialState'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'

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
      <DroppableLocalLayer isLayout={false} parentElementId={element.parentId || rootId}>
        <Switch {...switchProps} checked={switchProps?.checked} />
      </DroppableLocalLayer>
    </SelectableLayer>
  )
}

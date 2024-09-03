import type { FC } from 'react'
import { Select } from '@consta/uikit/Select'

import type { selectitemType, SelectStyles } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ISelectFormElement } from './types'

export const SelectFormElement: FC<ISelectFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props
  const isFilled = props?.filled || false
  const styles = isFilled ? {} : getStyles(props?.style)
  const selectableLayerClass = isFilled ? 'container-row flex-grow-1' : ''
  const comboBoxStyles = { flexGrow: isFilled ? 1 : 0, ...styles }
  return props ? (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Select}
      className={selectableLayerClass}>
      <Select
        {...props}
        groups={props.groupsActive ? props.groups : undefined}
        getItemLabel={(item: selectitemType) => item.label}
        getItemKey={(item: selectitemType) => item.id}
        getItemGroupKey={item => item.group}
        getGroupLabel={(group: string) => group}
        getGroupKey={(group: string) => group}
        style={comboBoxStyles}
        onChange={() => {}}
      />
    </SelectableLayer>
  ) : null
}
const getStyles = (styles: SelectStyles | undefined) => {
  return {
    maxWidth: styles?.maxWidth,
    minWidth: styles?.minWidth,
  }
}

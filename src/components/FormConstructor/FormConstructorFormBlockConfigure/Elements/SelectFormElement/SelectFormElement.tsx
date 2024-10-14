import type { FC } from 'react'
import { Select } from '@consta/uikit/Select'

import type { selectitemType } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { getFilledFlexClassName, getFilledFlexStyle } from '../../../utils'
import { SelectableLayer } from '../../SelectableLayer'

import type { ISelectFormElement } from './types'

export const SelectFormElement: FC<ISelectFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  //логика для заполнения элемента
  const isFilled = props?.styles.filled || false

  const uiLibProps = props?.uiLibProps
  const className = props?.className
  const styles = props?.styles
  const comboBoxStyles = { ...getFilledFlexStyle(isFilled), ...styles }

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Select}
      className={getFilledFlexClassName(isFilled)}>
      <Select
        className={className}
        {...uiLibProps}
        groups={uiLibProps.groupsActive ? uiLibProps.groups : undefined}
        getItemLabel={(item: selectitemType) => item.label}
        getItemKey={(item: selectitemType) => item.id}
        getItemGroupKey={item => item.group}
        getGroupLabel={(group: string) => group}
        getGroupKey={(group: string) => group}
        style={comboBoxStyles}
        onChange={() => {}}
      />
    </SelectableLayer>
  )
}

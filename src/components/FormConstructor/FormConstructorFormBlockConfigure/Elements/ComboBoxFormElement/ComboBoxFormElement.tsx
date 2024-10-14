import type { FC } from 'react'
import { Combobox } from '@consta/uikit/Combobox'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { getFilledFlexClassName, getFilledFlexStyle } from '../../../utils'
import { SelectableLayer } from '../../SelectableLayer'

import type { IComboBoxFormElement } from './types'

export const ComboBoxFormElement: FC<IComboBoxFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props
  //логика для заполнения элемента
  const isFilled = props?.styles.filled || false

  const uiLibProps = props?.uiLibProps
  const className = props?.className
  const styles = { ...getFilledFlexStyle(isFilled), ...props?.styles }

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      className={getFilledFlexClassName(isFilled)}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.ComboBox}>
      <Combobox
        {...uiLibProps}
        style={styles}
        className={className}
        items={uiLibProps.items}
        groups={uiLibProps.groupsActive ? uiLibProps.groups : undefined}
        getItemKey={item => item.label}
        getItemLabel={item => item.label}
        getItemGroupKey={item => item.group}
        getGroupLabel={(group: string) => group}
        getGroupKey={(group: string) => group}
        onChange={() => {}}
      />
    </SelectableLayer>
  )
}

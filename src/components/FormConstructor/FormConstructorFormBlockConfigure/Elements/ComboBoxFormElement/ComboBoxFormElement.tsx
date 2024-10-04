import type { FC } from 'react'
import { Combobox } from '@consta/uikit/Combobox'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { getIsFilledClassName } from '../../../utils'
import { SelectableLayer } from '../../SelectableLayer'

import type { IComboBoxFormElement } from './types'

export const ComboBoxFormElement: FC<IComboBoxFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props
  //логика для заполнения элемента
  const isFilled = props?.styles.filled || false

  const comboBoxUiLib = props?.uiLibProps
  const className = props?.className
  const styles = { flexGrow: isFilled ? 1 : 0, ...props?.styles }

  if (!comboBoxUiLib) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      className={getIsFilledClassName(isFilled)}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.ComboBox}>
      <Combobox
        {...comboBoxUiLib}
        style={styles}
        className={className}
        items={comboBoxUiLib.items}
        groups={comboBoxUiLib.groupsActive ? comboBoxUiLib.groups : undefined}
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

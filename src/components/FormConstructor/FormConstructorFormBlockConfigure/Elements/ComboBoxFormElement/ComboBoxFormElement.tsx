import type { FC } from 'react'
import { Combobox } from '@consta/uikit/Combobox'

import type { ComboboxProps, ComboBoxStyles } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IComboBoxFormElement } from './types'

export const ComboBoxFormElement: FC<IComboBoxFormElement> = ({ element }) => {
  const defaultComboboxProps: ComboboxProps = {
    className: '',
    style: { maxWidth: '200px', minWidth: '200px' },
    baseProps: {},
    groups: ['Первая группа', 'Вторая группа', 'Третья группа'],
    items: [
      {
        label: 'Первый',
        group: 'Первая группа',
        id: 1,
      },
      {
        label: 'Второй',
        group: 'Первая группа',
        id: 2,
      },
      {
        label: 'Третий',
        group: 'Первая группа',
        id: 3,
      },
    ],
  }

  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props
  const isFilled = props?.filled || false
  //Когда включено заполнение ширина не должна быть задана
  const styles = isFilled ? {} : getStyles(props?.style)
  const selectableLayerClass = isFilled ? 'container-row flex-grow-1' : ''
  const comboBoxStyles = { flexGrow: isFilled ? 1 : 0, ...styles }
  return props ? (
    <SelectableLayer
      parentElementId={element.id}
      className={selectableLayerClass}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.ComboBox}>
      <Combobox
        {...props}
        groups={props.groupsActive ? defaultComboboxProps.groups : undefined}
        getItemKey={item => item.label}
        getItemLabel={item => item.label}
        getItemGroupKey={item => item.group}
        getGroupLabel={(group: string) => group}
        getGroupKey={(group: string) => group}
        style={comboBoxStyles}
        onChange={() => {}}
      />
    </SelectableLayer>
  ) : null
}
const getStyles = (styles: ComboBoxStyles | undefined) => {
  return {
    maxWidth: styles?.maxWidth,
    minWidth: styles?.minWidth,
  }
}

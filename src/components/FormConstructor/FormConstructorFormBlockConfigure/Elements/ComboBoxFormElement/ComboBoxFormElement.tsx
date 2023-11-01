import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IComboBoxFormElement } from './types'
import { ComboboxProps } from '../../../coreTypes'
import { Combobox } from '@consta/uikit/Combobox'
import style from './style.module.css'

export const ComboBoxFormElement: FC<IComboBoxFormElement> = ({ element }) => {
  const [comboboxProps, setComboboxProps] = useState<ComboboxProps>({
    className: '',
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
  })

  useLayoutEffect(() => {
    const comboBoxFormElement = element
    setComboboxProps(comboBoxFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      className={style.ComboBox}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.ComboBox}>
      <Combobox
        {...comboboxProps}
        onChange={() => {}}
        groups={comboboxProps.groupsActive ? comboboxProps.groups : undefined}
        getItemKey={item => item.label}
        getItemLabel={item => item.label}
        getItemGroupKey={item => item.group}
        getGroupLabel={(group: string) => group}
        getGroupKey={(group: string) => group}
      />
    </SelectableLayer>
  )
}

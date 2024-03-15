import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Combobox } from '@consta/uikit/Combobox'

import type { ComboboxProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IComboBoxFormElement } from './types'

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
        groups={comboboxProps.groupsActive ? comboboxProps.groups : undefined}
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

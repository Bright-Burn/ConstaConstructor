import React, { FC, useLayoutEffect, useState } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { ISelectFormElement } from './types'
import { ElementTypes, FormElementDictTypes, SelectProps, selectitemType } from '../../../coreTypes'
import { Select } from '@consta/uikit/Select'
import style from './style.module.css'

export const SelectFormElement: FC<ISelectFormElement> = ({ element }) => {
  const [selectProps, setSelectProps] = useState<SelectProps>({
    className: '',
    groups: ['Первая группа', 'Вторая группа', 'Третья группа'],
    baseProps: {},
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
    content: 'Text',
  })

  useLayoutEffect(() => {
    const selectFormElementWithProps = element
    setSelectProps(selectFormElementWithProps.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      className={style.Select}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Select}>
      <Select
        {...selectProps}
        groups={selectProps.groupsActive ? selectProps.groups : undefined}
        getItemLabel={(item: selectitemType) => item.label}
        getItemKey={(item: selectitemType) => item.id}
        getItemGroupKey={item => item.group}
        getGroupLabel={(group: string) => group}
        getGroupKey={(group: string) => group}
        onChange={() => {}}
      />
    </SelectableLayer>
  )
}

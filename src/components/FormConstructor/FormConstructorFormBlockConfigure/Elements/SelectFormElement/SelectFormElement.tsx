import type { FC } from 'react'
import { Select } from '@consta/uikit/Select'

import type { selectitemType } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ISelectFormElement } from './types'

import style from './style.module.css'

export const SelectFormElement: FC<ISelectFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return props ? (
    <SelectableLayer
      parentElementId={element.id}
      className={style.Select}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Select}>
      <Select
        {...props}
        groups={props.groupsActive ? props.groups : undefined}
        getItemLabel={(item: selectitemType) => item.label}
        getItemKey={(item: selectitemType) => item.id}
        getItemGroupKey={item => item.group}
        getGroupLabel={(group: string) => group}
        getGroupKey={(group: string) => group}
        onChange={() => {}}
      />
    </SelectableLayer>
  ) : null
}

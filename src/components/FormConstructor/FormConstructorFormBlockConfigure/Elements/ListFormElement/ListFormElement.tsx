import type { FC } from 'react'
import { List, ListBox } from '@consta/uikit/ListCanary'

import type { ItemList } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IListFormElement } from './types'

const items: ItemList[] = [
  {
    label: '1',
    id: 1,
    disabled: false,
  },
  {
    label: '2',
    id: 2,
    disabled: false,
  },
  {
    label: '3',
    id: 3,
    disabled: false,
  },
]
export const ListFormElement: FC<IListFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.List}>
      {props?.withListBox === true ? (
        <ListBox form={props.form} shadow={true} border={true}>
          <List {...props} />
        </ListBox>
      ) : (
        <List items={items} {...props} />
      )}
    </SelectableLayer>
  )
}

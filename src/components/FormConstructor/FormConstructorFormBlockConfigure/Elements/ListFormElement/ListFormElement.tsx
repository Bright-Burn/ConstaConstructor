import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { List, ListBox } from '@consta/uikit/ListCanary'

import type { ItemList, ListProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
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
  const [ListProps, setListProps] = useState<ListProps>()

  useLayoutEffect(() => {
    const ListFormElement = element
    setListProps(ListFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.List}>
      {ListProps?.withListBox === true ? (
        <ListBox form={ListProps.form} shadow={true} border={true}>
          <List {...ListProps} />
        </ListBox>
      ) : (
        <List items={items} {...ListProps} />
      )}
    </SelectableLayer>
  )
}

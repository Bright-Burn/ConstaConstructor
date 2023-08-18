import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IListFormElement } from './types'
import { List } from '@consta/uikit/ListCanary'
import { IFormElementList, ItemList, ListProps } from '../../../coreTypes'
import { ListBox } from '@consta/uikit/ListCanary'

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
    const ListFormElement = element as IFormElementList
    setListProps(ListFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.List}
    >
      {ListProps?.withListBox === true ? (
        <ListBox form={ListProps.form} shadow border>
          <List {...ListProps} />
        </ListBox>
      ) : (
        <List items={items} {...ListProps} />
      )}
    </SelectableLayer>
  )
}

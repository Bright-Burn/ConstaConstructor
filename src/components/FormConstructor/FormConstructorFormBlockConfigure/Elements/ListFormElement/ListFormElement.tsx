import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IListFormElement } from './types'
import { List } from '@consta/uikit/ListCanary'
import { IFormElementList, ListProps } from '../../../store/formElements/ListTypes'
import { ListBox } from '@consta/uikit/ListCanary'

type Item = {
  label: string
  id: number
  disabled: boolean
}

const items: Item[] = [
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
  const [textFieldProps, setTextFieldProps] = useState<ListProps>()

  useLayoutEffect(() => {
    const ListFormElement = element as IFormElementList
    setTextFieldProps(ListFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.List}>
      {textFieldProps?.withListBox === true ? (
        <ListBox form={textFieldProps.form} shadow border>
          <List {...textFieldProps} />
        </ListBox>
      ) : (
        <List items={items} {...textFieldProps} />
      )}
    </SelectableLayer>
  )
}


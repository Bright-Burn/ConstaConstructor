import type { FC } from 'react'
import { List, ListBox } from '@consta/uikit/ListCanary'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IListFormElement } from './types'

export const ListFormElement: FC<IListFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const uiLibProps = props?.uiLibProps
  const className = props?.className

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.List}
      className={className}>
      {uiLibProps.withListBox === true ? (
        <ListBox form={uiLibProps.form} shadow={uiLibProps.shadow} border={uiLibProps.border}>
          <List size={uiLibProps.size} items={uiLibProps.items} disabled={uiLibProps.disabled} />
        </ListBox>
      ) : (
        <List size={uiLibProps.size} items={uiLibProps.items} disabled={uiLibProps.disabled} />
      )}
    </SelectableLayer>
  )
}

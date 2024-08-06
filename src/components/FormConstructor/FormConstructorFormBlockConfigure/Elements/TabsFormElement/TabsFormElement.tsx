import type { FC } from 'react'
import { Tabs } from '@consta/uikit/Tabs'

import type { tabItemType } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITabsFormElement } from './types'

export const TabsFormElement: FC<ITabsFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const getItemLeftIcon = (item: tabItemType) => item.iconLeft

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Tabs}>
      {props ? <Tabs {...props} getItemLeftIcon={getItemLeftIcon} onChange={() => {}} /> : null}
    </SelectableLayer>
  )
}

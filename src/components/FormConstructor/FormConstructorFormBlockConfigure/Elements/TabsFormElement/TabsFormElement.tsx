import type { FC } from 'react'
import React, { useLayoutEffect, useState } from 'react'
import { Tabs } from '@consta/uikit/Tabs'

import type { tabItemType, TabsElementProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITabsFormElement } from './types'

export const TabsFormElement: FC<ITabsFormElement> = ({ element }) => {
  const [tabsProps, setTabsProps] = useState<TabsElementProps>({
    className: '',
    baseProps: {},
    items: [
      { id: 0, label: 'tab1' },
      { id: 1, label: 'tab2' },
    ],
  })

  useLayoutEffect(() => {
    const tabsFormElementWithProps = element
    setTabsProps(tabsFormElementWithProps.props.props)
  }, [element])

  const getItemLeftIcon = (item: tabItemType) => item.iconLeft

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Tabs}>
      <Tabs {...tabsProps} getItemLeftIcon={getItemLeftIcon} onChange={() => {}} />
    </SelectableLayer>
  )
}

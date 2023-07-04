import React, { FC, useLayoutEffect, useState } from 'react'
import { Tabs } from '@consta/uikit/Tabs'
import { SelectableLayer } from '../../SelectableLayer'
import { ITabsFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { IFormElementTabs, TabsElementProps } from '../../../store/formElements/tabsTypes'

export const TabsFormElement: FC<ITabsFormElement> = ({ element }) => {
  const [tabsProps, setTabsProps] = useState<TabsElementProps>({
    className: '',
    baseProps: {},
    items: [
      { id: 0, label: 'tab1' },
      { id: 1, label: 'tab2' },
    ],
    onChange: () => {},
  })

  useLayoutEffect(() => {
    const tabsFormElementWithProps = element as IFormElementTabs
    setTabsProps(tabsFormElementWithProps.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Tabs}
    >
      <Tabs {...tabsProps} />
    </SelectableLayer>
  )
}

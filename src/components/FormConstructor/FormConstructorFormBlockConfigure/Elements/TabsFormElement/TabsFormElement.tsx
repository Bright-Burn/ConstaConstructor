import React, { FC, useLayoutEffect, useState } from 'react'
import { Tabs } from '@consta/uikit/Tabs'
import { SelectableLayer } from '../../SelectableLayer'
import { ITabsFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { IFormElementTabs, TabsElementProps } from '../../../store/formElements/tabsTypes'

export const TabsFormElement: FC<ITabsFormElement> = ({ formElement }) => {
  const [tabsProps, setTabsProps] = useState<TabsElementProps>({
    className: '',
    baseProps: {},
    items: [{ label: 'tab1' }, { label: 'tab2' }],
    onChange: () => {},
  })

  useLayoutEffect(() => {
    const tabsFormElementWithProps = formElement as IFormElementTabs
    setTabsProps(tabsFormElementWithProps.props)
  }, [formElement])

  return (
    <SelectableLayer
      parentElementId={formElement.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Tabs}
    >
      <Tabs {...tabsProps} />
    </SelectableLayer>
  )
}

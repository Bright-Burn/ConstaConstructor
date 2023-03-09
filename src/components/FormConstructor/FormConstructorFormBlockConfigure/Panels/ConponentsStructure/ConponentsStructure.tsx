import { Tabs } from '@consta/uikit/Tabs'
import React, { useState } from 'react'
import { BaseComponents } from './BaseComponents'
import { ComponentItems } from './ComponentItems'
import { ComponentTree } from './ComponentTree'
import { componentsTabItems } from './contetnt'
import styles from './styles.module.css'
import { ComponentsTabItem } from './types'

export const ConponentsStructure = () => {
  const [tabValue, setTabValue] = useState<ComponentsTabItem | null>(componentsTabItems[0])

  const getTabContentRenderer = () => {
    switch (tabValue) {
      case componentsTabItems[0]:
        return <BaseComponents />
      case componentsTabItems[1]:
        return <ComponentItems />
    }
  }

  return (
    <div className={`${styles.componentStructure} borderCard`}>
      <div className={styles.tabs}>
        <Tabs
          value={tabValue}
          onChange={({ value }) => setTabValue(value)}
          items={componentsTabItems}
          getItemIcon={(item: ComponentsTabItem) => item.icon}
          size='xs'
        />
      </div>
      {getTabContentRenderer()}
      <ComponentTree />
    </div>
  )
}

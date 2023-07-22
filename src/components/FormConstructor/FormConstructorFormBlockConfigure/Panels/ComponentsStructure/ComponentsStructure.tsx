import { useState } from 'react'
import styles from './styles.module.css'
import { ComponentsTabItem } from './types'
import { BaseComponents } from './BaseComponents'
import { ComponentItems } from './ComponentItems'
import { ComponentTree } from './ComponentTree'
import { componentsTabItems } from './content'
import { Tabs } from '@consta/uikit/Tabs'
import { IconArrowRight } from '@consta/uikit/IconArrowRight'
import { Button } from '@consta/uikit/Button'
import { useAppDispatch, useAppSelector } from '../../../store/formElements/slices'
import { getComponentsStructurePanelState, toggleComponentsStructurePanel } from '../../../store'

export const ComponentsStructure = () => {
  const [tabValue, setTabValue] = useState<ComponentsTabItem | null>(componentsTabItems[1])

  const getTabContentRenderer = () => {
    switch (tabValue) {
      case componentsTabItems[0]:
        return <BaseComponents />
      case componentsTabItems[1]:
        return <ComponentItems />
    }
  }

  const dispatch = useAppDispatch()
  const componentsStructurePanelState = useAppSelector(getComponentsStructurePanelState)

  const togglePanel = () => {
    dispatch(toggleComponentsStructurePanel())
  }

  return (
    <>
      {componentsStructurePanelState ? (
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
      ) : (
        <div className={styles.toggleButton}>
          <Button onlyIcon iconLeft={IconArrowRight} onClick={togglePanel} size='s' />
        </div>
      )}
    </>
  )
}

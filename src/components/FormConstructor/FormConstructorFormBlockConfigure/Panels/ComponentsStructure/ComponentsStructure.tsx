import { useState } from 'react'
import { IconArrowRight } from '@consta/icons/IconArrowRight'
import { Button } from '@consta/uikit/Button'
import { Tabs } from '@consta/uikit/Tabs'

import {
  checkViewMode,
  getComponentsStructurePanelState,
  toggleComponentsStructurePanel,
  useAppDispatch,
  useAppSelector,
} from '../../../store'

import { BaseComponents } from './BaseComponents'
import { ComponentsGrid } from './ComponentGrid'
import { ComponentItems } from './ComponentItems'
import { ComponentTree } from './ComponentTree'
import { componentsTabItems } from './content'
import type { ComponentsTabItem } from './types'

import styles from './styles.module.css'

export const ComponentsStructure = () => {
  const [tabValue, setTabValue] = useState<ComponentsTabItem | null>(componentsTabItems[0])
  const isViewMode = useAppSelector(checkViewMode)

  const getTabContentRenderer = () => {
    switch (tabValue) {
      case componentsTabItems[0]:
        return <ComponentsGrid />
      case componentsTabItems[1]:
        return <ComponentItems />
      case componentsTabItems[2]:
        return <BaseComponents />
    }
  }

  const dispatch = useAppDispatch()
  const componentsStructurePanelState = useAppSelector(getComponentsStructurePanelState)

  const togglePanel = () => {
    dispatch(toggleComponentsStructurePanel())
  }

  if (isViewMode) {
    return null
  }
  return componentsStructurePanelState ? (
    <div className={styles.componentStructure}>
      <div className={styles.tabs}>
        <Tabs
          className={styles.tabs_margin}
          value={tabValue}
          items={componentsTabItems}
          size="s"
          view="clear"
          onChange={value => {
            setTabValue(value)
          }}
        />
      </div>
      {getTabContentRenderer()}
    </div>
  ) : (
    <div className={styles.toggleButton}>
      <Button onlyIcon={true} iconLeft={IconArrowRight} size="s" onClick={togglePanel} />
    </div>
  )
}

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
import {
  checkViewMode,
  getComponentsStructurePanelState,
  toggleComponentsStructurePanel,
  useAppDispatch,
  useAppSelector,
} from '../../../store'
import { ComponentsGrid } from './ComponentGrid/ComponentsGrid'

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

  if(isViewMode) {
    return null
  }
  return (
    <>
      {componentsStructurePanelState ? (
        <div className={`${styles.componentStructure}`}>
          <div className={styles.tabs}>
            <Tabs
              className={styles.tabs_margin}
              value={tabValue}
              onChange={({ value }) => setTabValue(value)}
              items={componentsTabItems}
              size='s'
              view='clear'
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

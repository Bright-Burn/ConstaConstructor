import React, { useState } from 'react'
import styles from './styles.module.css'
import { ComponentsTabItem } from './types'
import { BaseComponents } from './BaseComponents'
import { ComponentItems } from './ComponentItems'
import { ComponentTree } from './ComponentTree'
import { componentsTabItems } from './content'
import { Tabs } from '@consta/uikit/Tabs'
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft'
import { IconArrowRight } from '@consta/uikit/IconArrowRight'
import { Button } from '@consta/uikit/Button'
import {
  formConstructorSlice,
  useAppDispatch,
  useAppSelector,
} from '../../../store/formElements/slices'

export const ComponentsStructure = () => {
  const [tabValue, setTabValue] = useState<ComponentsTabItem | null>(componentsTabItems[0])

  const getTabContentRenderer = () => {
    switch (tabValue) {
      case componentsTabItems[0]:
        return <BaseComponents />
      case componentsTabItems[1]:
        return <ComponentItems />
    }
  }

  const dispatch = useAppDispatch()
  const componentsStructurePanelState = useAppSelector(
    state => state.formConstructor.componentsStructurePanelState,
  )

  const toggleSettingsPanel = () => {
    dispatch(
      formConstructorSlice.actions.toggleComponentsStructurePanel({
        componentsStructurePanelState: componentsStructurePanelState,
      }),
    )
  }

  return (
    <>
      {componentsStructurePanelState ? (
        <>
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
          <div className={styles.toggleButton}>
            <Button
              onlyIcon
              iconLeft={IconArrowLeft}
              onClick={toggleSettingsPanel}
              size='s'
            />
          </div>
        </>
      ) : (
        <div className={styles.toggleButton}>
          <Button
            onlyIcon
            iconLeft={IconArrowRight}
            onClick={toggleSettingsPanel}
            size='s'
          />
        </div>
      )}
    </>
  )
}

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

export const ComponentsStructure = () => {
  const [tabValue, setTabValue] = useState<ComponentsTabItem | null>(componentsTabItems[0])
  const [isOpened, setIsOpened] = useState<boolean>(true)

  const getTabContentRenderer = () => {
    switch (tabValue) {
      case componentsTabItems[0]:
        return <BaseComponents />
      case componentsTabItems[1]:
        return <ComponentItems />
    }
  }

  const toggleSetting = () => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      {isOpened ? (
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
              onClick={toggleSetting}
              // view='ghost'
              size='s'
            />
          </div>
        </>
      ) : (
        <div className={styles.toggleButton}>
          <Button
            onlyIcon
            iconLeft={IconArrowRight}
            onClick={toggleSetting}
            // view='ghost'
            size='s'
          />
        </div>
      )}
    </>
  )
}

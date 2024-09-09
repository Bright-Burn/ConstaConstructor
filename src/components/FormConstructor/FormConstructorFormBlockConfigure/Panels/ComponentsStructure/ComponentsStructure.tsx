import { useState } from 'react'
import { IconArrowRight } from '@consta/icons/IconArrowRight'
import { Button } from '@consta/uikit/Button'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
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
import { choiceItems, componentsTabItems, EChoiceItems } from './content'
import type { ComponentsTabItem } from './types'

import styles from './styles.module.css'

export const ComponentsStructure = () => {
  const [structureView, setStructureView] = useState<EChoiceItems>(EChoiceItems.Components)
  const isViewMode = useAppSelector(checkViewMode)

  // const getTabContentRenderer = () => {
  //   switch (structureView) {
  //     case componentsTabItems[0]:
  //       return <ComponentsGrid />
  //     case componentsTabItems[1]:
  //       return <ComponentItems />
  //     case componentsTabItems[2]:
  //       return <BaseComponents />
  //   }
  // }

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
      <ChoiceGroup
        items={choiceItems}
        className="m-b-xs"
        name="structureItems"
        getItemLabel={(item: string) => item}
        value={structureView}
        size="xs"
        view="ghost"
        onChange={setStructureView}
      />
      {EChoiceItems.Components === structureView ? (
        <>
          <ComponentItems /> <BaseComponents />
        </>
      ) : (
        <ComponentTree />
      )}
    </div>
  ) : (
    <div className={styles.toggleButton}>
      <Button onlyIcon={true} iconLeft={IconArrowRight} size="s" onClick={togglePanel} />
    </div>
  )
}

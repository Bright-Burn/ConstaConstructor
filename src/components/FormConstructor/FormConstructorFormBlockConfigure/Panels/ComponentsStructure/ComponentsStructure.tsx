import { useState } from 'react'
import { IconArrowRight } from '@consta/icons/IconArrowRight'
import { IconClose } from '@consta/icons/IconClose'
import { Button } from '@consta/uikit/Button'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Text } from '@consta/uikit/Text'

import {
  checkViewMode,
  getComponentsStructurePanelState,
  toggleComponentsStructurePanel,
  useAppDispatch,
  useAppSelector,
} from '../../../store'

import { BaseComponents } from './BaseComponents'
import { ComponentItems } from './ComponentItems'
import { ComponentTree } from './ComponentTree'
import { choiceItems, EChoiceItems } from './content'
import { PageName } from './PageName'

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
  console.log('L53 componentsStructurePanelState ===', componentsStructurePanelState)
  return componentsStructurePanelState ? (
    <div className={styles.componentStructure}>
      <div className={styles.toggleContainer}>
        <Text weight="light" size="xs" view="primary">
          Project
        </Text>
        <Button onlyIcon={true} iconLeft={IconClose} size="xs" view="ghost" onClick={togglePanel} />
      </div>
      <div className="m-b-xs  m-t-xs">
        <PageName />
      </div>
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

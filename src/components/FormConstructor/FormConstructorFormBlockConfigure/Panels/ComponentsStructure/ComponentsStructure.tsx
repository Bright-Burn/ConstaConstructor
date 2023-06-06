import React, { useState } from 'react'
import styles from './styles.module.css'
import { ComponentsTabItem } from './types'
import { BaseComponents } from './BaseComponents'
import { ComponentItems } from './ComponentItems'
import { componentsTabItems } from './content'
import { IconArrowRight } from '@consta/uikit/IconArrowRight'
import { Button } from '@consta/uikit/Button'
import {
  formConstructorSlice,
  useAppDispatch,
  useAppSelector,
} from '../../../store/formElements/slices'
import { Text } from '@consta/uikit/Text'
import { IPageOfLayout, pagesSlice, usePagesSelector } from '../../../store/pagesOfLayout'
import { IconTrash } from '@consta/uikit/IconTrash'
import { Card } from '@consta/uikit/Card'
import { IconDownload } from '@consta/icons/IconDownload'
import { IconAdd } from '@consta/icons/IconAdd'
import { RootState } from '../../../store'

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

  const changeActivePage = (index: number) => {
    dispatch(pagesSlice.actions.changeActivePage({ index }))
  }

  const closePage = (index: number) => {
    dispatch(pagesSlice.actions.closePage({ index }))
  }

  const addNewPage = () => {
    dispatch(pagesSlice.actions.addNewPage())
  }
  const pages = usePagesSelector((state: RootState) => state.pagesOfLayout.pages)
  return (
    <>
      {componentsStructurePanelState ? (
        <div className={`${styles.componentStructure} borderCard`}>
          <div className={styles.tabs}>
            <Text>Страницы</Text>
            <div>
              <Button
                iconLeft={IconAdd}
                label='Новая'
                view='ghost'
                size='xs'
                onClick={addNewPage}
              />
              <Button
                iconLeft={IconDownload}
                label='Импорт'
                view='ghost'
                size='xs'
                onClick={addNewPage}
              />
            </div>
          </div>
          <div className={`${styles.pages}`}>
            {pages.map((page: IPageOfLayout, index: number) => (
              <Card className={`${styles.pageBlock}`} form='round'>
                <Button
                  className={
                    page.isActive ? `${styles.buttonLeftIsActive}` : `${styles.buttonLeft}`
                  }
                  label={`${page.name}`}
                  view='ghost'
                  size='xs'
                  form='brick'
                  onClick={() => changeActivePage(index)}
                />
                <Button
                  className={
                    page.isActive ? `${styles.buttonRightIsActive}` : `${styles.buttonRight}`
                  }
                  iconLeft={IconTrash}
                  view='ghost'
                  size='xs'
                  form='brick'
                  onlyIcon
                  onClick={() => closePage(index)}
                />
              </Card>
            ))}
          </div>
          {getTabContentRenderer()}
        </div>
      ) : (
        <div className={styles.toggleButton}>
          <Button onlyIcon iconLeft={IconArrowRight} onClick={toggleSettingsPanel} size='s' />
        </div>
      )}
    </>
  )
}

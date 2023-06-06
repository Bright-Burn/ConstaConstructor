import { FC, useEffect, useState } from 'react'
import { useBaseComponentsSelector } from '../../../../store/baseComponentsItems'
import styles from './styles.module.css'
import {
  baseComponentsSlice,
  useBaseComponentsDispatch,
} from '../../../../store/baseComponentsItems'
import { Tabs } from '@consta/uikit/TabsDeprecated'
import { customCardsTemplateMock } from '../../../Elements/CustomCardsTemplate/mock'
import {
  headerMock,
  placeholderMock,
  headerWithStatusMock,
  headerCognitiveGeologistMock,
  gridMock,
  dashboardMock,
  simpleFormMock,
  cardMock,
  wizardFormMock,
  footerWithSwitchMock,
  FormWithTwoColumnsMock,
  TableMock,
  ExpertiseFormMock,
} from '../../../Elements'
import { BaseComponentCardsList } from './BaseComponentCardsList'
import { ComponentItems } from '../ComponentItems'

export const BaseComponents: FC = () => {
  const { baseComponents } = useBaseComponentsSelector(state => state.baseComponents)
  const baseComponentMocks = [
    customCardsTemplateMock,
    headerMock,
    placeholderMock,
    headerWithStatusMock,
    headerCognitiveGeologistMock,
    cardMock,
    gridMock,
    dashboardMock,
    simpleFormMock,
    wizardFormMock,
    footerWithSwitchMock,
    FormWithTwoColumnsMock,
    TableMock,
    ExpertiseFormMock,
  ]

  const dispatch = useBaseComponentsDispatch()
  useEffect(() => {
    baseComponentMocks.forEach(mock => {
      if (!baseComponents.some(component => component.id === mock.id))
        dispatch(baseComponentsSlice.actions.addNewBaseElement({ baseComponent: mock }))
    })
  }, [])

  const items: string[] = ['Блоки', 'Конста', 'Сетка']
  const [value, setValue] = useState<string | null>(items[0])
  return (
    <div className={`${styles.baseComponentsPanel}`}>
      <Tabs
        className={`${styles.tabs}`}
        value={value}
        onChange={({ value }) => setValue(value)}
        items={items}
        getLabel={item => item}
        view='bordered'
      />
      {value ? (
        value == 'Блоки' ? (
          <div className={`${styles.Blocks}`}>
            <BaseComponentCardsList baseComponents={baseComponents} />
          </div>
        ) : value == 'Конста' ? (
          <div>
            <ComponentItems />
          </div>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </div>
  )
}

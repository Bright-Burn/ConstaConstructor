import { FC, useLayoutEffect, useState } from 'react'
import { IBaseComponentCardsList } from './types'
import { BaseComponentGroupCard } from './BaseComponentGroupCard'
import { IBaseComponent } from '../../../../../store/baseComponentsItems'
import { GroupCards, GroupCardsTypes } from './BaseComponentGroupCard/types'
import { customCardsTemplateMockId } from '../../../../Elements/CustomCardsTemplate'
import { dashboardMockId } from '../../../../Elements/Dashboard/mocks'
import { headerGeologistId } from '../../../../Elements/HeaderCognitiveGeologist'
import { headerMockId } from '../../../../Elements/HeaderWithBreadcrumbs'
import { headerWithStatusMockId } from '../../../../Elements/HeaderWithStatus'
import { simpleFormMockId } from '../../../../Elements/SimpleForm'
import { cardMockId } from '../../../../Elements/CardWithBarChart'

export const BaseComponentCardsList: FC<IBaseComponentCardsList> = ({ baseComponents }) => {
  const [groupComponentsMap, setGroupComponentsMap] = useState<
    Map<GroupCardsTypes, IBaseComponent[]>
  >(new Map<GroupCardsTypes, IBaseComponent[]>())

  useLayoutEffect(() => {
    const map = new Map<GroupCardsTypes, IBaseComponent[]>()

    baseComponents.forEach(bc => {
      switch (bc.id) {
        case headerMockId:
          map.set('Headers', [...(map.get('Headers') || []), bc])
          break
        case headerGeologistId:
          map.set('Headers', [...(map.get('Headers') || []), bc])
          break
        case headerWithStatusMockId:
          map.set('Headers', [...(map.get('Headers') || []), bc])
          break
        case simpleFormMockId:
          map.set('Forms', [...(map.get('Forms') || []), bc])
          break
        case dashboardMockId:
          map.set('Dashboards', [...(map.get('Dashboards') || []), bc])
          break
        case cardMockId:
          map.set('Dashboards', [...(map.get('Dashboards') || []), bc])
          break
        case customCardsTemplateMockId:
          map.set('Cards', [...(map.get('Cards') || []), bc])
          break
        default:
          map.set('Others', [...(map.get('Others') || []), bc])
          break
      }
    })

    setGroupComponentsMap(map)
  }, [baseComponents])

  return (
    <>
      <BaseComponentGroupCard
        name='Хеадеры'
        baseComponents={groupComponentsMap.get(GroupCards.Headers) || []}
      />
      <BaseComponentGroupCard
        name='Формы'
        baseComponents={groupComponentsMap.get(GroupCards.Forms) || []}
      />
      <BaseComponentGroupCard
        name='Дашборды'
        baseComponents={groupComponentsMap.get(GroupCards.Dashboards) || []}
      />
      <BaseComponentGroupCard
        name='Карточки'
        baseComponents={groupComponentsMap.get(GroupCards.Cards) || []}
      />
      <BaseComponentGroupCard
        name='Другое'
        baseComponents={groupComponentsMap.get(GroupCards.Others) || []}
      />
    </>
  )
}

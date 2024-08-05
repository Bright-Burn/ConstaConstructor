import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'

import type { IBaseComponent } from '../../../../../store'

import type { GroupCardsTypes } from './BaseComponentGroupCard'
import { BaseComponentGroupCard, GroupCards } from './BaseComponentGroupCard'
import type { IBaseComponentCardsList } from './types'

export const BaseComponentCardsList: FC<IBaseComponentCardsList> = ({ baseComponents }) => {
  const [groupComponentsMap, setGroupComponentsMap] = useState<
    Map<GroupCardsTypes, IBaseComponent[]>
  >(new Map<GroupCardsTypes, IBaseComponent[]>())

  useLayoutEffect(() => {
    const map = new Map<GroupCardsTypes, IBaseComponent[]>()

    baseComponents.forEach(bc => {
      map.set('Others', [...(map.get('Others') || []), bc])
    })

    setGroupComponentsMap(map)
  }, [baseComponents])

  return (
    <>
      {/* TODO переместить как разработается дизайн готовых компонент */}
      {/* <BaseComponentGroupCard
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
        name='Таблицы'
        baseComponents={groupComponentsMap.get(GroupCards.Tables) || []}
      />
      <BaseComponentGroupCard
        name='Футеры'
        baseComponents={groupComponentsMap.get(GroupCards.Footers) || []}
      /> */}
      <BaseComponentGroupCard
        name="Другое"
        baseComponents={groupComponentsMap.get(GroupCards.Others) || []}
      />
    </>
  )
}

import { FC, useLayoutEffect, useState } from 'react'
import { IBaseComponentCardsList } from './types'
import { BaseComponentGroupCard } from './BaseComponentGroupCard'
import { IBaseComponent } from '../../../../../store/baseComponentsItems'
import { GroupCards, GroupCardsTypes } from './BaseComponentGroupCard/types'

export const BaseComponentCardsList: FC<IBaseComponentCardsList> = ({ baseComponents }) => {
  const [groupComponentsMap, setGroupComponentsMap] = useState<
    Map<GroupCardsTypes, IBaseComponent[]>
  >(new Map<GroupCardsTypes, IBaseComponent[]>())

  useLayoutEffect(() => {
    const map = new Map<GroupCardsTypes, IBaseComponent[]>()

    baseComponents.forEach(bc => {
      switch (bc.id) {
        case '83f6c798-7750-4663-9172-32398cff8ab4':
          map.set('Headers', [...(map.get('Headers') || []), bc])
          break
        case 'af96797e-04cd-4c63-b0a7-16e630919b7e':
          map.set('Headers', [...(map.get('Headers') || []), bc])
          break
        case 'c7e739e6-f1c0-4456-b438-2d2aa3ca4008':
          map.set('Headers', [...(map.get('Headers') || []), bc])
          break
        case 'f49f44ce-27e4-458d-4fd5-faa976accccc':
          map.set('Forms', [...(map.get('Forms') || []), bc])
          break
        case 'c7d1d7bd-f13e-28e9-67a8-2699f5de1feb':
          map.set('Dashboards', [...(map.get('Dashboards') || []), bc])
          break
        case 'f49f44ce-27e4-458d-4fd5-faa976aba100':
          map.set('Dashboards', [...(map.get('Dashboards') || []), bc])
          break
        case 'ac3039a1-eb0f-4525-a537-39c157f96ef0':
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

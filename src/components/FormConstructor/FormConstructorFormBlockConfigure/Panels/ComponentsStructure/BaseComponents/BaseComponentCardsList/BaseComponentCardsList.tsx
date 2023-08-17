import { FC, useLayoutEffect, useState } from 'react'
import { IBaseComponentCardsList } from './types'
import { BaseComponentGroupCard } from './BaseComponentGroupCard'
import { IBaseComponent } from '../../../../../store/baseComponentsItems'
import { GroupCards, GroupCardsTypes } from './BaseComponentGroupCard/types'
import { componentsDict } from './ComponentsDict'

export const BaseComponentCardsList: FC<IBaseComponentCardsList> = ({ baseComponents }) => {
  const [groupComponentsMap, setGroupComponentsMap] = useState<
    Map<GroupCardsTypes, IBaseComponent[]>
  >(new Map<GroupCardsTypes, IBaseComponent[]>())

  useLayoutEffect(() => {
    const map = new Map<GroupCardsTypes, IBaseComponent[]>()

    baseComponents.forEach(bc => {
      if (componentsDict[bc.id]) {
        map.set(componentsDict[bc.id], [...(map.get(componentsDict[bc.id]) || []), bc])
      } else {
        map.set('Others', [...(map.get('Others') || []), bc])
      }
    })

    setGroupComponentsMap(map)
  }, [baseComponents])

  return (
    <>
      <BaseComponentGroupCard
        name='Другое'
        baseComponents={groupComponentsMap.get(GroupCards.Others) || []}
      />
    </>
  )
}

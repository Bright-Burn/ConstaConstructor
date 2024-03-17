import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'

import type { CustomCardsProps, IFormElementCustomCards } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayerFitSpace } from '../../SelectableLayer'

import CustomCardsTemplate from './CustomCardsTemplate'
import type { ICustomCardFormElement } from './types'

export const CustomCards: FC<ICustomCardFormElement> = ({ element }) => {
  const [, setCustomCardsProps] = useState<CustomCardsProps | undefined>()

  useLayoutEffect(() => {
    const customCards = element as IFormElementCustomCards
    setCustomCardsProps(customCards.props)
  }, [element])

  return (
    <SelectableLayerFitSpace
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.CustomCards}>
      <CustomCardsTemplate />
      <DroppableLayer parentElementId={element.id} />
    </SelectableLayerFitSpace>
  )
}

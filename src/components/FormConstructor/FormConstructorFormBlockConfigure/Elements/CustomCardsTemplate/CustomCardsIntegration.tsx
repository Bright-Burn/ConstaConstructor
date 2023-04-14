import { FC, useLayoutEffect, useState } from 'react'

import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { ICustomCardFormElement } from './types'
import {
  IFormElementCustomCards,
  CustomCardsProps,
} from '../../../store/formElements/customCardsTypes'

import { SelectableLayerFitSpace } from '../../SelectableLayer/SelectableLayerFitSpace'
import CustomCardsTemplate from './CustomCardsTemplate'
import { DroppableLayer } from '../../DroppableLayer'

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
      elementType={FormElementTypes.CustomCards}
    >
      <CustomCardsTemplate />
      <DroppableLayer parentElementId={element.id} />
    </SelectableLayerFitSpace>
  )
}

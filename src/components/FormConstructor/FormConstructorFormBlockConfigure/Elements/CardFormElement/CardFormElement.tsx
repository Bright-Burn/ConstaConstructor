import { FC, useLayoutEffect, useState } from 'react'
import { Card } from '@consta/uikit/Card'
import { SelectableLayer } from '../../SelectableLayer'
import { ICardFormElement } from './types'
import {
  ElementTypes,
  FormGroupsTypes,
  ICardElement,
} from '../../../store/formElements/types'
import { DroppableLayer } from '../../DroppableLayer'
import { CardElementPropsStyles } from '../../../store/formElements/cardTypes'

export const CardFormElement: FC<ICardFormElement> = ({ cardElement }) => {
  const [cardProps, setCardProps] = useState<CardElementPropsStyles | undefined>()

  useLayoutEffect(() => {
    const cardFormElement = cardElement as ICardElement
    setCardProps(cardFormElement.props)
  }, [cardElement])

  return (
    <SelectableLayer
      parentElementId={cardElement.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormGroupsTypes.Card}
    >
       <Card {...cardProps?.constaProps} className={cardProps?.className}
       style={{ ...cardProps?.styles }}> 
        <DroppableLayer parentElementId={cardElement.id} />
      </Card>
    </SelectableLayer>
  )
}

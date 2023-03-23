import { FC, useLayoutEffect, useState } from 'react'
import { Card } from '@consta/uikit/Card'
import { SelectableLayer } from '../../SelectableLayer'
import { ICardFormElement } from './types'
import { ElementTypes, FormGroupsTypes, ICardElement } from '../../../store/formElements/types'
import { DroppableLayer } from '../../DroppableLayer'
import { CardElementPropsStyles } from '../../../store/formElements/cardTypes'
import styles from './styles.module.css'
export const CardFormElement: FC<ICardFormElement> = ({ element }) => {
  const [cardProps, setCardProps] = useState<CardElementPropsStyles>()

  useLayoutEffect(() => {
    const cardFormElement = element as ICardElement
    setCardProps(cardFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormGroupsTypes.Card}
    >
      <Card
        {...cardProps?.constaProps}
        className={`${cardProps?.className} ${styles.body}`}
        style={{ ...cardProps?.styles }}
      >
        <DroppableLayer parentElementId={element.id} />
      </Card>
    </SelectableLayer>
  )
}

import { FC, useLayoutEffect, useState } from 'react'
import { Card } from '@consta/uikit/Card'
import { SelectableLayer } from '../../SelectableLayer'
import { ICardFormElement } from './types'
import { ElementTypes, FormGroupsDictTypes } from '../../../coreTypes'
import { DroppableLayer } from '../../DroppableLayer'
import { CardElementPropsStyles } from '../../../coreTypes'
import styles from './styles.module.css'
export const CardFormElement: FC<ICardFormElement> = ({ element }) => {
  const [cardProps, setCardProps] = useState<CardElementPropsStyles>()

  useLayoutEffect(() => {
    const cardFormElement = element
    setCardProps(cardFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormGroupsDictTypes.Card}
    >
      <Card
        {...cardProps?.constaProps}
        className={`${cardProps?.className} ${styles.body}`}
        style={{ ...cardProps?.styles, display: 'flex' }}
      >
        <div className={styles.cardContent}>
          <DroppableLayer parentElementId={element.id} />
        </div>
      </Card>
    </SelectableLayer>
  )
}

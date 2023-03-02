import { FC, useLayoutEffect, useState } from 'react'
import { Card } from '@consta/uikit/Card'
import { IconUser } from '@consta/uikit/IconUser'
import { SelectableLayer } from '../../SelectableLayer'
import { ICardFormElement } from './types'
import {
  CardElementPropsStyles,
  ElementTypes,
  FormElementTypes,
  IFormElementCard,
} from '../../../store/formElements/types'
import { Text } from '@consta/uikit/Text'
import styles from './styles.module.css'

export const CardFormElement: FC<ICardFormElement> = ({ formElement }) => {
  const [cardProps, setCardProps] = useState<CardElementPropsStyles | undefined>()

  useLayoutEffect(() => {
    const cardFormElement = formElement as IFormElementCard
    setCardProps(cardFormElement.props)
  }, [formElement])

  return (
    <SelectableLayer
      parentElementId={formElement.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Card}
    >
       <Card {...cardProps?.constaProps} className={`${styles.body} ${cardProps?.className}`}> 
        <Text className={styles.cardName}>
          Название
        </Text>
        <div className={styles.cardInfo}>
          <IconUser size='s'  className={styles.cardInfoIcon}/>
          <Text >
            Инфо
          </Text>
        </div>
        <div className={styles.cardFooter}>
          <Text size="xs" view="secondary">
            Изменено: 1 час назад
          </Text>
        </div>
      </Card>
    </SelectableLayer>
  )
}

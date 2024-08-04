import type { FC } from 'react'
import { Card } from '@consta/uikit/Card'

import { ElementTypes, FormGroupsDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayer } from '../../SelectableLayer'

import type { ICardFormElement } from './types'

import styles from './styles.module.css'

export const CardFormElement: FC<ICardFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return props ? (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormGroupsDictTypes.Card}>
      <Card
        {...props.constaProps}
        className={`${props.className} ${styles.body}`}
        style={{ ...props.styles, display: 'flex' }}>
        <div className={styles.cardContent}>
          <DroppableLayer parentElementId={element.id} />
        </div>
      </Card>
    </SelectableLayer>
  ) : null
}

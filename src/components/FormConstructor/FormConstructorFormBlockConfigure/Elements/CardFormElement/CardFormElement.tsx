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

  const cardProps = props?.uiLibProps
  const className = props?.className
  const propsStyles = props?.styles

  if (!cardProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormGroupsDictTypes.Card}>
      <Card
        {...cardProps}
        className={`${className} ${styles.body}`}
        style={{ ...(propsStyles || {}), display: 'flex' }}>
        <div className={styles.cardContent}>
          <DroppableLayer parentElementId={element.id} />
        </div>
      </Card>
    </SelectableLayer>
  )
}

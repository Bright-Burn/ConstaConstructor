import type { FC } from 'react'
import { Button } from '@consta/uikit/Button'

import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { getFilledFlexClassName, getFilledFlexStyle } from '../../../utils'
import { SelectableLayer } from '../../SelectableLayer'

import type { IButtonFormElement } from './types'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  //логика для заполнения элемента
  const isFilled = props?.styles.filled || false

  const uiLibProps = props?.uiLibProps
  const className = props?.className

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Button}
      className={getFilledFlexClassName(isFilled)}>
      <Button
        className={className}
        {...uiLibProps}
        style={getFilledFlexStyle(isFilled)}
        iconLeft={uiLibProps.iconLeft ? Icons[uiLibProps.iconLeft] : undefined}
        iconRight={uiLibProps.iconRight ? Icons[uiLibProps.iconRight] : undefined}
      />
    </SelectableLayer>
  )
}

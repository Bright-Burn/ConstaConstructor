import type { FC } from 'react'
import { Button } from '@consta/uikit/Button'

import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { getIsFilledClassName } from '../../../utils'
import { SelectableLayer } from '../../SelectableLayer'

import type { IButtonFormElement } from './types'

export const ButtonFormElement: FC<IButtonFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  //логика для заполнения элемента
  const isFilled = props?.styles.filled || false

  const buttonConstaProps = props?.constaProps
  const className = props?.className

  return props ? (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Button}
      className={getIsFilledClassName(isFilled)}>
      <Button
        className={className}
        {...buttonConstaProps}
        style={{ flexGrow: isFilled ? 1 : 0 }}
        iconLeft={buttonConstaProps?.icon ? Icons[buttonConstaProps.icon] : undefined}
        iconRight={buttonConstaProps?.iconR ? Icons[buttonConstaProps.iconR] : undefined}
      />
    </SelectableLayer>
  ) : null
}

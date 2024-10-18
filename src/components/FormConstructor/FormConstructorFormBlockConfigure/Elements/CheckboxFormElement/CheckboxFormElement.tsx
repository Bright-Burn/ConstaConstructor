import type { FC } from 'react'
import { Checkbox } from '@consta/uikit/Checkbox'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ICheckboxFormElement } from './types'

export const CheckboxFormElement: FC<ICheckboxFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const uiLibProps = props?.uiLibProps
  const className = props?.className

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Checkbox}>
      <Checkbox className={className} {...uiLibProps} />
    </SelectableLayer>
  )
}

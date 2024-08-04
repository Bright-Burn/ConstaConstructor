import type { FC } from 'react'
import { Checkbox } from '@consta/uikit/Checkbox'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ICheckboxFormElement } from './types'

export const CheckboxFormElement: FC<ICheckboxFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Checkbox}>
      <Checkbox checked={props?.checked} {...props} />
    </SelectableLayer>
  )
}

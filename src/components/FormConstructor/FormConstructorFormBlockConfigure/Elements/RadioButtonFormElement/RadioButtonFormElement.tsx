import type { FC } from 'react'
import { Radio } from '@consta/uikit/Radio'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IRadioButtonFormElement } from './types'

export const RadioButtonFormElement: FC<IRadioButtonFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.RadioButton}>
      <Radio {...props} />
    </SelectableLayer>
  )
}

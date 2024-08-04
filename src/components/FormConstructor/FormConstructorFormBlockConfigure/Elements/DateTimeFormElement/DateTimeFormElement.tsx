import type { FC } from 'react'
import { useState } from 'react'
import { DateTime } from '@consta/uikit/DateTime'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IDataTimeFormElement } from './types'

export const DataTimeFormElement: FC<IDataTimeFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const [timeValue, setTimeValue] = useState<Date>()

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.DataTime}>
      <DateTime
        {...props}
        value={timeValue}
        multiplicityHours={props ? Number(props.multiplicityHours) : undefined}
        multiplicityMinutes={props ? Number(props.multiplicityMinutes) : undefined}
        multiplicitySeconds={props ? Number(props.multiplicitySeconds) : undefined}
        onChange={setTimeValue}
      />
    </SelectableLayer>
  )
}

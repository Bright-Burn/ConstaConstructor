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

  const dataTimeUiLib = props?.uiLibProps
  const className = props?.className
  const styles = props?.styles || {}

  if (!dataTimeUiLib) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.DataTime}>
      <DateTime
        {...dataTimeUiLib}
        style={styles}
        value={timeValue}
        className={className}
        multiplicityHours={props ? Number(dataTimeUiLib.multiplicityHours) : undefined}
        multiplicityMinutes={props ? Number(dataTimeUiLib.multiplicityMinutes) : undefined}
        multiplicitySeconds={props ? Number(dataTimeUiLib.multiplicitySeconds) : undefined}
        onChange={setTimeValue}
      />
    </SelectableLayer>
  )
}

import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { DateTime } from '@consta/uikit/DateTime'

import type { DataTimeProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IDataTimeFormElement } from './types'

export const DataTimeFormElement: FC<IDataTimeFormElement> = ({ element }) => {
  const [dataTimeProps, setDataTimeProps] = useState<DataTimeProps>()
  const [timeValue, setTimeValue] = useState<Date>()

  useLayoutEffect(() => {
    const dataTimeFormElement = element
    setDataTimeProps(dataTimeFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.DataTime}>
      <DateTime
        {...dataTimeProps}
        value={timeValue}
        multiplicityHours={dataTimeProps ? Number(dataTimeProps.multiplicityHours) : undefined}
        multiplicityMinutes={dataTimeProps ? Number(dataTimeProps.multiplicityMinutes) : undefined}
        multiplicitySeconds={dataTimeProps ? Number(dataTimeProps.multiplicitySeconds) : undefined}
        onChange={({ value }) => {
          setTimeValue(value)
        }}
      />
    </SelectableLayer>
  )
}

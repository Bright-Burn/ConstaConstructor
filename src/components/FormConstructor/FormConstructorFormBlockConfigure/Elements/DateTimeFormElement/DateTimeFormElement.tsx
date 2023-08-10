import { FC, useLayoutEffect, useState } from 'react'
import { DateTime } from '@consta/uikit/DateTime'
import { SelectableLayer } from '../../SelectableLayer'
import { IDataTimeFormElement } from './types'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { DataTimeProps } from '../../../coreTypes'

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
        onChange={({ value }) => setTimeValue(value)}
        multiplicityHours={dataTimeProps && Number(dataTimeProps?.multiplicityHours)}
        multiplicityMinutes={dataTimeProps && Number(dataTimeProps?.multiplicityMinutes)}
        multiplicitySeconds={dataTimeProps && Number(dataTimeProps?.multiplicitySeconds)}
      />
    </SelectableLayer>
  )
}

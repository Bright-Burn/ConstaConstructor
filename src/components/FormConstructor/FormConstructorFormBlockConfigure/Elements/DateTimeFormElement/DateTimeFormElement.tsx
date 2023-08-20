import { FC, useLayoutEffect, useState } from 'react'
import { DateTime } from '@consta/uikit/DateTime'
import { SelectableLayer } from '../../SelectableLayer'
import { IDataTimeFormElement } from './types'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { DataTimeProps, IFormElementDataTime } from '../../../coreTypes'

export const DataTimeFormElement: FC<IDataTimeFormElement> = ({ element }) => {
  const [dataTimeProps, setDataTimeProps] = useState<DataTimeProps>()
  const [rangeValue, setRangeValue] = useState<[Date?, Date?]>([])

  useLayoutEffect(() => {
    const dataTimeFormElement = element
    setDataTimeProps(dataTimeFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.DataTime}
    >
      <DateTime
        value={rangeValue}
        onChangeRange={({ value }) => setRangeValue(value)}
        {...dataTimeProps}
        multiplicityHours={dataTimeProps && +dataTimeProps?.multiplicityHours}
        multiplicityMinutes={dataTimeProps && +dataTimeProps?.multiplicityMinutes}
        multiplicitySeconds={dataTimeProps && +dataTimeProps?.multiplicitySeconds}
      />
    </SelectableLayer>
  )
}

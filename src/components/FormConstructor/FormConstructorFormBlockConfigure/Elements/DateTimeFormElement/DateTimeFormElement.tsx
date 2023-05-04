import { FC, useLayoutEffect, useState } from 'react'
import { DateTime } from '@consta/uikit/DateTime'
import { SelectableLayer } from '../../SelectableLayer'
import { IDataTimeFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { DataTimeProps, IFormElementDataTime } from '../../../store/formElements/dataTimeTypes'

export const DataTimeFormElement: FC<IDataTimeFormElement> = ({ element }) => {
  const [dataTimeProps, setDataTimeProps] = useState<DataTimeProps>()
  const [rangeValue, setRangeValue] = useState<[Date?, Date?]>([])

  useLayoutEffect(() => {
    const dataTimeFormElement = element as IFormElementDataTime
    setDataTimeProps(dataTimeFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.DataTime}>
      <DateTime
        value={rangeValue}
        onChangeRange={({ value }) => setRangeValue(value)}
        {...dataTimeProps}
        multiplicityHours={
          dataTimeProps
            ? dataTimeProps?.multiplicityHours
              ? +dataTimeProps?.multiplicityHours
              : 1
            : 1
        }
        multiplicityMinutes={
          dataTimeProps
            ? dataTimeProps?.multiplicityMinutes
              ? +dataTimeProps?.multiplicityMinutes
              : 1
            : 1
        }
        multiplicitySeconds={
          dataTimeProps
            ? dataTimeProps?.multiplicitySeconds
              ? +dataTimeProps?.multiplicitySeconds
              : 1
            : 1
        }
      />
    </SelectableLayer>
  )
}

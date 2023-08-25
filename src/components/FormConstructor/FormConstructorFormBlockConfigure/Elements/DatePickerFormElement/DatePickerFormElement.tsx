import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IDatePickerFormElement } from './types'
import { DatePickerProps } from '../../../coreTypes'
import { DatePicker } from '@consta/uikit/DatePicker'

export const DatePickerFormElement: FC<IDatePickerFormElement> = ({ element }) => {
  const [datePickerProps, setDatePickerProps] = useState<DatePickerProps>()

  useLayoutEffect(() => {
    const datePickerFormElement = element
    setDatePickerProps(datePickerFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.DatePicker}
    >
      <DatePicker {...datePickerProps} />
    </SelectableLayer>
  )
}

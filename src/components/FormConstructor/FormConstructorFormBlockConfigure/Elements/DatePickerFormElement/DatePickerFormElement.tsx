import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IDatePickerFormElement } from './types'
import { DatePickerProps, IFormElementDatePicker } from '../../../coreTypes'
import { DatePicker } from '@consta/uikit/DatePicker'

export const DatePickerFormElement: FC<IDatePickerFormElement> = ({ element }) => {
  const [datePickerProps, setDatePickerProps] = useState<DatePickerProps>()
  console.log(element)

  useLayoutEffect(() => {
    const datePickerFormElement = element as IFormElementDatePicker
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

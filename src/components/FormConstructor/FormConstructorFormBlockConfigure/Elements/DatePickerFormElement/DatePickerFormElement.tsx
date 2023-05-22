import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IDatePickerFormElement } from './types'
import {
  DatePickerProps,
  IFormElementDatePicker,
} from '../../../store/formElements/datePickerTypes'
import { DatePicker } from '@consta/uikit/DatePicker'

export const DatePickerFormElement: FC<IDatePickerFormElement> = ({ element }) => {
  const [datePickerProps, setDatePickerProps] = useState<DatePickerProps>()

  useLayoutEffect(() => {
    const datePickerFormElement = element as IFormElementDatePicker
    setDatePickerProps(datePickerFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.DatePicker}>
      <DatePicker {...datePickerProps} />
    </SelectableLayer>
  )
}


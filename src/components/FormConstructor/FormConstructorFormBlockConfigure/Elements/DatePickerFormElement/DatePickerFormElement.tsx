import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { DatePicker } from '@consta/uikit/DatePicker'

import type { DatePickerProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IDatePickerFormElement } from './types'

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
      elementType={FormElementDictTypes.DatePicker}>
      <DatePicker
        {...datePickerProps}
        renderAdditionalControls={() =>
          datePickerProps?.withAdditionalControls && (
            <>
              <Button label="Кнопка" />
              <Button label="Кнопка" />
            </>
          )
        }
      />
    </SelectableLayer>
  )
}

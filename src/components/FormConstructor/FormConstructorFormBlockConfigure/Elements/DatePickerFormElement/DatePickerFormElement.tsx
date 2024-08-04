import type { FC } from 'react'
import { Button } from '@consta/uikit/Button'
import { DatePicker } from '@consta/uikit/DatePicker'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IDatePickerFormElement } from './types'

export const DatePickerFormElement: FC<IDatePickerFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.DatePicker}>
      <DatePicker
        {...props}
        renderAdditionalControls={() =>
          props?.withAdditionalControls && (
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

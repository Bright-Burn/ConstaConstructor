import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Checkbox } from '@consta/uikit/Checkbox'

import type { CheckboxProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { ICheckboxFormElement } from './types'

export const CheckboxFormElement: FC<ICheckboxFormElement> = ({ element }) => {
  const [checkboxProps, setCheckboxProps] = useState<CheckboxProps>()

  useLayoutEffect(() => {
    const checkboxFormElement = element
    setCheckboxProps(checkboxFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Checkbox}>
      <Checkbox checked={checkboxProps?.checked} {...checkboxProps} />
    </SelectableLayer>
  )
}

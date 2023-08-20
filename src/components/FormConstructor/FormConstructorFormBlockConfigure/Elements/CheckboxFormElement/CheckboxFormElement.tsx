import { FC, useLayoutEffect, useState } from 'react'
import { Checkbox } from '@consta/uikit/Checkbox'
import { SelectableLayer } from '../../SelectableLayer'
import { ICheckboxFormElement } from './types'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { CheckboxProps } from '../../../coreTypes'

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
      elementType={FormElementDictTypes.Checkbox}
    >
      <Checkbox checked={checkboxProps?.checked} {...checkboxProps} />
    </SelectableLayer>
  )
}

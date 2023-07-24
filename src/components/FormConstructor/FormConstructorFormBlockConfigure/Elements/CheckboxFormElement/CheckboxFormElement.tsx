import { FC, useLayoutEffect, useState } from 'react'
import { Checkbox } from '@consta/uikit/Checkbox'
import { SelectableLayer } from '../../SelectableLayer'
import { ICheckboxFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../coreTypes'
import { CheckboxProps, IFormElementCheckbox } from '../../../coreTypes'

export const CheckboxFormElement: FC<ICheckboxFormElement> = ({ element }) => {
  const [checkboxProps, setCheckboxProps] = useState<CheckboxProps>()

  useLayoutEffect(() => {
    const checkboxFormElement = element as IFormElementCheckbox
    setCheckboxProps(checkboxFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Checkbox}
    >
      <Checkbox checked={checkboxProps?.checked} {...checkboxProps} />
    </SelectableLayer>
  )
}

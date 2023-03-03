import { FC, useLayoutEffect, useState } from 'react'
import { Checkbox } from '@consta/uikit/Checkbox'
import { SelectableLayer } from '../../SelectableLayer'
import { ICheckboxFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { CheckboxProps, IFormElementCheckbox} from '../../../store/formElements/checkboxTypes'

export const CheckboxFormElement: FC<ICheckboxFormElement> = ({ formElement }) => {
    const [checkboxProps, setCheckboxProps] = useState<CheckboxProps | undefined>()
  
    useLayoutEffect(() => {
      const checkboxFormElement = formElement as IFormElementCheckbox
      setCheckboxProps(checkboxFormElement.props)
    }, [formElement])
  
    return (
      <SelectableLayer
        parentElementId={formElement.id}
        elementTypeUsage={ElementTypes.FormElement}
        elementType={FormElementTypes.Checkbox}
      >
        <Checkbox checked={checkboxProps?.checked} {...checkboxProps} />
      </SelectableLayer>
    )
  }
  
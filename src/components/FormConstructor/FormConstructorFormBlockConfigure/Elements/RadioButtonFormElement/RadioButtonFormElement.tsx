import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IRadioButtonFormElement } from './types'
import {
  IFormElementRadioButton,
  RadioButtonProps,
} from '../../../store/formElements/radioButtonTypes'
import { Radio } from '@consta/uikit/Radio'

export const RadioButtonFormElement: FC<IRadioButtonFormElement> = ({ element }) => {
  const [radioButtonProps, setRadioButtonProps] = useState<RadioButtonProps>()

  useLayoutEffect(() => {
    const radioButtonFormElement = element as IFormElementRadioButton
    setRadioButtonProps(radioButtonFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.RadioButton}>
      <Radio {...radioButtonProps} />
    </SelectableLayer>
  )
}

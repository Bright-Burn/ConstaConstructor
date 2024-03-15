import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Radio } from '@consta/uikit/Radio'

import type { RadioButtonProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, IFormElementRadioButton } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IRadioButtonFormElement } from './types'

export const RadioButtonFormElement: FC<IRadioButtonFormElement> = ({ element }) => {
  const [radioButtonProps, setRadioButtonProps] = useState<RadioButtonProps>()

  useLayoutEffect(() => {
    const radioButtonFormElement = element
    setRadioButtonProps(radioButtonFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.RadioButton}>
      <Radio {...radioButtonProps} />
    </SelectableLayer>
  )
}

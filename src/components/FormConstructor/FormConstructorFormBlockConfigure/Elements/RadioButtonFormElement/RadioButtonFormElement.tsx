import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IRadioButtonFormElement } from './types'
import { IFormElementRadioButton, RadioButtonProps } from '../../../coreTypes'
import { Radio } from '@consta/uikit/Radio'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'
import { rootId } from '../../../store/formElements/initialState'

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
      <DroppableLocalLayer isLayout={false} parentElementId={element.parentId || rootId}>
        <Radio {...radioButtonProps} />
      </DroppableLocalLayer>
    </SelectableLayer>
  )
}

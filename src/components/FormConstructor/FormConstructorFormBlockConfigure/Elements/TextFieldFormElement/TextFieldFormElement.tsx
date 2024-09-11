import type { FC } from 'react'
import { TextField } from '@consta/uikit/TextField'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { getIsFilledClassName } from '../../../utils'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITextFieldFormElement } from './types'

export const TextFieldFormElement: FC<ITextFieldFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  //логика для заполнения элемента
  const isFilled = props?.filled || false

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.TextField}
      className={getIsFilledClassName(isFilled)}>
      <TextField style={{ width: '100%' }} {...props} />
    </SelectableLayer>
  )
}

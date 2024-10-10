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
  const isFilled = props?.styles.filled || false

  const uiLibProps = props?.uiLibProps
  const className = props?.className

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.TextField}
      className={getIsFilledClassName(isFilled)}>
      <TextField className={className} {...uiLibProps} style={{ flexGrow: isFilled ? 1 : 0 }} />
    </SelectableLayer>
  )
}

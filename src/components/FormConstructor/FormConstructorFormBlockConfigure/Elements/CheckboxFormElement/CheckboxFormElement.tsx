import { FC, useLayoutEffect, useState } from 'react'
import { Checkbox } from '@consta/uikit/Checkbox'
import { SelectableLayer } from '../../SelectableLayer'
import { ICheckboxFormElement } from './types'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { CheckboxProps } from '../../../coreTypes'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'
import { rootId } from '../../../store/formElements/initialState'

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
      <DroppableLocalLayer
        isLayout={false}
        parentElementId={element.parentId || rootId}
        elemId={element.id}>
        <Checkbox checked={checkboxProps?.checked} {...checkboxProps} />
      </DroppableLocalLayer>
    </SelectableLayer>
  )
}

import React, { FC, useLayoutEffect, useState } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { ISelectFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { Select } from '@consta/uikit/Select'
import { IFormElementSelect, SelectProps } from '../../../store/formElements/selectTypes'

export const SelectFormElement: FC<ISelectFormElement> = ({ element }) => {
  const [SelectProps, setSelectProps] = useState<SelectProps>({
    className: '',
    baseProps: {},
    items: [
      {
        label: 'Первый',
        id: 1,
      },
      {
        label: 'Второй',
        id: 2,
      },
      {
        label: 'Третий',
        id: 3,
      },
    ],
    onChange: () => {},
    content: 'Text',
  })

  useLayoutEffect(() => {
    const SelectFormElementWithProps = element as IFormElementSelect
    setSelectProps(SelectFormElementWithProps.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Select}>
      <Select style={{ width: '400px' }} {...SelectProps} />
    </SelectableLayer>
  )
}

import React, { FC, useLayoutEffect, useState } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { ISelectFormElement } from './types'
import { ElementTypes, FormElementDictTypes, SelectProps } from '../../../coreTypes'
import { Select } from '@consta/uikit/Select'
import style from './style.module.css'

export const SelectFormElement: FC<ISelectFormElement> = ({ element }) => {
  const [selectProps, setSelectProps] = useState<SelectProps>({
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
    const selectFormElementWithProps = element
    setSelectProps(selectFormElementWithProps.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      className={style.Select}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Select}
    >
      <Select {...selectProps} />
    </SelectableLayer>
  )
}

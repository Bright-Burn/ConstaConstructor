import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IComboBoxFormElement } from './types'
import { ComboboxProps, IFormElementComboBox } from '../../../store/formElements/comboBoxTypes'
import { Combobox } from '@consta/uikit/Combobox'

export const ComboBoxFormElement: FC<IComboBoxFormElement> = ({ element }) => {
  const [textProps, setTextProps] = useState<ComboboxProps>({
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
  })

  useLayoutEffect(() => {
    const textFormElement = element as IFormElementComboBox
    setTextProps(textFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.ComboBox}>
      <Combobox style={{ width: 400 }} {...textProps} />
    </SelectableLayer>
  )
}

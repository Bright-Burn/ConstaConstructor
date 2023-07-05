import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IComboBoxFormElement } from './types'
import { ComboboxProps, IFormElementComboBox } from '../../../store/formElements/comboBoxTypes'
import { Combobox } from '@consta/uikit/Combobox'
import style from './style.module.css'

export const ComboBoxFormElement: FC<IComboBoxFormElement> = ({ element }) => {
  const [comboboxProps, setComboboxProps] = useState<ComboboxProps>({
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
    const comboBoxFormElement = element as IFormElementComboBox
    setComboboxProps(comboBoxFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      className={style.ComboBox}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.ComboBox}
    >
      <Combobox {...comboboxProps} />
    </SelectableLayer>
  )
}

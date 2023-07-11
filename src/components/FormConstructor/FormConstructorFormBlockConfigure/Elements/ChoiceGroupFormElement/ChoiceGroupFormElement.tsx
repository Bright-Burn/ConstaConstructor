import { FC } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IChoiceGroupFormElement } from './types'
import style from './style.module.css'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import {
  MultipleChoiceGroupProps,
  SingleChoiceGroupProps,
} from '../../../store/formElements/ChoiceGroupTypes'

export const ChoiceGroupFormElement: FC<IChoiceGroupFormElement> = ({ element }) => {
  const checkMultiple = (
    props: SingleChoiceGroupProps | MultipleChoiceGroupProps,
  ): props is MultipleChoiceGroupProps => Array.isArray(props.value)

  const props = element.props as SingleChoiceGroupProps | MultipleChoiceGroupProps
  return (
    <SelectableLayer
      parentElementId={element.id}
      className={style.ComboBox}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.ChoiceGroup}>
      {checkMultiple(props) ? <ChoiceGroup {...props} /> : <ChoiceGroup {...props} />}
    </SelectableLayer>
  )
}

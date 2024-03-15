import type { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'

import type {
  MultipleChoiceGroupProps,
  OwnChoiceGroupProps,
  SingleChoiceGroupProps,
} from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import type { BrandProps } from '../../../coreTypes/types'
import { SelectableLayer } from '../../SelectableLayer'

import type { IChoiceGroupFormElement } from './types'

import style from './style.module.css'

export const ChoiceGroupFormElement: FC<IChoiceGroupFormElement> = ({ element }) => {
  const checkMultiple = (
    props: SingleChoiceGroupProps | MultipleChoiceGroupProps,
  ): props is MultipleChoiceGroupProps => Array.isArray(props.value)

  const props = { ...element.props } as BrandProps<OwnChoiceGroupProps, 'ChoiceGroup'>
  return (
    <SelectableLayer
      parentElementId={element.id}
      className={style.ComboBox}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.ChoiceGroup}>
      {checkMultiple(props.props) ? (
        <ChoiceGroup {...props.props} getItemLabel={item => item.label} />
      ) : (
        <ChoiceGroup {...props.props} getItemLabel={item => item.label} />
      )}
    </SelectableLayer>
  )
}

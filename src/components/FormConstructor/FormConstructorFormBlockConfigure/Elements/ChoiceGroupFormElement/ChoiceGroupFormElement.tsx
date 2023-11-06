import { FC } from 'react'
import {
  ElementTypes,
  FormElementDictTypes,
  MultipleChoiceGroupProps,
  OwnChoiceGroupProps,
  SingleChoiceGroupProps,
} from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IChoiceGroupFormElement } from './types'
import style from './style.module.css'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { BrandProps } from '../../../coreTypes/types'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'
import { rootId } from '../../../store/formElements/initialState'

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
        <DroppableLocalLayer
          isLayout={false}
          parentElementId={element.parentId || rootId}
          elemId={element.id}>
          <ChoiceGroup {...props.props} />
        </DroppableLocalLayer>
      ) : (
        <DroppableLocalLayer
          isLayout={false}
          parentElementId={element.parentId || rootId}
          elemId={element.id}>
          <ChoiceGroup {...props.props} />
        </DroppableLocalLayer>
      )}
    </SelectableLayer>
  )
}

import type { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'

import type { MultipleChoiceGroupProps, SingleChoiceGroupProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IChoiceGroupFormElement } from './types'

export const ChoiceGroupFormElement: FC<IChoiceGroupFormElement> = ({ element }) => {
  const checkMultiple = (
    props: SingleChoiceGroupProps | MultipleChoiceGroupProps,
  ): props is MultipleChoiceGroupProps => Array.isArray(props.value)

  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return props ? (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.ChoiceGroup}>
      {checkMultiple(props) ? (
        <ChoiceGroup
          {...props}
          items={props.items}
          name={props.name}
          value={props.value}
          getItemIcon={item => (item.labelIcon ? Icons[item.labelIcon] : undefined)}
          getItemLabel={item => item.label}
        />
      ) : (
        <ChoiceGroup
          {...props}
          getItemIcon={item => (item.labelIcon ? Icons[item.labelIcon] : undefined)}
        />
      )}
    </SelectableLayer>
  ) : null
}

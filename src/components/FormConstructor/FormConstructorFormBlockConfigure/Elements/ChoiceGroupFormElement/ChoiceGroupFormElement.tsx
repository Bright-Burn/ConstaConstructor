import type { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'

import type { MultipleChoiceGroupProps, SingleChoiceGroupProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IChoiceGroupFormElement } from './types'

export const ChoiceGroupFormElement: FC<IChoiceGroupFormElement> = ({ element }) => {
  const checkMultiple = (
    props: SingleChoiceGroupProps | MultipleChoiceGroupProps,
  ): props is MultipleChoiceGroupProps => Array.isArray(props.value)

  const props = { ...element.props }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.ChoiceGroup}>
      {checkMultiple(props.props) ? (
        <ChoiceGroup
          {...props.props}
          items={props.props.items}
          name={props.props.name}
          value={props.props.value}
          getItemIcon={item => (item.labelIcon ? Icons[item.labelIcon] : undefined)}
          getItemLabel={item => item.label}
        />
      ) : (
        <ChoiceGroup
          {...props.props}
          getItemIcon={item => (item.labelIcon ? Icons[item.labelIcon] : undefined)}
        />
      )}
    </SelectableLayer>
  )
}

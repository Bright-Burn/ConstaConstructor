import type { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'

import type { MultipleChoiceGroupProps, SingleChoiceGroupProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IChoiceGroupFormElement } from './types'

export const ChoiceGroupFormElement: FC<IChoiceGroupFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const uiLibProps = props?.uiLibProps
  const styles = props?.styles

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.ChoiceGroup}>
      {checkMultiple(uiLibProps) ? (
        <ChoiceGroup
          {...uiLibProps}
          className={props.className}
          getItemIcon={item => (item.labelIcon ? Icons[item.labelIcon] : undefined)}
          getItemLabel={item => item.label}
          style={styles}
        />
      ) : (
        <ChoiceGroup
          {...uiLibProps}
          className={props.className}
          getItemIcon={item => (item.labelIcon ? Icons[item.labelIcon] : undefined)}
          getItemLabel={item => item.label}
          style={styles}
        />
      )}
    </SelectableLayer>
  )
}

const checkMultiple = (
  props: SingleChoiceGroupProps | MultipleChoiceGroupProps,
): props is MultipleChoiceGroupProps => props.multiple === true

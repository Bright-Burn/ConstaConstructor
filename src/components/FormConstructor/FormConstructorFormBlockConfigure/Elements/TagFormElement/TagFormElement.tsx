import type { FC } from 'react'
import { useState } from 'react'
import { Tag } from '@consta/uikit/Tag'

import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { ITagFormElement } from './types'

export const TagFormElement: FC<ITagFormElement> = ({ element }) => {
  const [checked, setChecked] = useState<boolean>(false)
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  function getTag() {
    if (props) {
      switch (props.mode) {
        case 'check':
          return (
            <Tag
              mode={props.mode}
              label={props.label || ''}
              size={props.size}
              checked={checked}
              group={props.group}
              icon={props.icon ? Icons[props.icon] : undefined}
              className={props.className}
              onChange={setChecked}
            />
          )
        case 'cancel':
          return (
            <Tag
              mode={props.mode}
              label={props.label || ''}
              size={props.size}
              group={props.group}
              icon={props.icon ? Icons[props.icon] : undefined}
              className={props.className}
              onCancel={() => null}
            />
          )
        case 'button':
          return (
            <Tag
              mode={props.mode}
              label={props.label || ''}
              size={props.size}
              group={props.group}
              icon={props.icon ? Icons[props.icon] : undefined}
              className={props.className}
              onClick={() => null}
            />
          )
        case 'link':
          return (
            <Tag
              mode={props.mode}
              href="#"
              label={props.label || ''}
              size={props.size}
              group={props.group}
              icon={props.icon ? Icons[props.icon] : undefined}
              className={props.className}
            />
          )
        case 'info':
          return (
            <Tag
              mode={props.mode}
              label={props.label || ''}
              size={props.size}
              group={props.group}
              icon={props.icon ? Icons[props.icon] : undefined}
              className={props.className}
            />
          )
      }
    }
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Tag}>
      {getTag()}
    </SelectableLayer>
  )
}

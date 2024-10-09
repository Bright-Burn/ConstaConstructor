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

  const uiLibProps = props?.uiLibProps
  const className = props?.className

  if (!uiLibProps) {
    return null
  }

  function getTag() {
    if (!uiLibProps) {
      return null
    }
    switch (uiLibProps.mode) {
      case 'check':
        return (
          <Tag
            mode="check"
            label={uiLibProps.label || ''}
            size={uiLibProps.size}
            checked={checked}
            group={uiLibProps.group}
            icon={uiLibProps.icon ? Icons[uiLibProps.icon] : undefined}
            className={className}
            onChange={setChecked}
          />
        )
      case 'cancel':
        return (
          <Tag
            mode="cancel"
            label={uiLibProps.label || ''}
            size={uiLibProps.size}
            group={uiLibProps.group}
            icon={uiLibProps.icon ? Icons[uiLibProps.icon] : undefined}
            className={className}
            onCancel={() => null}
          />
        )
      case 'button':
        return (
          <Tag
            mode="button"
            label={uiLibProps.label || ''}
            size={uiLibProps.size}
            group={uiLibProps.group}
            icon={uiLibProps.icon ? Icons[uiLibProps.icon] : undefined}
            className={className}
            onClick={() => null}
          />
        )
      case 'link':
        return (
          <Tag
            mode="link"
            href="#"
            label={uiLibProps.label || ''}
            size={uiLibProps.size}
            group={uiLibProps.group}
            icon={uiLibProps.icon ? Icons[uiLibProps.icon] : undefined}
            className={className}
          />
        )
      case 'info':
        return (
          <Tag
            mode="info"
            label={uiLibProps.label || ''}
            size={uiLibProps.size}
            group={uiLibProps.group}
            icon={uiLibProps.icon ? Icons[uiLibProps.icon] : undefined}
            className={className}
          />
        )
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

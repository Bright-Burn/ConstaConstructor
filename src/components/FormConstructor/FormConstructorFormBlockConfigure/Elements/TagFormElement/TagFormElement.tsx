import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Tag } from '@consta/uikit/Tag'

import type { TagProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { Icons } from '../IconFormElement/mocks'

import type { ITagFormElement } from './types'

import style from './style.module.css'

export const TagFormElement: FC<ITagFormElement> = ({ element }) => {
  const [checked, setChecked] = useState<boolean>(false)
  const [tagProps, setTagPropsProps] = useState<TagProps>({
    label: 'Рисунок',
    className: '',
    baseProps: {},
    mode: 'link',
    checked: false,
  })

  useLayoutEffect(() => {
    const tagFormElement = element
    setTagPropsProps(tagFormElement.props.props)
  }, [element])

  function getTag() {
    switch (tagProps.mode) {
      case 'check':
        return (
          <Tag
            mode={tagProps.mode}
            label={tagProps.label || ''}
            size={tagProps.size}
            checked={checked}
            group={tagProps.group}
            icon={!!tagProps.icon && Icons[tagProps.icon]}
            className={tagProps.className}
            onChange={({ checked }) => {
              setChecked(checked)
            }}
          />
        )
      case 'cancel':
        return (
          <Tag
            mode={tagProps.mode}
            label={tagProps.label || ''}
            size={tagProps.size}
            group={tagProps.group}
            icon={!!tagProps.icon && Icons[tagProps.icon]}
            className={tagProps.className}
            onCancel={() => null}
          />
        )
      case 'button':
        return (
          <Tag
            mode={tagProps.mode}
            label={tagProps.label || ''}
            size={tagProps.size}
            group={tagProps.group}
            icon={!!tagProps.icon && Icons[tagProps.icon]}
            className={tagProps.className}
            onClick={() => null}
          />
        )
      case 'link':
        return (
          <Tag
            mode={tagProps.mode}
            href="#"
            label={tagProps.label || ''}
            size={tagProps.size}
            group={tagProps.group}
            icon={!!tagProps.icon && Icons[tagProps.icon]}
            className={tagProps.className}
          />
        )
      case 'info':
        return (
          <Tag
            mode={tagProps.mode}
            label={tagProps.label || ''}
            size={tagProps.size}
            group={tagProps.group}
            icon={!!tagProps.icon && Icons[tagProps.icon]}
            className={tagProps.className}
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

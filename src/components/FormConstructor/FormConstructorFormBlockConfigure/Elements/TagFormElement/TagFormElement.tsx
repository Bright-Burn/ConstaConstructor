import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { ITagFormElement } from './types'
import style from './style.module.css'
import { IFormElementTagProps, TagProps } from '../../../store/formElements/tagTypes'
import { Tag } from '@consta/uikit/Tag'
import { Icons } from '../IconFormElement/mocks'

export const TagFormElement: FC<ITagFormElement> = ({ element }) => {
  const [checked, setChecked] = useState<boolean>(false)
  const [tagProps, setTagPropsProps] = useState<TagProps>({
    label: 'Рисунок',
    className: '',
    baseProps: {},
    onChange: () => {},
    mode: 'link',
    checked: false,
  })

  useLayoutEffect(() => {
    const tagFormElement = element as IFormElementTagProps
    setTagPropsProps(tagFormElement.props)
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
            onChange={({ checked }) => setChecked(checked)}
            group={tagProps.group}
            icon={tagProps.Icon ? tagProps.icon && Icons[tagProps.icon] : undefined}
            className={tagProps.className}
          />
        )
      case 'cancel':
        return (
          <Tag
            mode={tagProps.mode}
            label={tagProps.label || ''}
            size={tagProps.size}
            onCancel={() => null}
            group={tagProps.group}
            icon={tagProps.Icon ? tagProps.icon && Icons[tagProps.icon] : undefined}
            className={tagProps.className}
          />
        )
      case 'button':
        return (
          <Tag
            mode={tagProps.mode}
            label={tagProps.label || ''}
            size={tagProps.size}
            onClick={() => null}
            group={tagProps.group}
            icon={tagProps.Icon ? tagProps.icon && Icons[tagProps.icon] : undefined}
            className={tagProps.className}
          />
        )
      case 'link':
        return (
          <Tag
            mode={tagProps.mode}
            href='#'
            label={tagProps.label || ''}
            size={tagProps.size}
            group={tagProps.group}
            icon={tagProps.Icon ? tagProps.icon && Icons[tagProps.icon] : undefined}
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
            icon={tagProps.Icon ? tagProps.icon && Icons[tagProps.icon] : undefined}
            className={tagProps.className}
          />
        )
    }
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Tag}>
      {getTag()}
    </SelectableLayer>
  )
}

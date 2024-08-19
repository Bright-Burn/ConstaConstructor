import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { cn } from '@bem-react/classname'
import { Select } from '@consta/uikit/Select'
import { Text } from '@consta/uikit/Text'

import type { ConstaColor, IConstaPalette } from './types'

import css from './styles.module.css'

export const ConstaPalette: FC<IConstaPalette> = ({
  color,
  onChangeColor,
  size,
  colorsToSelect,
  placeholder,
}) => {
  const [colorPreview, setColorPreview] = useState<ConstaColor | undefined>()

  useEffect(() => {
    setColorPreview(color)
  }, [color])

  const getItemKey = (item: ConstaColor) => {
    return item
  }

  const onMouseLeave = () => {
    setColorPreview(color)
  }

  const cnSelectExampleRenderItem = cn('ListItem')

  return (
    <div className={css.constaPalette}>
      <Select
        getItemKey={getItemKey}
        size={size}
        getItemLabel={getItemKey}
        items={colorsToSelect}
        value={color || 'Null'}
        renderValue={({ item }) => (
          <div className={css.rowSettings}>
            {placeholder ? (
              <Text size="xs" view="secondary">
                {placeholder}
              </Text>
            ) : null}
            <Text size="xs">{item}</Text>
          </div>
        )}
        renderItem={({ item, active, hovered, onClick, onMouseEnter }) => {
          const onCustomMouseEnter = (e: React.SyntheticEvent) => {
            setColorPreview(item)
            onMouseEnter(e)
          }
          return (
            <div
              className={cnSelectExampleRenderItem('', { active, hovered })}
              role="option"
              aria-selected={active}
              onMouseEnter={onCustomMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={onClick}>
              {item}
            </div>
          )
        }}
        onChange={value => {
          value && onChangeColor(value)
        }}
      />
      <div
        style={{
          borderRadius: '0.5rem',
          marginLeft: '0.4rem',
          width: `var(--control-height-${size})`,
          height: `var(--control-height-${size})`,
          background: `var(--${colorPreview})`,
        }}
      />
    </div>
  )
}

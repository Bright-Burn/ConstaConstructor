import { FC, useEffect, useState } from 'react'
import { ConstaColor, IConstaPalette } from './types'
import css from './styles.module.css'
import { Select } from '@consta/uikit/Select'
import { cn } from '@bem-react/classname'

export const ConstaPalette: FC<IConstaPalette> = ({
  color,
  onChangeColor,
  size,
  colorsToSelect,
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
        label='Color'
        size={size}
        getItemLabel={getItemKey}
        items={colorsToSelect}
        value={color}
        renderItem={({ item, active, hovered, onClick, onMouseEnter }) => {
          const onCustomMouseEnter = (e: React.SyntheticEvent) => {
            setColorPreview(item)
            return onMouseEnter(e)
          }
          return (
            <div
              className={cnSelectExampleRenderItem('', { active, hovered })}
              role='option'
              aria-selected={active}
              onMouseEnter={onCustomMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={onClick}>
              {item}
            </div>
          )
        }}
        onChange={({ value }) => {
          value && onChangeColor(value)
        }}
      />
      <div
        style={{
          borderRadius: '0.5rem',
          marginTop: `calc(var(--control-height-${size}) - 8px)`,
          marginLeft: `0.4rem`,
          width: `var(--control-height-${size})`,
          height: `var(--control-height-${size})`,
          background: `var(--${colorPreview})`,
        }}
      />
    </div>
  )
}


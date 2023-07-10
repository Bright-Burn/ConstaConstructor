import { FC, useState } from 'react'
import { ConstaColor, ConstaColors, IConstaPalette } from './types'
import css from './styles.module.css'
import { Select } from '@consta/uikit/Select'

const selectItems: ConstaColor[] = [...ConstaColors]

export const ConstaPalette: FC<IConstaPalette> = ({ color, onChangeColor, size }) => {
  const [colorPreview, setColorPreview] = useState<ConstaColor>(color)

  const getItemKey = (item: ConstaColor) => {
    return item
  }

  const onMouseLeave = () => {
    setColorPreview(color)
  }

  const getItemClass = (hovered: boolean, active: boolean) => {
    if (active) {
      return css.itemActive
    } else if (hovered) {
      return css.itemHovered
    } else {
      return ''
    }
  }

  return (
    <div className={css.constaPalette}>
      <Select
        getItemKey={getItemKey}
        label='Color'
        size={size}
        getItemLabel={getItemKey}
        items={selectItems}
        value={color}
        renderItem={({ item, active, onClick, hovered, onMouseEnter }) => {
          const onCustomMouseEnter = (e: React.SyntheticEvent) => {
            setColorPreview(item)
            return onMouseEnter(e)
          }
          return (
            <div
              className={getItemClass(hovered, active)}
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
          marginTop: `calc(var(--control-height-${size}) - 8px)`,
          marginLeft: `0.4rem`,
          width: `var(--control-height-${size})`,
          height: `var(--control-height-${size})`,
          background: `var(--${colorPreview})`,
        }}></div>
    </div>
  )
}


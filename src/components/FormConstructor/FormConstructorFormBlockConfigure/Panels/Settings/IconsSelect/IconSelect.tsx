import React, { useState } from 'react'

import type { IconNames } from '../../../../coreTypes'
import { icons, IconsGroup } from '../../../../coreTypes'

import styles from './styles.module.css'
type IconSelectProps = {
  itemsProps?: IconNames
  disabled?: boolean
  onChangeIcon: (icon: IconNames) => void
}
export const IconSelect: React.FC<IconSelectProps> = ({
  onChangeIcon,
  itemsProps,
  disabled = true,
}) => {
  const [group, setGroup] = useState<keyof typeof IconsGroup>('ActionIcon')
  return (
    <div className={styles.select_container}>
      <select
        disabled={!disabled}
        className={styles.select_option}
        onChange={e => {
          if (isGroup(e.target.value)) setGroup(e.target.value)
        }}>
        {Object.keys(IconsGroup).map(iconGroup => {
          return (
            <option key={iconGroup} value={iconGroup} selected={group === iconGroup}>
              {iconGroup}
            </option>
          )
        })}
      </select>
      <select
        disabled={!disabled}
        className={styles.select_option}
        onChange={e => {
          if (isIcon(e.target.value)) onChangeIcon(e.target.value)
        }}>
        <option disabled={true} selected={isCorrectIconSelectedFromGroup(group, itemsProps)}>
          {' '}
          -- select Icon --
        </option>
        {IconsGroup[group].map(item => (
          <option key={item} value={item} selected={item === itemsProps}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
const isIcon = (item: string): item is IconNames => {
  return icons.includes(item)
}
const isGroup = (item: string): item is keyof typeof IconsGroup => {
  return Object.keys(IconsGroup).includes(item)
}
const isCorrectIconSelectedFromGroup = (
  group: keyof typeof IconsGroup,
  icon: IconNames | undefined,
) => {
  if (!icon) return true
  else if (!IconsGroup[group].includes(icon)) return true
  return false
}

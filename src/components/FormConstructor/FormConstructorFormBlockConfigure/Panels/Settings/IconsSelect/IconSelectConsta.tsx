import React, { useEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Text } from '@consta/uikit/Text'

import type { IconNames } from '../../../../coreTypes'
import { Icons, IconsGroup } from '../../../../coreTypes'
import { getValueForSelect } from '../LabelForSelectComponent'

import styles from './styles.module.css'
type Item = {
  label: string
  id: number
  groupId: number
}

type Group = {
  label: string
  id: number
}

type IconSelectProps = {
  selectedIcon?: IconNames
  disabled?: boolean
  onChangeIcon: (icon: IconNames) => void
  label: string
}
export const IconSelectConsta: React.FC<IconSelectProps> = ({
  onChangeIcon,
  selectedIcon,
  disabled,
  label,
}) => {
  const [items, setItems] = useState<Item[]>([])
  const [groups, setGroups] = useState<Group[]>([])
  const [value, setValue] = useState<Item | undefined>()
  useEffect(() => {
    const groups: Group[] = []
    const items: Item[] = []
    let selectedItem: Item | undefined
    Object.keys(IconsGroup).forEach((group, groupIdx) => {
      groups.push({
        label: group,
        id: groupIdx,
      })
      IconsGroup[group].forEach((icon, idx) => {
        if (icon === selectedIcon) {
          selectedItem = {
            label: icon,
            id: idx,
            groupId: groupIdx,
          }
        }
        items.push({
          label: icon,
          id: idx,
          groupId: groupIdx,
        })
      })
    })
    if (selectedItem) setValue(selectedItem)
    setItems(items)
    setGroups(groups)
  }, [])
  const onChange = (value: Item | null) => {
    if (value) {
      onChangeIcon(value.label)
      setValue(value)
    }
  }
  return (
    <Select
      placeholder="Выберите значение"
      items={items}
      size="xs"
      disabled={disabled}
      value={value} // itemsProps}
      groups={groups}
      renderItem={({ item, active, onClick, onMouseEnter }) => (
        <div
          className={styles.icon}
          role="option"
          aria-selected={active}
          onMouseEnter={onMouseEnter}
          onClick={onClick}>
          {React.createElement(Icons[item.label], { size: 'xs' })}
          <Text size="xs">{item.label}</Text>
        </div>
      )}
      renderValue={({ item }) => getValueForSelect({ item: item.label, label })}
      onChange={onChange}
    />
  )
}

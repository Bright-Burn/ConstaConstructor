import React, { useEffect, useState } from 'react'
import { Combobox } from '@consta/uikit/Combobox'
import { Select } from '@consta/uikit/Select'
import { Text } from '@consta/uikit/Text'

import type { IconNames } from '../../../../coreTypes'
import { Icons, IconsGroup } from '../../../../coreTypes'
import { getValueForSelect } from '../LabelForSelectComponent'

import styles from './styles.module.css'

type IconSelectProps = {
  selectedIcon?: IconNames
  disabled?: boolean
  onChangeIcon: (icon: IconNames | null) => void
  label: string
}
const iconGroups: string[] = []
Object.keys(IconsGroup).forEach(iconGroup => {
  iconGroups.push(iconGroup)
})
export const IconSelectConsta: React.FC<IconSelectProps> = ({
  onChangeIcon,
  selectedIcon,
  disabled = true,
  label,
}) => {
  const [icons, setIcons] = useState<string[]>([])
  const [group, setGroups] = useState<string>('ActionIcon')
  useEffect(() => {
    const items: string[] = []
    IconsGroup[group].forEach(item => {
      items.push(item)
    })
    setIcons(items)
  }, [group])
  const onChangeGroup = (value: string | null) => {
    value && setGroups(value)
  }
  const onChange = (value: IconNames | null) => {
    onChangeIcon(value)
  }
  return (
    <div className={styles.select_container}>
      <Select
        placeholder="group"
        items={iconGroups}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        size="xs"
        disabled={!disabled}
        value={group}
        renderValue={({ item }) => getValueForSelect({ item, label: 'group' })}
        onChange={onChangeGroup}
      />
      <Combobox
        placeholder="icon"
        items={icons}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        size="xs"
        disabled={!disabled}
        value={selectedIcon}
        renderItem={({ item, active, onClick, onMouseEnter }) => (
          <div
            className={styles.icon}
            role="option"
            aria-selected={active}
            onMouseEnter={onMouseEnter}
            onClick={onClick}>
            {React.createElement(Icons[item], { size: 'xs', view: 'primary' })}
            <Text size="xs" view="primary" className="m-l-xs">
              {item}
            </Text>
          </div>
        )}
        renderValue={({ item }) => getValueForSelect({ item, label })}
        onChange={onChange}
      />
    </div>
  )
}

import type { FC } from 'react'
import React, { useState } from 'react'
import type { IconComponent } from '@consta/icons/Icon'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type {
  BreadcrumbProps,
  BreadcrumbsFormElement,
  DeepWriteable,
  IconNames,
} from '../../../../coreTypes'
import { Icons, icons } from '../../../../coreTypes'

import { fitMode, sizes } from './BreadcrumbsConstants'
import { useItemsHandlers } from './ItemsService'

import styles from './styles.module.css'

type BreadcrumbSettingsType = {
  selectedElementProps: DeepWriteable<BreadcrumbProps>
  selectedElement: BreadcrumbsFormElement
}

export const BreadcrumbsSettings: FC<BreadcrumbSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeItems,
    onChangeSize,
    onChangeFitMode,
    onChangeLastItemLink,
  } = useItemsHandlers(selectedElementProps, selectedElement)

  const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0)

  const pageLabels = itemsProps.items.map(item => {
    return item.label
  })

  const onPageLabelEdit = (value: string | null, index: number) => {
    const newPage = [...itemsProps.items]
    if (!value) newPage[index] = { ...newPage[index], label: '' }
    else newPage[index] = { ...newPage[index], label: value }
    onChangeItems(newPage)
  }

  // TODO убрать когда избавимся от DeepWriteable
  const iconComponentToDeepWriteable = (x: IconComponent) => x as DeepWriteable<IconComponent>

  const checkValueIsIconNames = (value: string): value is IconNames => {
    return value in Icons
  }

  const onPageIconEditLeft = (value: string | null, index: number) => {
    const newPage = [...itemsProps.items]
    if (value !== null && checkValueIsIconNames(value)) {
      newPage[index] = {
        ...newPage[index],
        labelIcon: value,
        icon: iconComponentToDeepWriteable(Icons[value]),
      }
    }
    onChangeItems(newPage)
  }

  return (
    <div className={styles.BreadcrumbsSettings}>
      <div className={styles.rowSettings}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={sizes}
          size="xs"
          placeholder="size"
          value={itemsProps.size}
          renderValue={({ item }) => (
            <div className={styles.selectRenderValue}>
              <Text view="ghost" className="p-r-xs">
                Size
              </Text>
              {item}
            </div>
          )}
          onChange={value => {
            onChangeSize(value)
          }}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={fitMode}
          placeholder="Fit mode"
          size="xs"
          value={itemsProps.fitMode}
          renderValue={({ item }) => (
            <div className={styles.selectRenderValue}>
              <Text view="ghost" className="p-r-xs">
                Fit mode
              </Text>
              {item}
            </div>
          )}
          onChange={value => {
            onChangeFitMode(value)
          }}
        />
      </div>
      <Switch
        size="xs"
        label="Last item link"
        checked={itemsProps.lastItemIsLink}
        onChange={event => {
          onChangeLastItemLink(event.target.checked)
        }}
      />
      <TextField
        type="number"
        size="xs"
        value={`${itemsProps.items.length}`}
        leftSide="Amount"
        onChange={onChangeItemsCount}
      />
      <Select
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={pageLabels}
        placeholder="Selected"
        size="xs"
        value={itemsProps.items[selectedPageIndex]?.label}
        renderValue={({ item }) => (
          <div className={styles.selectRenderValue}>
            <Text view="ghost" className="p-r-xs">
              Selected
            </Text>
            {item}
          </div>
        )}
        onChange={value => {
          setSelectedPageIndex(itemsProps.items.findIndex(i => i.label === value))
        }}
      />
      <TextField
        size="xs"
        value={itemsProps.items[selectedPageIndex]?.label}
        leftSide="Name"
        onChange={value => {
          onPageLabelEdit(value, selectedPageIndex)
        }}
      />
      <Select
        className={styles.iconAlign}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={icons}
        size="xs"
        placeholder="Icon"
        value={itemsProps.items[selectedPageIndex]?.labelIcon}
        renderValue={({ item }) => (
          <div className={styles.selectRenderValue}>
            <Text view="ghost" className="p-r-xs">
              Icon
            </Text>
            {item}
          </div>
        )}
        renderItem={({ item, active, onClick, onMouseEnter }) => (
          <div
            className={styles.icon}
            role="option"
            aria-selected={active}
            onMouseEnter={onMouseEnter}
            onClick={onClick}>
            {checkValueIsIconNames(item) && React.createElement(Icons[item], { size: 'xs' })}
            <Text size="xs">{item}</Text>
          </div>
        )}
        onChange={value => {
          onPageIconEditLeft(value, selectedPageIndex)
        }}
      />
    </div>
  )
}

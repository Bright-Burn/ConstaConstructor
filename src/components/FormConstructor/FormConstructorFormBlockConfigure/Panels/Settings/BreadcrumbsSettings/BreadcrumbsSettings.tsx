import type { FC } from 'react'
import { useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { BreadcrumbProps, BreadcrumbsFormElement, IconNames } from '../../../../coreTypes'
import { Icons } from '../../../../coreTypes'

import { fitMode, sizes } from './BreadcrumbsConstants'
import { useItemsHandlers } from './ItemsService'

import styles from './styles.module.css'
import { IconSelectConsta } from '../IconsSelect'

type BreadcrumbSettingsType = {
  selectedViewProps: BreadcrumbProps
  selectedView: BreadcrumbsFormElement
}

export const BreadcrumbsSettings: FC<BreadcrumbSettingsType> = ({
  selectedViewProps,
  selectedView,
}) => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeItems,
    onChangeSize,
    onChangeFitMode,
    onChangeLastItemLink,
    onChangeIcon,
  } = useItemsHandlers(selectedViewProps, selectedView)

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
      <IconSelectConsta
        selectedIcon={itemsProps.icon}
        label="iconRight"
        onChangeIcon={onChangeIcon}
      />
    </div>
  )
}

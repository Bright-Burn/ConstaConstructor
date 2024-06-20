import type { FC } from 'react'
import React, { useState } from 'react'
import { Collapse } from '@consta/uikit/Collapse'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { IconNames, TabsElement, TabsElementProps } from '../../../../coreTypes'
import { Icons } from '../../../../coreTypes'
import { IconSelect } from '../IconsSelect'

import { useItemsHandlers } from './ItemsService'
import { linePositionArray, sizeArray } from './types'

import style from './styles.module.css'

type TabsSettingsType = {
  selectedElementProps: TabsElementProps
  selectedElement: TabsElement
}

export const TabsSettings: FC<TabsSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeActiveItem,
    onChangeItems,
    onChangeLinePosition,
    onChangeSize,
    onChangeSwitch,
  } = useItemsHandlers(selectedElementProps, selectedElement)
  const [isOpen, setOpen] = useState<boolean>(false)

  const onTabLabelEdit = (value: string | null, index: number) => {
    const newTabs = [...itemsProps.items]
    if (!value) newTabs[index] = { ...newTabs[index], label: '' }
    else newTabs[index] = { ...newTabs[index], label: value }
    onChangeItems(newTabs)
  }

  const onTabDisabledEdit = (value: boolean, index: number) => {
    const newTabs = [...itemsProps.items]
    newTabs[index] = { ...newTabs[index], disabledIcon: value, iconLeft: undefined }
    onChangeItems(newTabs)
  }

  const onTabIconEditLeft = (value: IconNames | null, index: number) => {
    const newTabs = [...itemsProps.items]
    if (value !== null) {
      newTabs[index] = {
        ...newTabs[index],
        iconLeft: Icons[value],
        labelIconLeft: value,
      }
    }
    onChangeItems(newTabs)
  }

  return (
    <div className={style.gapSetting}>
      <div className={style.rowSettings}>
        <Select
          label="Размер"
          size="xs"
          getItemKey={(key: string) => key}
          getItemLabel={(label: string) => label}
          value={itemsProps.size}
          items={sizeArray}
          onChange={value => {
            onChangeSize(value)
          }}
        />
        <Select
          label="Расположение"
          size="xs"
          getItemKey={(key: string) => key}
          getItemLabel={(label: string) => label}
          value={itemsProps.linePosition}
          items={linePositionArray}
          onChange={value => {
            onChangeLinePosition(value)
          }}
        />
      </div>
      <Switch
        size="xs"
        checked={itemsProps.view === 'clear' ? false : !!itemsProps.view}
        label="С бордером"
        onChange={onChangeSwitch('view')}
      />
      <div className={style.rowSettings}>
        <TextField
          className={style.flexWidth}
          size="xs"
          label="Количество табов"
          type="number"
          value={`${itemsProps.items.length}`}
          onChange={onChangeItemsCount}
        />
        <Select
          className={style.flexWidth}
          size="xs"
          getItemKey={item => item.id}
          label="Активный таб"
          getItemLabel={item => item.label}
          items={itemsProps.items}
          value={itemsProps.activeItem}
          onChange={onChangeActiveItem}
        />
      </div>
      <Collapse
        size="xs"
        label="Название табов"
        isOpen={isOpen}
        onClick={() => {
          setOpen(!isOpen)
        }}>
        {itemsProps.items.map((tab, index) => {
          return (
            <div key={tab.id} className={style.rowSettings}>
              <TextField
                key={index}
                className={style.flexWidth}
                size="xs"
                label={`Таб ${index + 1}`}
                value={tab.label}
                onChange={value => {
                  onTabLabelEdit(value, index)
                }}
              />
              <div className={style.columnSettings}>
                <Switch
                  size="xs"
                  label="Иконка"
                  checked={tab.disabledIcon}
                  onChange={event => {
                    onTabDisabledEdit(event.target.checked, index)
                  }}
                />
                <IconSelect
                  itemsProps={tab.labelIconLeft}
                  disabled={tab.disabledIcon}
                  onChangeIcon={value => {
                    onTabIconEditLeft(value, index)
                  }}
                />
              </div>
            </div>
          )
        })}
      </Collapse>
    </div>
  )
}

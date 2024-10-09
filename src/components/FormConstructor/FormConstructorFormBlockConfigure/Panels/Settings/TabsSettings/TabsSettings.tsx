import type { FC } from 'react'
import { useState } from 'react'
import { Collapse } from '@consta/uikit/Collapse'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { IconNames, TabsElement, TabsProps } from '../../../../coreTypes'
import { IconSelectConsta } from '../IconsSelect'

import { useItemsHandlers } from './ItemsService'
import { linePositionArray, sizeArray } from './types'

import style from './styles.module.css'

type TabsSettingsType = {
  selectedViewProps: TabsProps
  selectedView: TabsElement
}

export const TabsSettings: FC<TabsSettingsType> = ({ selectedViewProps, selectedView }) => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeActiveItem,
    onChangeItems,
    onChangeLinePosition,
    onChangeSize,
    onChangeSwitch,
    onChangeWidth,
  } = useItemsHandlers(selectedViewProps, selectedView)
  const [isOpen, setOpen] = useState<boolean>(false)

  const onTabLabelEdit = (value: string | null, index: number) => {
    const newTabs = [...itemsProps.items]
    if (!value) newTabs[index] = { ...newTabs[index], label: '' }
    else newTabs[index] = { ...newTabs[index], label: value }
    onChangeItems(newTabs)
  }

  const onTabDisabledEdit = (value: boolean, index: number) => {
    const newTabs = [...itemsProps.items]
    newTabs[index] = {
      ...newTabs[index],
      disabledIcon: value,
      leftIcon: undefined,
      rightIcon: undefined,
    }
    onChangeItems(newTabs)
  }

  const onTabIconEditLeft = (value: IconNames | null, index: number) => {
    const newTabs = [...itemsProps.items]
    if (value !== null) {
      newTabs[index] = {
        ...newTabs[index],
        leftIcon: value,
      }
    }
    onChangeItems(newTabs)
  }

  const onTabIconEditRight = (value: IconNames | null, index: number) => {
    const newTabs = [...itemsProps.items]
    if (value !== null) {
      newTabs[index] = {
        ...newTabs[index],
        rightIcon: value,
      }
    }
    onChangeItems(newTabs)
  }

  const width = selectedViewProps.styles.width?.replaceAll('px', '') || ''
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
      <div className={`${style.rowSettings} align-center`}>
        <TextField
          value={width}
          type="number"
          size="xs"
          leftSide="Width"
          min="0"
          onChange={value => {
            onChangeWidth(value)
          }}
        />
        <Text size="xs">px</Text>
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
                <IconSelectConsta
                  selectedIcon={tab.leftIcon}
                  disabled={!!tab.disabledIcon}
                  label="icon"
                  onChangeIcon={value => {
                    onTabIconEditLeft(value, index)
                  }}
                />
                <IconSelectConsta
                  selectedIcon={tab.rightIcon}
                  disabled={!!tab.disabledIcon}
                  label="icon"
                  onChangeIcon={value => {
                    onTabIconEditRight(value, index)
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

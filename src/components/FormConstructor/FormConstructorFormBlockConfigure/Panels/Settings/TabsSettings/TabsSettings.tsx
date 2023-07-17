import { Select } from '@consta/uikit/Select'
import React, { useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { Button } from '@consta/uikit/Button'
import { FitMode, fitModeArray, linePositionArray, sizeArray, viewArray } from './types'
import { TabsPropLinePosition, TabsPropSize, TabsPropView } from '@consta/uikit/TabsDeprecated'
import { ITEM } from '../../../../store/formElements/tabsTypes'
import { Switch } from '@consta/uikit/Switch'
import { icons } from '../IconSettings/IconsConstants'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import { iconNames } from '../../../../store/formElements/iconTypes'

export const TabsSettings = () => {
  const { itemsProps, onChangeItemsCount, onChangeField } = useItemsHandlers()
  const [tabs, setTabs] = useState<ITEM[]>(itemsProps.items)
  const [isLabelsEditing, setIsLabelsEditing] = useState<boolean>(false)

  const labelsEditingHandler = (value: boolean) => {
    setTabs(itemsProps.items)
    setIsLabelsEditing(value)
  }

  const applyNewTabs = () => {
    onChangeField(tabs, 'items')
    setIsLabelsEditing(false)
  }

  const onTabLabelEdit = (value: string | null, index: number) => {
    const newTabs = [...tabs]
    if (!value) newTabs[index] = { ...newTabs[index], label: `` }
    else newTabs[index] = { ...newTabs[index], label: `${value}` }
    setTabs([...newTabs])
  }

  const onTabDisabledEdit = (value: boolean, index: number) => {
    const newTabs = [...tabs]
    newTabs[index] = { ...newTabs[index], disabled: value }
    setTabs([...newTabs])
  }

  const onTabIconEditLeft = (value: string | null, index: number) => {
    const newTabs = [...tabs]
    if (value !== null)
      (newTabs[index] = {
        ...newTabs[index],
        iconLeft: Icons[value as iconNames],
        labelIconLeft: value,
      }),
        setTabs([...newTabs])
  }

  const onTabIconEditRight = (value: string | null, index: number) => {
    const newTabs = [...tabs]
    if (value !== null)
      (newTabs[index] = {
        ...newTabs[index],
        iconRight: Icons[value as iconNames],
        labelIconRight: value,
      }),
        setTabs([...newTabs])
  }

  return (
    <>
      {!isLabelsEditing && (
        <>
          <TextField
            label='Количество табов'
            type='number'
            value={`${itemsProps.items.length}`}
            onChange={onChangeItemsCount}
          />
          <Select
            getItemKey={item => item.id}
            label='Активный таб'
            getItemLabel={item => item.label}
            items={itemsProps.items}
            value={itemsProps.activeItem}
            onChange={({ value }) => onChangeField(value as ITEM, 'view')}
          />
          <Button
            view='secondary'
            className='m-b-xs m-t-xs'
            label={'Сменить названия табов'}
            onClick={() => labelsEditingHandler(true)}
          />
        </>
      )}
      {isLabelsEditing && (
        <>
          {tabs.map((tab, index) => {
            return (
              <>
                <TextField
                  key={index}
                  label={`${index + 1}`}
                  value={`${tab.label}`}
                  onChange={event => onTabLabelEdit(event.value, index)}
                />
                <Switch
                  label='disabled'
                  checked={tab.disabled}
                  onChange={event => onTabDisabledEdit(event.checked, index)}
                />
                <Select
                  getItemKey={(item: string | undefined) => item || ''}
                  getItemLabel={(item: string | undefined) => item || ''}
                  items={icons}
                  label='icons'
                  value={tab.labelIconLeft}
                  onChange={event => onTabIconEditLeft(event.value, index)}
                  renderItem={({ item, active, onClick, onMouseEnter }) => (
                    <div
                      style={{ display: 'flex', alignItems: 'center' }}
                      role='option'
                      aria-selected={active}
                      onMouseEnter={onMouseEnter}
                      onClick={onClick}>
                      {React.createElement(Icons[item as iconNames])}
                      <div>{item}</div>
                    </div>
                  )}
                />
                <Select
                  getItemKey={(item: string | undefined) => item || ''}
                  getItemLabel={(item: string | undefined) => item || ''}
                  items={icons}
                  label='icons'
                  value={tab.labelIconRight}
                  onChange={event => onTabIconEditRight(event.value, index)}
                  renderItem={({ item, active, onClick, onMouseEnter }) => (
                    <div
                      style={{ display: 'flex', alignItems: 'center' }}
                      role='option'
                      aria-selected={active}
                      onMouseEnter={onMouseEnter}
                      onClick={onClick}>
                      {React.createElement(Icons[item as iconNames])}
                      <div>{item}</div>
                    </div>
                  )}
                />
              </>
            )
          })}
          <Button
            size='xs'
            className='m-b-xs m-t-xs'
            label='Применить'
            onClick={() => applyNewTabs()}
          />
          <Button size='xs' label='Отменить' onClick={() => labelsEditingHandler(false)} />
        </>
      )}
      <Switch
        checked={itemsProps.disabled}
        label='disabled'
        onChange={({ checked }) => onChangeField(checked, 'disabled')}
      />
      <Switch
        checked={itemsProps.onlyIcon}
        label='onlyIcon'
        onChange={({ checked }) => onChangeField(checked, 'onlyIcon')}
      />
      <Select
        label='size'
        getItemKey={(key: TabsPropSize) => key}
        getItemLabel={(label: TabsPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeField(value as TabsPropSize, 'size')}
      />
      <Select
        label='view'
        getItemKey={(key: TabsPropView) => key}
        getItemLabel={(label: TabsPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeField(value as TabsPropView, 'view')}
      />
      <Select
        label='Расположение табов'
        getItemKey={(key: TabsPropLinePosition) => key}
        getItemLabel={(label: TabsPropLinePosition) => label}
        value={itemsProps.linePosition}
        items={linePositionArray}
        onChange={({ value }) => onChangeField(value as TabsPropLinePosition, 'linePosition')}
      />
      {(itemsProps.linePosition === 'bottom' || itemsProps.linePosition === 'top') && (
        <Select
          label='fitMode'
          getItemKey={(key: FitMode) => key}
          getItemLabel={(label: FitMode) => label}
          value={itemsProps.fitMode}
          items={fitModeArray}
          onChange={({ value }) => onChangeField(value as FitMode, 'fitMode')}
        />
      )}
    </>
  )
}

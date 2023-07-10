import { Select } from '@consta/uikit/Select'
import React, { useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { Button } from '@consta/uikit/Button'
import { FitMode, fitModeArray, linePositionArray, sizeArray, viewArray } from './types'
import { TabsPropLinePosition, TabsPropSize, TabsPropView } from '@consta/uikit/TabsDeprecated'
import { ITEM } from '../../../../store/formElements/tabsTypes'
export const TabsSettings = () => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeActiveItem,
    onChangeItems,
    onChangeLinePosition,
    onChangeView,
    onChangeSize,
    onChangeFitMode,
  } = useItemsHandlers()
  const [tabs, setTabs] = useState<ITEM[]>(itemsProps.items)
  const [isLabelsEditing, setIsLabelsEditing] = useState<boolean>(false)

  const labelsEditingHandler = (value: boolean) => {
    setTabs(itemsProps.items)
    setIsLabelsEditing(value)
  }

  const applyNewTabs = () => {
    onChangeItems(tabs)
    setIsLabelsEditing(false)
  }

  const onTabLabelEdit = (value: string | null, index: number) => {
    const newTabs = [...tabs]
    if (!value) newTabs[index] = { ...newTabs[index], label: `` }
    else newTabs[index] = { ...newTabs[index], label: `${value}` }
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
            onChange={onChangeActiveItem}
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
              <TextField
                key={index}
                label={`${index + 1}`}
                value={`${tab.label}`}
                onChange={event => onTabLabelEdit(event.value, index)}
              />
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
      <Select
        label='size'
        getItemKey={(key: TabsPropSize) => key}
        getItemLabel={(label: TabsPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        label='view'
        getItemKey={(key: TabsPropView) => key}
        getItemLabel={(label: TabsPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        label='Расположение табов'
        getItemKey={(key: TabsPropLinePosition) => key}
        getItemLabel={(label: TabsPropLinePosition) => label}
        value={itemsProps.linePosition}
        items={linePositionArray}
        onChange={({ value }) => onChangeLinePosition(value)}
      />
      {(itemsProps.linePosition === 'bottom' || itemsProps.linePosition === 'top') && (
        <Select
          label='fitMode'
          getItemKey={(key: FitMode) => key}
          getItemLabel={(label: FitMode) => label}
          value={itemsProps.fitMode}
          items={fitModeArray}
          onChange={({ value }) => onChangeFitMode(value)}
        />
      )}
    </>
  )
}

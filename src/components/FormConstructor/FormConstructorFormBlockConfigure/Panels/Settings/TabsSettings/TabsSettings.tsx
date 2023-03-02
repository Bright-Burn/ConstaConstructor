import { Select } from '@consta/uikit/Select'
import React, { useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { Button } from '@consta/uikit/Button'
import { TabsItemDefault } from '@consta/uikit/__internal__/src/components/Tabs/types'
import {
  FitMode,
  fitModeArray,
  LinePosition,
  linePositionArray,
  Size,
  sizeArray,
  View,
  viewArray,
} from './types'
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
  const [tabs, setTabs] = useState<TabsItemDefault[]>(itemsProps.items)
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
    newTabs[index] = { ...newTabs[index], label: value + '' }
    setTabs([...newTabs])
  }

  return (
    <>
      {!isLabelsEditing && (
        <>
          <TextField
            label='Количество табов'
            type='number'
            value={itemsProps.items.length + ''}
            onChange={onChangeItemsCount}
          />
          <Select
            getItemKey={() =>
              itemsProps.items.findIndex(
                (item: ITEM) => itemsProps.activeItem?.label === item.label,
              )
            }
            label='Активный таб'
            getItemLabel={item => item.label + ''}
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
                label={index + 1 + ''}
                value={tab.label + ''}
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
        label='Расположение табов'
        getItemKey={() => linePositionArray.findIndex(item => item === itemsProps.linePosition)}
        getItemLabel={(item: LinePosition) => item}
        value={itemsProps.linePosition}
        items={linePositionArray}
        onChange={({ value }) => onChangeLinePosition(value)}
      />
      <Select
        label='size'
        getItemKey={() => sizeArray.findIndex(item => item === itemsProps.size)}
        getItemLabel={(item: Size) => item}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        label='view'
        getItemKey={() => viewArray.findIndex(item => item === itemsProps.view)}
        getItemLabel={(item: View) => item}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        label='fitMode'
        getItemKey={() => fitModeArray.findIndex(item => item === itemsProps.fitMode)}
        getItemLabel={(item: FitMode) => item}
        value={itemsProps.fitMode}
        items={fitModeArray}
        onChange={({ value }) => onChangeFitMode(value)}
      />
    </>
  )
}

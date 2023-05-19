import { Select } from '@consta/uikit/Select'
import React, { useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { Button } from '@consta/uikit/Button'
import { formArray, labelPositionArray, sizeArray, statusArray, viewArray } from './types'
import { ITEM } from '../../../../store/formElements/tabsTypes'
import { Switch } from '@consta/uikit/Switch'
import {
  TextFieldPropForm,
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

export const SelectSettings = () => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeForm,
    onChangeItems,
    onChangeStatus,
    onChangeView,
    onChangeSwitch,
    onChangeSize,
    onChangeField,
    onChangeLabelPosition,
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
    newTabs[index] = { ...newTabs[index], label: `${value}` }
    setTabs([...newTabs])
  }
  return (
    <>
      {!isLabelsEditing && (
        <>
          <TextField
            label='Количество вариантов'
            type='number'
            value={`${itemsProps.items.length}`}
            onChange={onChangeItemsCount}
          />
          <Button
            view='secondary'
            className='m-b-xs m-t-xs'
            label={'Сменить названия вариантов'}
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
      <Switch
        onChange={onChangeSwitch('disabled')}
        label='disabled'
        checked={itemsProps.disabled}
      />
      <Select
        label='size'
        getItemKey={(key: TextFieldPropSize) => key}
        getItemLabel={(label: TextFieldPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        label='view'
        getItemKey={(key: TextFieldPropView) => key}
        getItemLabel={(label: TextFieldPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        label='form'
        getItemKey={(key: TextFieldPropForm) => key}
        getItemLabel={(label: TextFieldPropForm) => label}
        value={itemsProps.form}
        items={formArray}
        onChange={({ value }) => onChangeForm(value)}
      />
      <Switch
        style={{ marginTop: '8px' }}
        onChange={onChangeSwitch('required')}
        label='required'
        checked={itemsProps.required}
      />
      <Select
        label='status'
        getItemKey={(key: TextFieldPropStatus) => key}
        getItemLabel={(label: TextFieldPropStatus) => label}
        value={itemsProps.status}
        items={statusArray}
        onChange={({ value }) => onChangeStatus(value)}
      />
      <TextField
        label='caption'
        value={`${itemsProps.caption || ''}`}
        onChange={onChangeField('caption')}
      />
      <TextField
        label='label'
        value={`${itemsProps.label || ''}`}
        onChange={onChangeField('label')}
      />
      <Select
        label='labelPosition'
        getItemKey={(key: 'top' | 'left') => key}
        getItemLabel={(label: 'top' | 'left') => label}
        value={itemsProps.labelPosition}
        items={labelPositionArray}
        onChange={({ value }) => onChangeLabelPosition(value)}
      />
      <TextField
        label='placeholder'
        value={`${itemsProps.placeholder || ''}`}
        onChange={onChangeField('placeholder')}
      />
      <Switch
        style={{ marginTop: '8px' }}
        onChange={onChangeSwitch('isLoading')}
        label='isLoading'
        checked={itemsProps.isLoading}
      />
    </>
  )
}


import { Select } from '@consta/uikit/Select'
import React, { useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { formArray, labelPositionArray, sizeArray, statusArray, viewArray } from './types'
import { Item } from '../../../../store/formElements/comboBoxTypes'
import { Switch } from '@consta/uikit/Switch'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from '../../../../store/formElements/selectTypes'
import { Button } from '@consta/uikit/Button'
import styles from './styles.module.css'

export const ComboBoxSettings = () => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeLabelPosition,
    onChangeStatus,
    onChangeItems,
    onChangeField,
    onChangeView,
    onChangeSize,
    onChangeForm,
    onChangeSwitch,
  } = useItemsHandlers()
  const [lines, setLines] = useState<Item[]>(itemsProps.items)
  const [isLabelsEditing, setIsLabelsEditing] = useState<boolean>(false)
  const labelsEditingHandler = (value: boolean) => {
    setLines(itemsProps.items)
    setIsLabelsEditing(value)
  }
  const applyNewLines = () => {
    onChangeItems(lines)
    setIsLabelsEditing(false)
  }
  const onLinesLabelEdit = (value: string | null, index: number) => {
    const newLines = [...lines]
    newLines[index] = { ...newLines[index], label: `${value}` }
    setLines([...newLines])
  }

  return (
    <div className={`${styles.comboBoxSettings}`}>
      {!isLabelsEditing && (
        <>
          <TextField
            label='Количество вариантов'
            type='number'
            size='xs'
            value={`${itemsProps.items.length}`}
            onChange={onChangeItemsCount}
          />
          <Button
            view='secondary'
            size='xs'
            className='m-b-xs m-t-xs'
            label={'Сменить названия в списке'}
            onClick={() => labelsEditingHandler(true)}
          />
        </>
      )}
      {isLabelsEditing && (
        <>
          {lines.map((line, index) => {
            return (
              <TextField
                key={index}
                size='xs'
                label={`${index + 1}`}
                value={`${line.label}`}
                onChange={event => onLinesLabelEdit(event.value, index)}
              />
            )
          })}
          <Button
            size='xs'
            className='m-b-xs m-t-xs'
            label='Применить'
            onClick={() => applyNewLines()}
          />
          <Button size='xs' label='Отменить' onClick={() => labelsEditingHandler(false)} />
        </>
      )}

      <Switch
        size='xs'
        onChange={onChangeSwitch('disabled')}
        label='disabled'
        checked={itemsProps.disabled}
      />
      <Select
        label='size'
        size='xs'
        getItemKey={(key: TextFieldPropSize) => key}
        getItemLabel={(label: TextFieldPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        label='view'
        size='xs'
        getItemKey={(key: TextFieldPropView) => key}
        getItemLabel={(label: TextFieldPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        label='from'
        size='xs'
        getItemKey={(key: PropForm) => key}
        getItemLabel={(label: PropForm) => label}
        value={itemsProps.form}
        items={formArray}
        onChange={({ value }) => onChangeForm(value)}
      />
      <Switch
        onChange={onChangeSwitch('required')}
        label='required'
        size='xs'
        checked={itemsProps.required}
      />
      <TextField
        size='xs'
        value={itemsProps.caption}
        onChange={onChangeField('caption')}
        label={'caption'}
      />
      <TextField
        size='xs'
        value={itemsProps.label}
        onChange={onChangeField('label')}
        label={'label'}
      />
      <Select
        label='status'
        size='xs'
        getItemKey={(key: TextFieldPropStatus) => key}
        getItemLabel={(label: TextFieldPropStatus) => label}
        value={itemsProps.status}
        items={statusArray}
        onChange={({ value }) => onChangeStatus(value)}
      />
      <Select
        label='labelPosition'
        size='xs'
        getItemKey={(key: 'top' | 'left') => key}
        getItemLabel={(label: 'top' | 'left') => label}
        value={itemsProps.labelPosition}
        items={labelPositionArray}
        onChange={({ value }) => onChangeLabelPosition(value)}
      />
      <TextField
        value={itemsProps.placeholder}
        size='xs'
        onChange={onChangeField('placeholder')}
        label={'placeholder'}
      />
      <Switch
        onChange={onChangeSwitch('isLoading')}
        size='xs'
        label='isLoading'
        checked={itemsProps.isLoading}
      />
      <Switch
        onChange={onChangeSwitch('multiple')}
        size='xs'
        label='multiple'
        checked={itemsProps.multiple}
      />
    </div>
  )
}

import { Select } from '@consta/uikit/Select'
import React, { useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { Item, formArray, sizeArray, viewArray } from './types'
import { Switch } from '@consta/uikit/Switch'
import { Button } from '@consta/uikit/Button'
import {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
} from '@consta/uikit/ChoiceGroup'
import { Combobox } from '@consta/uikit/Combobox'
import { icons } from '../IconSettings/IconsConstants'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import { iconNames } from '../../../../store/formElements/iconTypes'

export const ChoiceGroupSettings = () => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeItems,
    onChangeView,
    onChangeSize,
    onChangeForm,
    onChangeSwitch,
    onChangeActiveItem,
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

  const onLinesDisabledEdit = (value: boolean, index: number) => {
    const newLines = [...lines]
    newLines[index] = { ...newLines[index], disabled: value }
    setLines([...newLines])
  }

  const onLinesIconEdit = (value: string | null, index: number) => {
    const newLines = [...lines]
    if (value !== null)
      (newLines[index] = {
        ...newLines[index],
        icon: Icons[value as iconNames],
        labelIcon: value,
      }),
        setLines([...newLines])
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
            label={'Сменить названия в списке'}
            onClick={() => labelsEditingHandler(true)}
          />
        </>
      )}
      {isLabelsEditing && (
        <>
          {lines.map((line, index) => {
            return (
              <>
                <TextField
                  key={index}
                  label={`${index + 1}`}
                  value={`${line.label}`}
                  onChange={event => onLinesLabelEdit(event.value, index)}
                />
                <Switch
                  label='disabled'
                  checked={line.disabled}
                  onChange={event => onLinesDisabledEdit(event.checked, index)}
                />
                <Select
                  getItemKey={(item: string | undefined) => item || ''}
                  getItemLabel={(item: string | undefined) => item || ''}
                  items={icons}
                  label='icons'
                  value={line.labelIcon}
                  onChange={event => onLinesIconEdit(event.value, index)}
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
            onClick={() => applyNewLines()}
          />
          <Button size='xs' label='Отменить' onClick={() => labelsEditingHandler(false)} />
        </>
      )}

      <Switch
        onChange={onChangeSwitch('multiple')}
        label='multiple'
        checked={itemsProps.multiple}
      />
      {itemsProps.multiple ? (
        <Combobox
          label='Выберите активные элементы'
          placeholder='Выберите вариант'
          items={itemsProps.items}
          value={itemsProps.value as Item[]}
          onChange={onChangeActiveItem}
          getItemKey={(key: Item) => key.label}
          multiple
        />
      ) : (
        <Select
          label='Активный элемент'
          items={itemsProps.items}
          value={itemsProps.value as Item}
          onChange={onChangeActiveItem}
          getItemKey={(key: Item) => key.label}
        />
      )}
      <Select
        label='size'
        getItemKey={(key: ChoiceGroupPropSize) => key}
        getItemLabel={(label: ChoiceGroupPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        label='view'
        getItemKey={(key: ChoiceGroupPropView) => key}
        getItemLabel={(label: ChoiceGroupPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        label='form'
        getItemKey={(key: ChoiceGroupPropForm) => key}
        getItemLabel={(label: ChoiceGroupPropForm) => label}
        value={itemsProps.form}
        items={formArray}
        onChange={({ value }) => onChangeForm(value)}
      />
      <Switch
        onChange={onChangeSwitch('onlyIcon')}
        label='onlyIcon'
        checked={itemsProps.onlyIcon}
      />
      <Switch
        onChange={onChangeSwitch('disabled')}
        label='disabled'
        checked={itemsProps.disabled}
      />
    </>
  )
}

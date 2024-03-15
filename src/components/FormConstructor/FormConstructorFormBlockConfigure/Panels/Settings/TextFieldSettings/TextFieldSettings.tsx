import type { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { FieldGroup } from '@consta/uikit/FieldGroup'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { TextFieldElement, TextFieldProps } from '../../../../coreTypes'
import { FilledSettings } from '../FilledSettings'

import { useItemsHandlers } from './ItemsService'
import { forms, labelPosition, sizes, status, types, view } from './TextFieldConstants'

import styles from './styles.module.css'

type TextFieldSettingsType = {
  selectedElementProps: TextFieldProps
  selectedElement: TextFieldElement
}

export const TextFieldSettings: FC<TextFieldSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeTextField, onChangeSwitch } = useItemsHandlers(
    selectedElementProps,
    selectedElement,
  )

  return (
    <div className={styles.textFieldSettings}>
      {itemsProps ? (
        <>
          <div className={styles.rowSettings}>
            <Select
              className={styles.widthFlex}
              getItemKey={key => key}
              getItemLabel={label => label}
              label="Тип"
              size="xs"
              items={types}
              value={`${itemsProps.type}`}
              onChange={onChangeTextField('type')}
            />
            <div className={styles.columnSettings}>
              <Text view="secondary" size="xs">
                Вид
              </Text>
              <ChoiceGroup
                value={itemsProps.view}
                items={view}
                getItemLabel={label => label}
                view="ghost"
                size="xs"
                name="ChoiceGroupExample"
                onChange={onChangeTextField('view')}
              />
            </div>
          </div>
          <div className={styles.rowSettings}>
            <Select
              className={styles.widthFlex}
              getItemKey={key => key}
              getItemLabel={label => label}
              items={sizes}
              label="Размер"
              size="xs"
              value={itemsProps.size || 's'}
              onChange={onChangeTextField('size')}
            />
            <FilledSettings
              selectedElement={selectedElement}
              selectedElementProps={selectedElementProps}
              element="TextField"
            />
          </div>
          <div className={styles.rowSettings}>
            <Select
              getItemKey={key => key}
              label="Форма"
              size="xs"
              getItemLabel={label => label}
              items={forms}
              value={`${itemsProps.form}`}
              onChange={onChangeTextField('form')}
            />
            <Select
              getItemKey={key => key}
              label="Статус"
              size="xs"
              getItemLabel={label => label}
              items={status}
              value={`${itemsProps.status}`}
              onChange={onChangeTextField('status')}
            />
          </div>
          <Switch
            label="Текст заголовка"
            size="xs"
            checked={!!itemsProps.label}
            onChange={onChangeSwitch('label')}
          />
          <div className={styles.rowSettingsWithoutGap}>
            <Select
              className={styles.widthTopLeftFlex}
              size="xs"
              disabled={!itemsProps.label}
              getItemKey={key => key}
              getItemLabel={label => label}
              value={itemsProps.labelPosition || 'top'}
              items={labelPosition}
              onChange={onChangeTextField('labelPosition')}
            />
            <TextField
              className={styles.widthFlex}
              width="full"
              disabled={!itemsProps.label}
              value={itemsProps.label}
              size="xs"
              onChange={onChangeTextField('label')}
            />
          </div>
          <Switch
            checked={itemsProps.required ?? false}
            label="Обязательно для заполнения"
            size="xs"
            onChange={onChangeSwitch('required')}
          />
          <div className={styles.columnSettingsWithoutRow}>
            <Switch
              label="Текст подписи"
              size="xs"
              checked={!!itemsProps.caption}
              onChange={onChangeSwitch('caption')}
            />
            <TextField
              size="xs"
              disabled={!itemsProps.caption}
              value={itemsProps.caption}
              onChange={onChangeTextField('caption')}
            />
          </div>
          <TextField
            label="Текст placeholder"
            size="xs"
            value={itemsProps.placeholder || ''}
            onChange={onChangeTextField('placeholder')}
          />
          <div className={styles.columnSettingsWithoutRow}>
            <Switch
              label="Макс длина вводимого значения"
              size="xs"
              checked={!!itemsProps.maxLength}
              onChange={onChangeSwitch('maxLength')}
            />
            <TextField
              value={`${itemsProps.maxLength}`}
              type="number"
              size="xs"
              disabled={!itemsProps.maxLength}
              min="0"
              onChange={onChangeTextField('maxLength')}
            />
          </div>

          {itemsProps.type === 'textarea' ? (
            <div className={styles.columnSettingsWithoutRow}>
              <Text size="xs" view="secondary">
                Количество строк
              </Text>
              <FieldGroup size="xs">
                <TextField
                  value={`${itemsProps.minRows}`}
                  type="number"
                  leftSide="min"
                  size="xs"
                  min="0"
                  onChange={onChangeTextField('minRows')}
                />
                <TextField
                  value={`${itemsProps.maxRows}`}
                  type="number"
                  leftSide="max"
                  size="xs"
                  min="0"
                  onChange={onChangeTextField('maxRows')}
                />
              </FieldGroup>
            </div>
          ) : (
            <></>
          )}
          <Switch
            checked={itemsProps.withClearButton ?? false}
            label="Кнопка очистки поля ввода"
            size="xs"
            onChange={onChangeSwitch('withClearButton')}
          />
          {itemsProps.type === 'number' ? (
            <>
              <TextField
                value={`${itemsProps.step}`}
                type="number"
                size="xs"
                label="Шаг"
                min="1"
                onChange={onChangeTextField('step')}
              />
              <Switch
                checked={itemsProps.incrementButtons ?? false}
                label="Изменение значения"
                size="xs"
                onChange={onChangeSwitch('incrementButtons')}
              />
              {!!itemsProps.incrementButtons && (
                <FieldGroup size="xs">
                  <TextField
                    value={`${itemsProps.min}`}
                    type="number"
                    leftSide="min"
                    min="0"
                    onChange={onChangeTextField('min')}
                  />
                  <TextField
                    value={`${itemsProps.max}`}
                    type="number"
                    leftSide="max"
                    min="0"
                    onChange={onChangeTextField('max')}
                  />
                </FieldGroup>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

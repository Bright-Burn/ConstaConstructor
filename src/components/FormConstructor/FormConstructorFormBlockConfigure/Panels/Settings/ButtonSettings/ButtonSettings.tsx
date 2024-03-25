import type { FC } from 'react'
import React from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { ButtonElement, ButtonProps } from '../../../../coreTypes'
import { Icons, icons } from '../../../../coreTypes'
import { FilledSettings } from '../FilledSettings'

import { useItemsHandlers } from './ItemsService'
import { forms, sizes, views } from './UserConstants'

import styles from './styles.module.css'

type ButtonSettingsType = {
  selectedElementProps: ButtonProps
  selectedElement: ButtonElement
}

export const ButtonSettings: FC<ButtonSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const {
    itemsProps,
    onChangeSwitch,
    onChangeIcon,
    onChangeIconR,
    onChangeLabel,
    onChangeSize,
    onChangeView,
    onChangeForm,
  } = useItemsHandlers(selectedElementProps, selectedElement)

  return (
    <div className={styles.buttonPropsSettings}>
      <div className={styles.blockIcon}>
        <TextField
          label="Текст"
          type="text"
          size="xs"
          value={`${itemsProps.label}`}
          onChange={({ value }) => {
            value && onChangeLabel(value)
          }}
        />
        <div className={styles.rowSettings}>
          <Select
            className={styles.sizeFlex}
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={sizes}
            label="Размер"
            size="xs"
            value={itemsProps.size || 's'}
            onChange={({ value }) => {
              value && onChangeSize(value)
            }}
          />
          <FilledSettings
            selectedElement={selectedElement}
            selectedElementProps={selectedElementProps}
            element="Button"
          />
        </div>
        <div className={styles.rowSettings}>
          <Select
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={views}
            label="Вид"
            size="xs"
            value={itemsProps.view}
            onChange={({ value }) => {
              value && onChangeView(value)
            }}
          />
          <Select
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={forms}
            label="Форма"
            size="xs"
            value={itemsProps.form}
            onChange={({ value }) => {
              value && onChangeForm(value)
            }}
          />
        </div>
        <Switch
          checked={itemsProps.loading ?? false}
          label="Состояние загрузки"
          size="xs"
          onChange={onChangeSwitch('loading')}
        />
        <Switch
          checked={itemsProps.disabled ?? false}
          label="Состояние блокировки"
          size="xs"
          onChange={onChangeSwitch('disabled')}
        />
      </div>
      <div className={styles.blockIcon}>
        <div className={styles.rowSettings}>
          <div className={styles.columnSettings}>
            <Switch
              checked={!!itemsProps.icon}
              label="Иконка слева"
              size="xs"
              onChange={onChangeSwitch('icon')}
            />
            <Select
              getItemKey={(item: string) => item}
              getItemLabel={(item: string) => item}
              items={icons}
              size="xs"
              disabled={!itemsProps.icon}
              value={itemsProps.icon}
              renderItem={({ item, active, onClick, onMouseEnter }) => (
                <div
                  className={styles.renderIcon}
                  role="option"
                  aria-selected={active}
                  onMouseEnter={onMouseEnter}
                  onClick={onClick}>
                  {React.createElement(Icons[item], { size: 'xs' })}
                  <Text size="xs">{item}</Text>
                </div>
              )}
              onChange={({ value }) => {
                onChangeIcon(value)
              }}
            />
          </div>
          <div className={styles.columnSettings}>
            <Switch
              checked={!!itemsProps.iconR}
              label="Иконка справа"
              size="xs"
              onChange={onChangeSwitch('iconR')}
            />
            <Select
              getItemKey={(item: string) => item}
              getItemLabel={(item: string) => item}
              items={icons}
              size="xs"
              disabled={!itemsProps.iconR}
              value={itemsProps.iconR}
              renderItem={({ item, active, onClick, onMouseEnter }) => (
                <div
                  className={styles.renderIcon}
                  role="option"
                  aria-selected={active}
                  onMouseEnter={onMouseEnter}
                  onClick={onClick}>
                  {React.createElement(Icons[item], { size: 'xs' })}
                  <Text size="xs">{item}</Text>
                </div>
              )}
              onChange={({ value }) => {
                onChangeIconR(value)
              }}
            />
          </div>
        </div>
        <div>
          <Switch
            checked={itemsProps.onlyIcon}
            label="Только иконка"
            size="xs"
            onChange={onChangeSwitch('onlyIcon')}
          />
          <Select
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={icons}
            size="xs"
            disabled={!itemsProps.onlyIcon}
            value={itemsProps.icon}
            renderItem={({ item, active, onClick, onMouseEnter }) => (
              <div
                className={styles.renderIcon}
                role="option"
                aria-selected={active}
                onMouseEnter={onMouseEnter}
                onClick={onClick}>
                {React.createElement(Icons[item], { size: 'xs' })}
                <Text size="xs">{item}</Text>
              </div>
            )}
            onChange={({ value }) => {
              onChangeIcon(value)
            }}
          />
        </div>
      </div>
      <Switch
        className={styles.modalPadding}
        checked={itemsProps.activeAction}
        label="Модальное окно при нажатии"
        size="xs"
        onChange={onChangeSwitch('activeAction')}
      />
    </div>
  )
}

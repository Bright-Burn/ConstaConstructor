import type { FC } from 'react'
import React from 'react'
import { IconClose } from '@consta/icons/IconClose'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { ButtonElement, ButtonProps } from '../../../../coreTypes'
import { Icons, icons } from '../../../../coreTypes'
import { FilledSettings } from '../FilledSettings'
import { getValueForSelect } from '../LabelForSelectComponent'

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
        <Select
          className={styles.sizeFlex}
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={sizes}
          size="xs"
          value={itemsProps.size}
          renderValue={({ item }) => getValueForSelect({ item, label: 'size' })}
          onChange={value => {
            value && onChangeSize(value)
          }}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={views}
          size="xs"
          value={itemsProps.view}
          renderValue={({ item }) => getValueForSelect({ item, label: 'view' })}
          onChange={value => {
            value && onChangeView(value)
          }}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={forms}
          size="xs"
          value={itemsProps.form}
          renderValue={({ item }) => getValueForSelect({ item, label: 'form' })}
          onChange={value => {
            value && onChangeForm(value)
          }}
        />
        <Switch
          checked={itemsProps.loading ?? false}
          label="loading"
          size="xs"
          onChange={onChangeSwitch('loading')}
        />
        <Switch
          checked={itemsProps.disabled ?? false}
          label="disabled"
          size="xs"
          onChange={onChangeSwitch('disabled')}
        />
        <TextField
          leftSide="label"
          type="text"
          size="xs"
          value={`${itemsProps.label}`}
          onChange={value => {
            value && onChangeLabel(value)
          }}
        />
        <div className={styles.rowSettings}>
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
            items={icons}
            size="xs"
            value={itemsProps.icon}
            disabled={selectedElementProps.onlyIcon}
            placeholder="iconLeft"
            renderValue={({ item }) => getValueForSelect({ item, label: 'iconLeft' })}
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
            onChange={value => {
              onChangeIcon(value)
            }}
          />
          <IconClose
            size="s"
            view="secondary"
            onClick={() => {
              onChangeIcon(null)
            }}
          />
        </div>
        <div className={styles.rowSettings}>
          <Select
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={icons}
            size="xs"
            disabled={selectedElementProps.onlyIcon}
            value={itemsProps.iconR}
            placeholder="iconRight"
            renderValue={({ item }) => getValueForSelect({ item, label: 'iconRight' })}
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
            onChange={value => {
              onChangeIconR(value)
            }}
          />
          <IconClose
            size="s"
            view="secondary"
            onClick={() => {
              onChangeIconR(null)
            }}
          />
        </div>
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
          onChange={value => {
            onChangeIcon(value)
          }}
        />
        <Switch
          checked={itemsProps.activeAction}
          label="Модальное окно при нажатии"
          size="xs"
          onChange={onChangeSwitch('activeAction')}
        />
      </div>
    </div>
  )
}

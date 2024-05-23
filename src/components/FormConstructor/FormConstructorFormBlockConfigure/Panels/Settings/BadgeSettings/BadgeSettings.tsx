import type { FC } from 'react'
import React from 'react'
import { IconClose } from '@consta/icons/IconClose'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { BadgeElement, BadgeProps } from '../../../../coreTypes'
import { Icons, icons } from '../../../../coreTypes'
import { getValueForSelect } from '../LabelForSelectComponent'

import { useItemsHandlers } from './ItemsService'
import { forms, sizes, statuses, views } from './textConstants'

import styles from './styles.module.css'

type BadgeSettingsType = {
  selectedElementProps: BadgeProps
  selectedElement: BadgeElement
}

export const BadgeSettings: FC<BadgeSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const {
    itemsProps,
    onChangeSwitch,
    onChangeIconLeft,
    handleOnChangeLabel,
    onChangeField,
    onChangeIconRight,
  } = useItemsHandlers(selectedElementProps, selectedElement)
  return (
    <div className={styles.badgeSettings}>
      <TextField
        size="xs"
        leftSide="Текст"
        value={itemsProps.label}
        onChange={handleOnChangeLabel}
      />
      <Select
        className={styles.widthFlex}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={sizes}
        placeholder="size"
        size="xs"
        value={itemsProps.size}
        renderValue={({ item }) => getValueForSelect({ item, label: 'size' })}
        onChange={value => {
          onChangeField(value, 'size')
        }}
      />
      <Select
        placeholder="view"
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={views}
        value={selectedElementProps.view}
        size="xs"
        renderValue={({ item }) => getValueForSelect({ item, label: 'view' })}
        onChange={value => {
          onChangeField(value, 'view')
        }}
      />

      <Select
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={forms}
        placeholder="forms"
        size="xs"
        value={selectedElementProps.form}
        renderValue={({ item }) => getValueForSelect({ item, label: 'form' })}
        onChange={value => {
          onChangeField(value, 'form')
        }}
      />
      <Select
        className={styles.widthFlex}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={statuses}
        size="xs"
        placeholder="status"
        value={itemsProps.status}
        renderValue={({ item }) => getValueForSelect({ item, label: 'status' })}
        onChange={value => {
          onChangeField(value, 'status')
        }}
      />

      <div className={styles.rowSettings}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          placeholder="iconLeft"
          items={icons}
          size="xs"
          value={itemsProps.iconLeft}
          renderValue={({ item }) => getValueForSelect({ item, label: 'iconLeft' })}
          renderItem={({ item, active, onClick, onMouseEnter }) => (
            <div
              className={styles.icon}
              role="option"
              aria-selected={active}
              onMouseEnter={onMouseEnter}
              onClick={onClick}>
              {React.createElement(Icons[item], { size: 'xs' })}
              <Text size="xs">{item}</Text>
            </div>
          )}
          onChange={value => {
            onChangeIconLeft(value)
          }}
        />
        <IconClose
          size="s"
          view="secondary"
          onClick={() => {
            onChangeIconLeft(null)
          }}
        />
      </div>
      <div className={styles.rowSettings}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          placeholder="iconRight"
          items={icons}
          size="xs"
          value={selectedElementProps.iconRight}
          renderItem={({ item, active, onClick, onMouseEnter }) => (
            <div
              className={styles.icon}
              role="option"
              aria-selected={active}
              onMouseEnter={onMouseEnter}
              onClick={onClick}>
              {React.createElement(Icons[item], { size: 'xs' })}
              <Text size="xs">{item}</Text>
            </div>
          )}
          renderValue={({ item }) => getValueForSelect({ item, label: 'iconRight' })}
          onChange={value => {
            onChangeIconRight(value)
          }}
        />
        <IconClose
          size="s"
          view="secondary"
          onClick={() => {
            onChangeIconRight(null)
          }}
        />
      </div>
      <Switch
        label="Minified"
        size="xs"
        checked={itemsProps.minified}
        onChange={onChangeSwitch('minified')}
      />
    </div>
  )
}

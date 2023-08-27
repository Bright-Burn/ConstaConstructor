import styles from './styles.module.css'
import React from 'react'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import { sizes, views, statuses, forms } from './textConstants'
import { useItemsHandlers } from './ItemsService'
import { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Text } from '@consta/uikit/Text'
import { Switch } from '@consta/uikit/Switch'
import { icons } from '../IconSettings/IconsConstants'
import { Icons, BadgeElement, BadgeProps } from '../../../../coreTypes'

type BadgeSettingsType = {
  selectedElementProps: BadgeProps
  selectedElement: BadgeElement
}

export const BadgeSettings: FC<BadgeSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const { itemsProps, onChangeSwitch, onChangeIconLeft, handleOnChangeLabel, onChangeField } =
    useItemsHandlers(selectedElementProps, selectedElement)

  return (
    <div className={styles.badgeSettings}>
      {itemsProps ? (
        <>
          <TextField
            size='xs'
            label='Текст'
            value={itemsProps.label}
            onChange={handleOnChangeLabel}
          />
          <div className={styles.rowSettings}>
            <Select
              className={styles.widthFlex}
              getItemKey={(item: string) => item}
              getItemLabel={(item: string) => item}
              items={sizes}
              label='Размер'
              size='xs'
              value={itemsProps.size || 's'}
              onChange={({ value }) => onChangeField(value, 'size')}
            />
            <div className={styles.columnSettings}>
              <Text view='secondary' size='xs'>
                Вид
              </Text>
              <ChoiceGroup
                value={itemsProps.view}
                items={views}
                size='xs'
                view='ghost'
                getItemLabel={(item: string) => item}
                name='ChoiceGroupExample'
                onChange={({ value }) => onChangeField(value, 'view')}
              />
            </div>
          </div>
          <div className={styles.rowSettings}>
            <div className={styles.columnSettings}>
              <Text view='secondary' size='xs'>
                Форма углов
              </Text>
              <ChoiceGroup
                value={itemsProps.form}
                onChange={({ value }) => onChangeField(value, 'form')}
                items={forms}
                size='xs'
                view='ghost'
                getItemLabel={(item: string) => item}
                name='ChoiceGroupExample'
              />
            </div>
            <Select
              className={styles.widthFlex}
              getItemKey={(item: string) => item}
              getItemLabel={(item: string) => item}
              items={statuses}
              label='Статус'
              size='xs'
              value={itemsProps.status || 'success'}
              onChange={({ value }) => onChangeField(value, 'status')}
            />
          </div>
          <Switch
            checked={!!itemsProps.iconLeft}
            label='Икона слева'
            size='xs'
            onChange={onChangeSwitch('iconLeft')}
          />
          <Select
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={icons}
            disabled={!itemsProps.iconLeft}
            size='xs'
            value={itemsProps.iconLeft}
            onChange={({ value }) => {
              onChangeIconLeft(value)
            }}
            renderItem={({ item, active, onClick, onMouseEnter }) => (
              <div
                className={styles.icon}
                role='option'
                aria-selected={active}
                onMouseEnter={onMouseEnter}
                onClick={onClick}>
                {React.createElement(Icons[item], { size: 'xs' })}
                <Text size='xs'>{item}</Text>
              </div>
            )}
          />
          <Switch
            label='Minified'
            size='xs'
            checked={itemsProps.minified}
            onChange={onChangeSwitch('minified')}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

import styles from './styles.module.css'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import {
  sizes,
  views,
  forms,
  horizontalSpace,
  iconView,
  directionIcon,
  closeDirectionIcon,
} from './textConstants'
import { useItemsHandlers } from './ItemsService'
import { Switch } from '@consta/uikit/Switch'
import { icons } from '../IconSettings/IconsConstants'
import { iconNames } from '../../../../store/formElements/iconTypes'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import React from 'react'
import {
  CollapsePropSize,
  CollapsePropHorizontalSpace,
  CollapseIconPropDirection,
  CollapsePropView,
} from '@consta/uikit/Collapse'
import { ListPropForm } from '@consta/uikit/ListCanary'

export const CollapseSettings = () => {
  const { itemsProps, onChangeField } = useItemsHandlers()

  return (
    <div className={styles.CollapseSettings}>
      {itemsProps ? (
        <>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='Size'
            value={itemsProps.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as CollapsePropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={forms}
            label='Form'
            value={itemsProps.form || 'default'}
            onChange={({ value }) => {
              onChangeField(value as ListPropForm, 'form')
            }}
          />
          <TextField
            label='label'
            value={itemsProps.label}
            onChange={({ value }) => {
              onChangeField(value as string, 'label')
            }}
          />
          <TextField
            label='children'
            value={itemsProps.children}
            onChange={({ value }) => {
              onChangeField(value as string, 'children')
            }}
          />
          <TextField
            type='number'
            label='maxHeight'
            value={`${itemsProps.maxHeight}`}
            onChange={({ value }) => {
              onChangeField(value as string, 'maxHeight')
            }}
          />
          <Switch
            label='hoverEffect'
            checked={itemsProps.hoverEffect}
            onChange={({ checked }) => {
              onChangeField(checked, 'hoverEffect')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='view'
            value={itemsProps.view || 'clear'}
            onChange={({ value }) => {
              onChangeField(value as CollapsePropView, 'view')
            }}
          />
          <Select
            getItemKey={item => item || ''}
            getItemLabel={item => item || ''}
            items={horizontalSpace}
            label='horizontalSpace'
            value={itemsProps.horizontalSpace || ''}
            onChange={({ value }) => {
              onChangeField(value as CollapsePropHorizontalSpace, 'horizontalSpace')
            }}
          />
          <Select
            getItemKey={(item: string) => item || ''}
            getItemLabel={(item: string) => item || ''}
            items={iconView}
            label='iconView'
            value={itemsProps.iconView || 'clear'}
            onChange={({ value }) => {
              onChangeField(value as 'clear' | 'ghost', 'iconView')
            }}
          />
          <Switch
            label='divider'
            checked={itemsProps.divider}
            onChange={({ checked }) => {
              onChangeField(checked, 'divider')
            }}
          />
          <Switch
            label='rightSide'
            checked={itemsProps.rightSide}
            onChange={({ checked }) => {
              onChangeField(checked, 'rightSide')
            }}
          />
          <Select
            getItemKey={(item: string) => item || ''}
            getItemLabel={(item: string) => item || ''}
            items={directionIcon}
            label='directionIcon'
            value={itemsProps.directionIcon || 'up'}
            onChange={({ value }) => {
              onChangeField(value as CollapseIconPropDirection, 'directionIcon')
            }}
          />
          <Select
            getItemKey={(item: string) => item || ''}
            getItemLabel={(item: string) => item || ''}
            items={closeDirectionIcon}
            label='closeDirectionIcon'
            value={itemsProps.closeDirectionIcon || 'down'}
            onChange={({ value }) => {
              onChangeField(value as CollapseIconPropDirection, 'closeDirectionIcon')
            }}
          />
          <Switch
            label='withCustomIcon'
            checked={itemsProps.withCustomIcon}
            onChange={({ checked }) => {
              onChangeField(checked, 'withCustomIcon')
            }}
          />
          {itemsProps.withCustomIcon && (
            <Select
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={icons}
              label='icons'
              value={itemsProps.icon}
              onChange={({ value }) => {
                onChangeField(value as iconNames, 'icon')
              }}
              renderItem={({ item, active, onClick, onMouseEnter }) => (
                <div
                  style={{ display: 'flex', alignItems: 'center' }}
                  role='option'
                  aria-selected={active}
                  onMouseEnter={onMouseEnter}
                  onClick={onClick}>
                  {React.createElement(Icons[item])}
                  <div>{item}</div>
                </div>
              )}
            />
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

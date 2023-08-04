import React from 'react'
import styles from './styles.module.css'
import { Select } from '@consta/uikit/Select'
import { ButtonPropForm, ButtonPropSize, ButtonPropView } from '@consta/uikit/Button'
import { forms, sizes, views } from './UserConstants'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'
import { useItemsHandlers } from './ItemsService'
import { icons } from '../IconSettings/IconsConstants'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import { FilledSettings } from '../FilledSettings'

export const ButtonSettings = () => {
  const { itemsProps, onChangeField, onChangeSwitch, onChangeIcon, onChangeIconR } =
    useItemsHandlers()

  return (
    <div className={styles.buttonPropsSettings}>
      {itemsProps ? (
        <>
          <div className={styles.blockIcon}>
            <TextField
              label='Текст'
              type='text'
              size='xs'
              value={itemsProps.label as string}
              onChange={({ value }) => onChangeField(value as string, 'label')}
            />
            <div className={styles.rowSettings}>
              <Select
                getItemKey={(item: string | undefined) => item || ''}
                getItemLabel={(item: string | undefined) => item || ''}
                items={sizes}
                label='Размер'
                size='xs'
                value={itemsProps.size || 's'}
                onChange={({ value }) => {
                  onChangeField(value as ButtonPropSize, 'size')
                }}
              />
              <FilledSettings />
            </div>
            <div className={styles.rowSettings}>
              <Select
                getItemKey={(item: string | undefined) => item || ''}
                getItemLabel={(item: string | undefined) => item || ''}
                items={views}
                label='Вид'
                size='xs'
                value={itemsProps.view}
                onChange={({ value }) => {
                  onChangeField(value as ButtonPropView, 'view')
                }}
              />
              <Select
                getItemKey={(item: string | undefined) => item || ''}
                getItemLabel={(item: string | undefined) => item || ''}
                items={forms}
                label='Форма'
                size='xs'
                value={itemsProps.form}
                onChange={({ value }) => {
                  onChangeField(value as ButtonPropForm, 'form')
                }}
              />
            </div>
            <Switch
              checked={itemsProps.loading ?? false}
              label='Состояние загрузки'
              size='xs'
              onChange={onChangeSwitch('loading')}
            />
            <Switch
              checked={itemsProps.disabled ?? false}
              label='Состояние блокировки'
              size='xs'
              onChange={onChangeSwitch('disabled')}
            />
          </div>
          <div className={styles.blockIcon}>
            <div className={styles.rowSettings}>
              <div className={styles.columnSettings}>
                <Switch
                  checked={!!itemsProps.iconLeft}
                  label='Иконка слева'
                  size='xs'
                  onChange={onChangeSwitch('iconLeft')}
                />
                <Select
                  getItemKey={(item: string | undefined) => item || ''}
                  getItemLabel={(item: string | undefined) => item || ''}
                  items={icons}
                  size='xs'
                  disabled={!!itemsProps.iconLeft ? false : true}
                  value={itemsProps.icon}
                  onChange={({ value }) => {
                    onChangeIcon(value)
                  }}
                  renderItem={({ item, active, onClick, onMouseEnter }) => (
                    <div
                      className={styles.renderIcon}
                      role='option'
                      aria-selected={active}
                      onMouseEnter={onMouseEnter}
                      onClick={onClick}>
                      {React.createElement(Icons[item])}
                      <div>{item}</div>
                    </div>
                  )}
                />
              </div>
              <div className={styles.columnSettings}>
                <Switch
                  checked={!!itemsProps.iconRight}
                  label='Иконка справа'
                  size='xs'
                  onChange={onChangeSwitch('iconRight')}
                />
                <Select
                  getItemKey={(item: string | undefined) => item || ''}
                  getItemLabel={(item: string | undefined) => item || ''}
                  items={icons}
                  size='xs'
                  disabled={!!itemsProps.iconRight ? false : true}
                  value={itemsProps.iconR}
                  onChange={({ value }) => {
                    onChangeIconR(value)
                  }}
                  renderItem={({ item, active, onClick, onMouseEnter }) => (
                    <div
                      className={styles.renderIcon}
                      role='option'
                      aria-selected={active}
                      onMouseEnter={onMouseEnter}
                      onClick={onClick}>
                      {React.createElement(Icons[item])}
                      <div>{item}</div>
                    </div>
                  )}
                />
              </div>
            </div>
            <div>
              <Switch
                checked={itemsProps.onlyIcon ?? false}
                label='Только иконка'
                size='xs'
                onChange={onChangeSwitch('onlyIcon')}
              />
              <Select
                getItemKey={(item: string | undefined) => item || ''}
                getItemLabel={(item: string | undefined) => item || ''}
                items={icons}
                size='xs'
                disabled={!itemsProps.onlyIcon}
                value={itemsProps.icon}
                onChange={({ value }) => {
                  onChangeIcon(value)
                }}
                renderItem={({ item, active, onClick, onMouseEnter }) => (
                  <div
                    className={styles.renderIcon}
                    role='option'
                    aria-selected={active}
                    onMouseEnter={onMouseEnter}
                    onClick={onClick}>
                    {React.createElement(Icons[item])}
                    <div>{item}</div>
                  </div>
                )}
              />
            </div>
          </div>
          <Switch
            className={styles.modalPadding}
            checked={itemsProps.activeAction ?? false}
            label='Модальное окно при нажатии'
            size='xs'
            onChange={onChangeSwitch('activeAction')}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

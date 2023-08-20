import { buttonActions, ButtonProps } from '../../../../coreTypes'
import React, { FC } from 'react'
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
import { Text } from '@consta/uikit/Text'
import { ButtonElement } from '../../../../coreTypes/buttonTypes'

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
    onChangeField,
    onChangeSwitch,
    onChangeButtonAction,
    onChangeIcon,
    onChangeIconR,
  } = useItemsHandlers(selectedElementProps, selectedElement)

  return (
    <div className={styles.buttonPropsSettings}>
      {itemsProps ? (
        <>
          <div className={styles.blockIcon}>
            <TextField
              label='Текст'
              type='text'
              size='xs'
              value={`${itemsProps.label}`}
              onChange={({ value }) => onChangeField(value, 'label')}
            />
            <div className={styles.rowSettings}>
              <Select
                className={styles.sizeFlex}
                getItemKey={(item: string) => item}
                getItemLabel={(item: string) => item}
                items={sizes}
                label='Размер'
                size='xs'
                value={itemsProps.size || 's'}
                onChange={({ value }) => {
                  onChangeField(value, 'size')
                }}
              />
              <FilledSettings />
            </div>
            <div className={styles.rowSettings}>
              <Select
                getItemKey={(item: string) => item}
                getItemLabel={(item: string) => item}
                items={views}
                label='Вид'
                size='xs'
                value={itemsProps.view}
                onChange={({ value }) => {
                  onChangeField(value, 'view')
                }}
              />
              <Select
                getItemKey={(item: string) => item}
                getItemLabel={(item: string) => item}
                items={forms}
                label='Форма'
                size='xs'
                value={itemsProps.form}
                onChange={({ value }) => {
                  onChangeField(value, 'form')
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
                  checked={!!itemsProps.icon}
                  label='Иконка слева'
                  size='xs'
                  onChange={onChangeSwitch('icon')}
                />
                <Select
                  getItemKey={(item: string) => item}
                  getItemLabel={(item: string) => item}
                  items={icons}
                  size='xs'
                  disabled={!!itemsProps.icon ? false : true}
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
                      {React.createElement(Icons[item], { size: 'xs' })}
                      <Text size='xs'>{item}</Text>
                    </div>
                  )}
                />
              </div>
              <div className={styles.columnSettings}>
                <Switch
                  checked={!!itemsProps.iconR}
                  label='Иконка справа'
                  size='xs'
                  onChange={onChangeSwitch('iconR')}
                />
                <Select
                  getItemKey={(item: string) => item}
                  getItemLabel={(item: string) => item}
                  items={icons}
                  size='xs'
                  disabled={!!itemsProps.iconR ? false : true}
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
                      {React.createElement(Icons[item], { size: 'xs' })}
                      <Text size='xs'>{item}</Text>
                    </div>
                  )}
                />
              </div>
            </div>
            <div>
              <Switch
                checked={itemsProps.onlyIcon}
                label='Только иконка'
                size='xs'
                onChange={onChangeSwitch('onlyIcon')}
              />
              <Select
                getItemKey={(item: string) => item}
                getItemLabel={(item: string) => item}
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
                    {React.createElement(Icons[item], { size: 'xs' })}
                    <Text size='xs'>{item}</Text>
                  </div>
                )}
              />
            </div>
          </div>
          <Switch
            className={styles.modalPadding}
            checked={itemsProps.activeAction}
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

import styles from './styles.module.css'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import { useItemsHandlers } from './ItemsService'
import { sizes, statuses, views } from './CheckBoxConstants'
import {
  Checkbox,
  CheckboxPropAlign,
  CheckboxPropSize,
  CheckboxPropView,
} from '@consta/uikit/Checkbox'
import { FC } from 'react'
import { CheckboxElement, CheckboxProps } from '../../../../coreTypes/checkboxTypes'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Text } from '@consta/uikit/Text'
import { Switch } from '@consta/uikit/Switch'

type CheckboxSettingsType = {
  selectedElementProps: CheckboxProps
  selectedElement: CheckboxElement
}

export const CheckboxSettings: FC<CheckboxSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeField, onChangeSwitch } = useItemsHandlers(
    selectedElementProps,
    selectedElement,
  )

  return (
    <div className={styles.checkboxSettings}>
      {itemsProps ? (
        <>
          <TextField
            label='Текст'
            size='xs'
            value={itemsProps.label}
            onChange={({ value }) => {
              onChangeField(value, 'label')
            }}
          />
          <div className={styles.rowSettings}>
            <Select
              className={styles.widthFlex}
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={sizes}
              label='Размер'
              size='xs'
              value={itemsProps.size || 's'}
              onChange={({ value }) => {
                onChangeField(value, 'size')
              }}
            />
            <div className={styles.columnInRowSettings}>
              <Text size='xs' view='secondary'>
                Вид
              </Text>
              <ChoiceGroup
                items={views}
                value={itemsProps.view}
                getItemLabel={(item: string | undefined) => item || ''}
                name='ChoiceGroupExample'
                size='xs'
                view='ghost'
                onChange={({ value }) => {
                  onChangeField(value, 'view')
                }}
              />
            </div>
          </div>
          <div className={styles.columnSettings}>
            <Text size='xs' view='secondary'>
              Выравнивание
            </Text>
            <ChoiceGroup
              items={statuses}
              value={itemsProps.align}
              getItemLabel={(item: string | undefined) => item || ''}
              name='ChoiceGroupExample'
              size='xs'
              view='ghost'
              onChange={({ value }) => {
                onChangeField(value, 'align')
              }}
            />
          </div>
          <Switch
            checked={itemsProps.checked}
            label='Активен'
            size='xs'
            onChange={onChangeSwitch('checked')}
          />
          <Switch
            checked={itemsProps.intermediate}
            label='intermediate'
            size='xs'
            onChange={onChangeSwitch('intermediate')}
          />
          <Switch
            checked={itemsProps.disabled}
            label='Состояние блокировки'
            size='xs'
            onChange={onChangeSwitch('disabled')}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

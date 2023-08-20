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

type CheckboxSettingsType = {
  selectedElementProps: CheckboxProps
  selectedElement: CheckboxElement
}

export const CheckboxSettings: FC<CheckboxSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeField } = useItemsHandlers(selectedElementProps, selectedElement)

  return (
    <div className={styles.badgeSettings}>
      {itemsProps ? (
        <>
          <Checkbox
            label='Checked'
            checked={itemsProps.checked}
            onClick={() => {
              onChangeField(!itemsProps.checked, 'checked')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='Size'
            value={itemsProps.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as CheckboxPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='View'
            value={itemsProps.view || 'primary'}
            onChange={({ value }) => {
              onChangeField(value as CheckboxPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={statuses}
            label='Align'
            value={itemsProps.align || 'center'}
            onChange={({ value }) => {
              onChangeField(value as CheckboxPropAlign, 'align')
            }}
          />
          <TextField
            label='label'
            value={itemsProps.label}
            onChange={({ value }) => {
              onChangeField(value as string, 'label')
            }}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

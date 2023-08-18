import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import styles from './styles.module.css'
import { TextField } from '@consta/uikit/TextField'
import { status, types, width, forms, sizes, view, labelPosition } from './TextFieldConstants'
import { useItemsHandlers } from './ItemsService'
import { TextFieldProps } from '../../../../coreTypes'
import { TextFieldElement } from '../../../../coreTypes/textFieldTypes'
import { FC } from 'react'

type TextFieldSettingsType = {
  selectedElementProps: TextFieldProps, 
  selectedElement: TextFieldElement,
}

export const TextFieldSettings: FC<TextFieldSettingsType> = ({selectedElementProps, selectedElement}) => {
  const { itemsProps, onChangeTextField, onChangeSwitch } = useItemsHandlers(selectedElementProps, selectedElement)

  return (
    <div className={styles.textFieldSettings}>
      {itemsProps ? (
        <>
          <Select
            getItemKey={key => key}
            getItemLabel={label => label}
            label='Type'
            items={types}
            value={`${itemsProps.type}`}
            onChange={onChangeTextField('type')}
          />
          {itemsProps.type === 'number' ? (
            <>
              <TextField
                onChange={onChangeTextField('step')}
                value={`${itemsProps.step}`}
                type='number'
                label='Step'
                min='0'
              />
              <Switch
                checked={itemsProps.incrementButtons ?? true}
                label='incrementButtons'
                onChange={onChangeSwitch('incrementButtons')}
              />
              <TextField
                onChange={onChangeTextField('min')}
                value={`${itemsProps.min}`}
                type='number'
                label='Min'
                min='0'
              />
              <TextField
                onChange={onChangeTextField('max')}
                value={`${itemsProps.max}`}
                type='number'
                label='Max'
                min='0'
              />
            </>
          ) : (
            <></>
          )}
          {itemsProps.type === 'textarea' ? (
            <>
              <TextField
                onChange={onChangeTextField('minRows')}
                value={`${itemsProps.minRows}`}
                type='number'
                label='MinRows'
                min='0'
              />
              <TextField
                onChange={onChangeTextField('maxRows')}
                value={`${itemsProps.maxRows}`}
                type='number'
                label='MaxRows'
                min='0'
              />
            </>
          ) : (
            <></>
          )}
          <Select
            getItemKey={key => key}
            label='Width'
            getItemLabel={label => label}
            items={width}
            value={`${itemsProps.width}`}
            onChange={onChangeTextField('width')}
          />
          <Select
            getItemKey={key => key}
            label='Form'
            getItemLabel={label => label}
            items={forms}
            value={`${itemsProps.form}`}
            onChange={onChangeTextField('form')}
          />
          <Select
            getItemKey={key => key}
            label='Status'
            getItemLabel={label => label}
            items={status}
            value={`${itemsProps.status}`}
            onChange={onChangeTextField('status')}
          />
          <Select
            getItemKey={key => key}
            getItemLabel={label => label}
            items={sizes}
            label='Size'
            value={`${itemsProps.size || 's'}`}
            onChange={onChangeTextField('size')}
          />
          <Select
            getItemKey={key => key}
            label='View'
            getItemLabel={label => label}
            items={view}
            value={`${itemsProps.view}`}
            onChange={onChangeTextField('view')}
          />
          <Switch
            checked={itemsProps.disabled ?? false}
            label='disabled'
            onChange={onChangeSwitch('disabled')}
          />
          <Switch
            checked={itemsProps.required ?? false}
            label='required'
            onChange={onChangeSwitch('required')}
          />
          <Switch
            checked={itemsProps.withClearButton ?? false}
            label='withClearButton'
            onChange={onChangeSwitch('withClearButton')}
          />
          <TextField
            label='Caption'
            value={`${itemsProps.caption || ''}`}
            onChange={onChangeTextField('caption')}
          />
          <TextField
            label='Label'
            value={`${itemsProps.label || ''}`}
            onChange={onChangeTextField('label')}
          />
          <Select
            getItemKey={key => key}
            label='LabelPosition'
            getItemLabel={label => label}
            items={labelPosition}
            value={`${itemsProps.labelPosition}`}
            onChange={onChangeTextField('labelPosition')}
          />
          <TextField
            onChange={onChangeTextField('maxLength')}
            value={`${itemsProps.maxLength}`}
            type='number'
            label='MaxLength'
            min='0'
          />
          <TextField
            label='Placeholder'
            value={`${itemsProps.placeholder || ''}`}
            onChange={onChangeTextField('placeholder')}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

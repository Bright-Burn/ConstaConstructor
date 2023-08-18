import styles from './styles.module.css'
import { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { Checkbox } from '@consta/uikit/Checkbox'
import { TextField } from '@consta/uikit/TextField'
import {
  TextPropView,
  TextPropSize,
  TextPropAlign,
  TextPropWeight,
  TextPropLineHeight,
  TextPropSpacing,
  TextPropDisplay,
  TextPropFont,
  TextPropType,
} from '@consta/uikit/Text'
import { Switch } from '@consta/uikit/Switch'
import {
  font,
  textAlign,
  weight,
  lineHeight,
  views,
  sizes,
  type,
  spacing,
  display,
} from './textConstants'
import { useItemsHandlers } from './ItemsService'
import { FormElementDictTypes, TextElementProps } from '../../../../coreTypes'
import { TextElement } from '../../../../coreTypes/textTypes'

type TextSettingsType = {
  selectedProps: TextElementProps, 
  selectedElement: TextElement,
}

export const TextSettings: FC<TextSettingsType> = ({ selectedProps, selectedElement }) => {
  const { itemsProps, onChangeText, onChangeCheckboxValues, onChangeTruncate, onChangeField } =
    useItemsHandlers(selectedProps, selectedElement)
    
  return (
    <div className={styles.textSettings}>
      {itemsProps ? (
        <>
          <TextField
            label='Content'
            value={itemsProps.content}
            onChange={onChangeText('content')}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='Size'
            value={itemsProps.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as TextPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='View'
            value={itemsProps.view}
            onChange={({ value }) => {
              onChangeField(value as TextPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={textAlign}
            label='Align'
            value={itemsProps.align}
            onChange={({ value }) => {
              onChangeField(value as TextPropAlign, 'align')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={weight}
            label='Weight'
            value={itemsProps.weight}
            onChange={({ value }) => {
              onChangeField(value as TextPropWeight, 'weight')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={lineHeight}
            label='LineHeight'
            value={itemsProps.lineHeight}
            onChange={({ value }) => {
              onChangeField(value as TextPropLineHeight, 'lineHeight')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={spacing}
            label='Spacing'
            value={itemsProps.spacing}
            onChange={({ value }) => {
              onChangeField(value as TextPropSpacing, 'spacing')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={display}
            label='Display'
            value={itemsProps.display}
            onChange={({ value }) => {
              onChangeField(value as TextPropDisplay, 'display')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={font}
            label='Font'
            value={itemsProps.font}
            onChange={({ value }) => {
              onChangeField(value as TextPropFont, 'font')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={type}
            label='Type'
            value={itemsProps.type}
            onChange={({ value }) => {
              onChangeField(value as TextPropType, 'type')
            }}
          />
          <Checkbox
            label='decoration'
            checked={itemsProps.decoration !== undefined}
            onChange={value => {
              onChangeCheckboxValues(value, 'decoration')
            }}
          />
          <Checkbox
            label='fontStyle'
            checked={itemsProps.fontStyle !== undefined}
            onChange={value => {
              onChangeCheckboxValues(value, 'fontStyle')
            }}
          />
          <Checkbox
            label='cursor'
            checked={itemsProps.cursor !== undefined}
            onChange={value => {
              onChangeCheckboxValues(value, 'cursor')
            }}
          />
          <Checkbox
            label='transform'
            checked={itemsProps.transform !== undefined}
            onChange={value => {
              onChangeCheckboxValues(value, 'transform')
            }}
          />

          <Switch
            checked={itemsProps.truncate ?? false}
            label='truncate'
            onChange={onChangeTruncate}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

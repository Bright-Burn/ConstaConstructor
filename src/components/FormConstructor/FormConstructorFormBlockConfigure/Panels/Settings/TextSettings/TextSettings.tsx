import type { FC } from 'react'
import { useState } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Collapse } from '@consta/uikit/Collapse'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { textDecorationType, TextElement, TextElementProps } from '../../../../coreTypes'

import { useItemsHandlers } from './ItemsService'
import {
  lineHeight,
  sizes,
  spacing,
  textAlign,
  transformText,
  views,
  weight,
} from './textConstants'

import styles from './styles.module.css'

type TextSettingsType = {
  selectedProps: TextElementProps
  selectedElement: TextElement
}

export const TextSettings: FC<TextSettingsType> = ({ selectedProps, selectedElement }) => {
  const [refactorValue, setRefactorValue] = useState<textDecorationType[] | null>([])
  const [isOpen, setOpen] = useState<boolean>(false)

  const { itemsProps, onChangeText, onChangeSwitch, onChangeField, onChangeItems } =
    useItemsHandlers(selectedProps, selectedElement)

  const onRefactorValueLabelEdit = (value: textDecorationType[] | null) => {
    setRefactorValue(value)
    if (value) {
      onChangeItems(value)
    } else {
      onChangeItems(undefined)
    }
  }

  return (
    <div className={styles.textSettings}>
      <TextField
        type="textarea"
        label="Текст"
        size="xs"
        value={itemsProps.content}
        onChange={onChangeText('content')}
      />
      <div className={styles.rowSettings}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={sizes}
          className={styles.widthFlex}
          label="Размер"
          size="xs"
          value={itemsProps.size || 's'}
          onChange={({ value }) => {
            onChangeField(value, 'size')
          }}
        />
        <div className={styles.columnSettings}>
          <Text size="xs" view="secondary">
            Выравнивание
          </Text>
          <ChoiceGroup
            value={itemsProps.align}
            items={textAlign}
            getItemLabel={item => item.name}
            size="xs"
            view="ghost"
            onlyIcon={true}
            name="ChoiceGroupExample"
            onChange={({ value }) => {
              onChangeField(value, 'align')
            }}
          />
        </div>
      </div>
      <div className={styles.rowSettings}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={weight}
          label="Толщина"
          size="xs"
          value={itemsProps.weight}
          onChange={({ value }) => {
            onChangeField(value, 'weight')
          }}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={views}
          label="Вид"
          size="xs"
          value={itemsProps.view}
          onChange={({ value }) => {
            onChangeField(value, 'view')
          }}
        />
      </div>
      <Collapse
        size="xs"
        label="Кастомные настройки"
        isOpen={isOpen}
        onClick={() => {
          setOpen(!isOpen)
        }}>
        <div className={styles.rowSettings}>
          <Select
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={lineHeight}
            label="Высота строки"
            size="xs"
            value={itemsProps.lineHeight}
            onChange={({ value }) => {
              onChangeField(value, 'lineHeight')
            }}
          />
          <Select
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={spacing}
            label="Отступ между буквами"
            size="xs"
            value={itemsProps.spacing}
            onChange={({ value }) => {
              onChangeField(value, 'spacing')
            }}
          />
        </div>
        <div className={`${styles.columnSettings} paddingCollapse`}>
          <Text className={styles.paddingCollapse} color="color-primary" size="xs" view="secondary">
            Преобразование текста
          </Text>
          <ChoiceGroup
            value={refactorValue}
            items={transformText}
            getItemLabel={item => item.name || ''}
            getItemIcon={item => item.icon}
            multiple={true}
            onlyIcon={true}
            name="ChoiceGroupExampleIcon"
            size="xs"
            view="ghost"
            onChange={({ value }) => {
              onRefactorValueLabelEdit(value)
            }}
          />
        </div>
        <div className={styles.columnSettings}>
          <Switch
            checked={itemsProps.font === 'mono'}
            className={styles.paddingCollapse}
            label="Моно шрифт"
            size="xs"
            onChange={onChangeSwitch('font')}
          />
          <Switch
            checked={!!itemsProps.cursor}
            className={styles.paddingCollapse}
            label="Курсор при наведении"
            size="xs"
            onChange={onChangeSwitch('cursor')}
          />
          <Switch
            checked={itemsProps.truncate ?? false}
            className={styles.paddingCollapse}
            label="В одну строчку (многоточие)"
            size="xs"
            onChange={onChangeSwitch('truncate')}
          />
        </div>
      </Collapse>
    </div>
  )
}

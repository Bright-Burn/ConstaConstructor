import type { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Select } from '@consta/uikit/Select'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { InformerElementProps } from '../../../../coreTypes'
import type { InformerElement } from '../../../../coreTypes/informerTypes'

import { sizes, statuses, views } from './InformerConstants'
import { useItemsHandlers } from './ItemsService'

import styles from './styles.module.css'

type InformerSettingsType = {
  selectedElementProps: InformerElementProps
  selectedElement: InformerElement
}

export const InformerSettings: FC<InformerSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeField } = useItemsHandlers(selectedElementProps, selectedElement)

  return (
    <div className={styles.informerSettings}>
      {itemsProps ? (
        <>
          <div className={styles.rowSettings}>
            <Select
              className={styles.widthFlex}
              getItemKey={(item: string) => item}
              getItemLabel={(item: string) => item}
              items={sizes}
              size="xs"
              label="Размер"
              value={itemsProps.size || 's'}
              onChange={({ value }) => {
                onChangeField(value, 'size')
              }}
            />
            <div className={styles.columnSettings}>
              <Text view="secondary" size="xs">
                Вид
              </Text>
              <ChoiceGroup
                getItemLabel={(item: string) => item}
                items={views}
                name="ChoiceGroupExample"
                size="xs"
                width="full"
                view="ghost"
                value={itemsProps.view}
                onChange={({ value }) => {
                  onChangeField(value, 'view')
                }}
              />
            </div>
          </div>
          <div>
            <Text view="secondary" size="xs">
              Статус
            </Text>
            <ChoiceGroup
              getItemLabel={(item: string) => item}
              items={statuses}
              name="ChoiceGroupExample"
              size="xs"
              width="full"
              view="ghost"
              value={itemsProps.status}
              onChange={({ value }) => {
                onChangeField(value, 'status')
              }}
            />
          </div>
          <TextField
            value={itemsProps.label}
            label="Текст заголовка"
            size="xs"
            onChange={({ value }) => {
              onChangeField(value, 'label')
            }}
          />
          <TextField
            type="textarea"
            value={itemsProps.title}
            label="Текст контента"
            size="xs"
            minRows={4}
            onChange={({ value }) => {
              onChangeField(value, 'title')
            }}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

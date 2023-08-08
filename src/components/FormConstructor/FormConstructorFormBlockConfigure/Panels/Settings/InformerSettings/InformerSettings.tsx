import styles from './styles.module.css'
import { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import { useItemsHandlers } from './ItemsService'
import { sizes, views, statuses } from './InformerConstants'
import { InformerElementProps } from '../../../../coreTypes'
import { InformerElement } from '../../../../coreTypes/informerTypes'
import { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Text } from '@consta/uikit/Text'

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
              getItemKey={(item: string | undefined) => item || ''}
              getItemLabel={(item: string | undefined) => item || ''}
              items={sizes}
              size='xs'
              label='Размер'
              value={itemsProps.size || 's'}
              onChange={({ value }: { value: InformerPropSize | null }) => {
                onChangeField(value, 'size')
              }}
            />
            <div className={styles.columnSettings}>
              <Text view='secondary' size='xs'>
                Вид
              </Text>
              <ChoiceGroup
                getItemLabel={(item: string | undefined) => item || ''}
                items={views}
                name='ChoiceGroupExample'
                size='xs'
                width='full'
                view='ghost'
                value={itemsProps.view}
                onChange={({ value }: { value: InformerPropView | null }) => {
                  onChangeField(value, 'view')
                }}
              />
            </div>
          </div>
          <div>
            <Text view='secondary' size='xs'>
              Статус
            </Text>
            <ChoiceGroup
              getItemLabel={(item: string | undefined) => item || ''}
              items={statuses}
              name='ChoiceGroupExample'
              size='xs'
              width='full'
              view='ghost'
              value={itemsProps.status}
              onChange={({ value }: { value: InformerPropStatus | null }) => {
                onChangeField(value, 'status')
              }}
            />
          </div>
          <TextField
            value={itemsProps.label}
            label='Текст заголовка'
            size='xs'
            onChange={({ value }: { value: string | null }) => {
              onChangeField(value, 'label')
            }}
          />
          <TextField
            type='textarea'
            value={itemsProps.title}
            label='Текст контента'
            size='xs'
            minRows={4}
            onChange={({ value }: { value: string | null }) => {
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

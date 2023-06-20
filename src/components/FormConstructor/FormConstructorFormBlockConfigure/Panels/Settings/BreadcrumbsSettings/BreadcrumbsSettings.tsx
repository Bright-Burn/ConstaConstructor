import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { FC, useLayoutEffect, useState } from 'react'
import { BreadcrumbProps } from '../../../../store/formElements/BreadcrumbsTypes'
import { Select } from '@consta/uikit/Select'
import { fitMode, sizes } from './BreadcrumbsConstants'
import { IconPropSize } from '@consta/uikit/Icon'
import { Switch } from '@consta/uikit/Switch'
import { TabsPropFitMode } from '@consta/uikit/Tabs'
import { DefaultItem } from '@consta/uikit/Breadcrumbs'
import { useItemsHandlers } from './ItemsService'
import { Button } from '@consta/uikit/Button'
import { TextField } from '@consta/uikit/TextField'

export const BreadcrumbsSettings: FC = () => {
  const { itemsProps, onChangeItemsCount, onChangeItems, onChangeField } = useItemsHandlers()
  const [pages, setPages] = useState<DefaultItem[]>(itemsProps.items)
  const [isLabelsEditing, setIsLabelsEditing] = useState<boolean>(false)
  const labelsEditingHandler = (value: boolean) => {
    setPages(itemsProps.items)
    setIsLabelsEditing(value)
  }
  const applyNewTabs = () => {
    onChangeItems(pages)
    setIsLabelsEditing(false)
  }
  const onTabLabelEdit = (value: string | null, index: number) => {
    const newPages = [...pages]
    newPages[index] = { ...newPages[index], label: `${value}` }
    setPages([...newPages])
  }
  return (
    <div className={styles.BreadcrumbsSettings}>
      {!isLabelsEditing && (
        <>
          <TextField
            label='Количество страниц'
            type='number'
            value={`${itemsProps.items.length}`}
            onChange={onChangeItemsCount}
          />
          <Button
            view='secondary'
            className='m-b-xs m-t-xs'
            label={'Сменить названия страниц'}
            onClick={() => labelsEditingHandler(true)}
          />
        </>
      )}
      {isLabelsEditing && (
        <>
          {pages.map((page, index) => {
            return (
              <TextField
                key={index}
                label={`${index + 1}`}
                value={`${page.label}`}
                onChange={event => onTabLabelEdit(event.value, index)}
              />
            )
          })}
          <Button
            size='xs'
            className='m-b-xs m-t-xs'
            label='Применить'
            onClick={() => applyNewTabs()}
          />
          <Button size='xs' label='Отменить' onClick={() => labelsEditingHandler(false)} />
        </>
      )}
      <>
        <Select
          getItemKey={(item: string | undefined) => item || ''}
          getItemLabel={(item: string | undefined) => item || ''}
          items={sizes}
          label='size'
          value={itemsProps.size}
          onChange={({ value }) => {
            onChangeField(value as IconPropSize, 'size')
          }}
        />
        <Select
          getItemKey={(item: string | undefined) => item || ''}
          getItemLabel={(item: string | undefined) => item || ''}
          items={fitMode}
          label='fitMode'
          value={itemsProps.fitMode}
          onChange={({ value }) => {
            onChangeField(value as TabsPropFitMode, 'fitMode')
          }}
        />
      </>
    </div>
  )
}

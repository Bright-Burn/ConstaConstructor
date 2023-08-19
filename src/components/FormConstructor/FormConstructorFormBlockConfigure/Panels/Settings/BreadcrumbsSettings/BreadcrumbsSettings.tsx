import styles from './styles.module.css'
import { FC, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { fitMode, sizes } from './BreadcrumbsConstants'
import { DefaultItem } from '@consta/uikit/Breadcrumbs'
import { useItemsHandlers } from './ItemsService'
import { Button } from '@consta/uikit/Button'
import { TextField } from '@consta/uikit/TextField'
import { BreadcrumbProps, BreadcrumbsFormElement, DeepWriteable } from '../../../../coreTypes'

type BreadcrumbSettingsType = {
  selectedElementProps: DeepWriteable<BreadcrumbProps>, 
  selectedElement: BreadcrumbsFormElement,
}

export const BreadcrumbsSettings: FC<BreadcrumbSettingsType> = ({selectedElementProps, selectedElement}) => {
  const { itemsProps, onChangeItemsCount, onChangeItems, onChangeSize, onChangeFitMode } =
    useItemsHandlers(selectedElementProps, selectedElement)

  const [pages, setPages] = useState<DeepWriteable<DefaultItem[]>>(itemsProps.items)
  const [isLabelsEditing, setIsLabelsEditing] = useState<boolean>(false)
  const labelsEditingHandler = (value: boolean) => {
    setPages(itemsProps.items)
    setIsLabelsEditing(value)
  }
  const applyNewPage = () => {
    onChangeItems(pages)
    setIsLabelsEditing(false)
  }
  const onPageLabelEdit = (value: string | null, index: number) => {
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
                onChange={event => onPageLabelEdit(event.value, index)}
              />
            )
          })}
          <Button
            size='xs'
            className='m-b-xs m-t-xs'
            label='Применить'
            onClick={() => applyNewPage()}
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
            onChangeSize(value)
          }}
        />
        <Select
          getItemKey={(item: string | undefined) => item || ''}
          getItemLabel={(item: string | undefined) => item || ''}
          items={fitMode}
          label='fitMode'
          value={itemsProps.fitMode}
          onChange={({ value }) => {
            onChangeFitMode(value)
          }}
        />
      </>
    </div>
  )
}

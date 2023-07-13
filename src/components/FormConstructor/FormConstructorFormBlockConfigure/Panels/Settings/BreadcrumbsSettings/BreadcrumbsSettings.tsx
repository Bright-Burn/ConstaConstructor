import styles from './styles.module.css'
import React, { FC, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { fitMode, newDefaultItem, sizes } from './BreadcrumbsConstants'
import { useItemsHandlers } from './ItemsService'
import { Button } from '@consta/uikit/Button'
import { TextField } from '@consta/uikit/TextField'
import { icons } from '../IconSettings/IconsConstants'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import { iconNames } from '../../../../store/formElements/iconTypes'

export const BreadcrumbsSettings: FC = () => {
  const { itemsProps, onChangeItemsCount, onChangeItems, onChangeSize, onChangeFitMode } =
    useItemsHandlers()
  const [pages, setPages] = useState<newDefaultItem[]>(itemsProps.items)
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

  const onLinesIconEdit = (value: string | null, index: number) => {
    const newPage: newDefaultItem[] = [...pages]
    if (value !== null)
      (newPage[index] = {
        ...newPage[index],
        icon: Icons[value as iconNames],
        labelIcon: value,
      }),
        setPages([...newPage])
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
              <>
                <TextField
                  key={index}
                  label={`${index + 1}`}
                  value={`${page.label}`}
                  onChange={event => onPageLabelEdit(event.value, index)}
                />
                <Select
                  getItemKey={(item: string | undefined) => item || ''}
                  getItemLabel={(item: string | undefined) => item || ''}
                  items={icons}
                  label='icons'
                  value={page.labelIcon}
                  onChange={event => onLinesIconEdit(event.value, index)}
                  renderItem={({ item, active, onClick, onMouseEnter }) => (
                    <div
                      style={{ display: 'flex', alignItems: 'center' }}
                      role='option'
                      aria-selected={active}
                      onMouseEnter={onMouseEnter}
                      onClick={onClick}>
                      {React.createElement(Icons[item as iconNames])}
                      <div>{item}</div>
                    </div>
                  )}
                />
              </>
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

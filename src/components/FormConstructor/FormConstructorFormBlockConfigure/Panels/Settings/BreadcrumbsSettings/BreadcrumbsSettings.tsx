import styles from './styles.module.css'
import React, { FC, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { fitMode, sizes } from './BreadcrumbsConstants'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import {
  BreadcrumbProps,
  BreadcrumbsFormElement,
  DeepWriteable,
  Icons,
  IconNames,
} from '../../../../coreTypes'
import { Collapse } from '@consta/uikit/Collapse'
import { Switch } from '@consta/uikit/Switch'
import { icons } from '../IconSettings/IconsConstants'
import { Text } from '@consta/uikit/Text'
import { IconComponent } from '@consta/uikit/Icon'

type BreadcrumbSettingsType = {
  selectedElementProps: DeepWriteable<BreadcrumbProps>
  selectedElement: BreadcrumbsFormElement
}

export const BreadcrumbsSettings: FC<BreadcrumbSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeItemsCount, onChangeItems, onChangeSize, onChangeFitMode } =
    useItemsHandlers(selectedElementProps, selectedElement)

  const [isOpen, setOpen] = useState<boolean>(false)
  const [disabledPage, setDisabledPage] = useState<boolean>(false)

  const onPageLabelEdit = (value: string | null, index: number) => {
    const newPage = [...itemsProps.items]
    if (!value) newPage[index] = { ...newPage[index], label: `` }
    else newPage[index] = { ...newPage[index], label: `${value}` }
    onChangeItems(newPage)
  }

  const onDisabledPage = (value: boolean) => {
    const newPage = [...itemsProps.items].map(page => {
      const { icon, labelIcon, ...other } = page
      return other
    })

    onChangeItems(newPage)
    setDisabledPage(value)
  }
  // TODO убрать когда избавимся от DeepWriteable
  const iconComponentToDeepWriteable = (x: IconComponent) => x as DeepWriteable<IconComponent>

  const checkValueIsIconNames = (value: string): value is IconNames => {
    return value in Icons
  }

  const onPageIconEditLeft = (value: string | null, index: number) => {
    const newPage = [...itemsProps.items]
    if (value !== null && checkValueIsIconNames(value)) {
      newPage[index] = {
        ...newPage[index],
        labelIcon: value,
        icon: iconComponentToDeepWriteable(Icons[value]),
      }
    }
    onChangeItems(newPage)
  }

  return (
    <div className={styles.BreadcrumbsSettings}>
      <div className={styles.rowSettings}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={sizes}
          label='size'
          size='xs'
          value={itemsProps.size}
          onChange={({ value }) => onChangeSize(value)}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={fitMode}
          label='fitMode'
          size='xs'
          value={itemsProps.fitMode}
          onChange={({ value }) => onChangeFitMode(value)}
        />
      </div>
      <>
        <TextField
          label='Количество страниц'
          type='number'
          size='xs'
          value={`${itemsProps.items.length}`}
          onChange={onChangeItemsCount}
        />
        <Switch
          label='Иконки страниц'
          size='xs'
          checked={disabledPage}
          onChange={e => onDisabledPage(e.checked)}
        />
      </>
      <Collapse size='xs' label='Название страниц' isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        {itemsProps.items.map((page, index) => {
          return (
            <div className={styles.pagePadding}>
              <div className={styles.rowSettings}>
                <TextField
                  className={styles.flexWidth}
                  size='xs'
                  key={index}
                  label={`Страница ${index + 1}`}
                  value={`${page.label}`}
                  onChange={event => onPageLabelEdit(event.value, index)}
                />
                <Select
                  className={styles.iconAlign}
                  getItemKey={(item: string) => item}
                  getItemLabel={(item: string) => item}
                  items={icons}
                  disabled={!disabledPage}
                  size='xs'
                  value={page.labelIcon}
                  onChange={event => onPageIconEditLeft(event.value, index)}
                  renderItem={({ item, active, onClick, onMouseEnter }) => (
                    <div
                      className={styles.icon}
                      role='option'
                      aria-selected={active}
                      onMouseEnter={onMouseEnter}
                      onClick={onClick}
                    >
                      {checkValueIsIconNames(item) &&
                        React.createElement(Icons[item], { size: 'xs' })}
                      <Text size='xs'>{item}</Text>
                    </div>
                  )}
                />
              </div>
            </div>
          )
        })}
      </Collapse>
    </div>
  )
}

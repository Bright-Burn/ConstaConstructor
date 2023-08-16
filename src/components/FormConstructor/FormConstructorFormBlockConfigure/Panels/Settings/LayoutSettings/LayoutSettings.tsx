import React, { FC, useLayoutEffect, useState } from 'react'
import './Select.variants.css'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import styles from './styles.module.css'
import { LayoutElementPropsStyles } from '../../../../coreTypes'
import { useItemsHandlers } from './ItemsService'
import {
  directions,
  justifyContentProps,
  alignItems,
  borderWidths,
  borderStyle,
  borderSide,
} from './LayoutConstants'
import { LayoutPalette } from '../../../../../ConstaPalette'
import { LayoutElement } from '../../../../coreTypes'
import { Text } from '@consta/uikit/Text'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import {
  AlignItems,
  BorderSide,
  BorderStyle,
  JustifyContentProps,
  LayoutPropDirection,
} from '../../../../coreTypes/layoutTypes'
import { cn } from '../../../../utils/bem'
import { IconComponent } from '@consta/uikit/Icon'

type LayoutSettingsType = {
  selectedElementProps: LayoutElementPropsStyles
  selectedElement: LayoutElement
}

export const LayoutSettings: FC<LayoutSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const {
    itemsProps,
    onChangeFlex,
    onChangeWidth,
    onChangeJustifyContent,
    onChangeAlignItems,
    onChangeHeight,
    onChangeBorderWidth,
    onChangeBorderStyle,
    onChangeBorderColor,
    onChangeBorderSide,
    onChangeDirection,
    onChangeBackroundColor,
  } = useItemsHandlers(selectedElementProps, selectedElement)

  const [widthValue, setWidthValue] = useState<string>('0')
  const [heightValue, setHeightValue] = useState<string>('0')

  const cnSelectVariants = cn('SelectVariants')

  useLayoutEffect(() => {
    if (itemsProps.selectedElementProps) {
      const layoutProps = itemsProps.selectedElementProps as LayoutElementPropsStyles

      setHeightValue(layoutProps.styles?.maxHeight?.replaceAll('px', '') || '0')
      setWidthValue(layoutProps.styles?.maxWidth?.replaceAll('px', '') || '0')
    }
  }, [itemsProps.selectedElementProps])

  const funcName = (Icon: IconComponent) => {
    return (
      <div>
        <Icon />
      </div>
    )
  }

  return (
    <div className={styles.layoutSettings}>
      {itemsProps ? (
        <>
          <div className={styles.rowSettings}>
            <TextField
              onChange={({ value }: { value: string | null }) => onChangeHeight(value)}
              value={heightValue}
              type='number'
              label='Высота'
              leftSide='px'
              size='xs'
              min='0'
            />
            <TextField
              onChange={({ value }) => onChangeWidth(value)}
              value={widthValue}
              type='number'
              label='Ширина'
              leftSide='px'
              size='xs'
              min='0'
            />
          </div>

          <div className={styles.rowSettings}>
            <TextField
              className={styles.widthFlex}
              onChange={onChangeFlex()}
              value={`${itemsProps.constaProps.flex}`}
              type='number'
              label='Заполнение'
              size='xs'
              min='1'
            />
            <div className={styles.columnSettings}>
              <Text size='xs' view='secondary'>
                Направление
              </Text>
              <ChoiceGroup
                value={itemsProps.constaProps.direction}
                items={directions}
                getItemLabel={(label: LayoutPropDirection) => label.name}
                name='ChoiceGroupExample'
                size='xs'
                onlyIcon
                view='ghost'
                onChange={({ value }) => onChangeDirection(value)}
              />
            </div>
          </div>
          <div className={styles.rowSettings}>
            <div className={styles.columnSettings}>
              <Text size='xs' view='secondary'>
                Распределение
              </Text>
              <ChoiceGroup
                value={itemsProps.styles?.justifyContent}
                items={justifyContentProps}
                getItemLabel={(label: JustifyContentProps) => label.name}
                name='ChoiceGroupExample'
                size='xs'
                onlyIcon
                view='ghost'
                onChange={({ value }) => onChangeJustifyContent(value)}
              />
            </div>
            <div className={styles.columnSettings}>
              <Text size='xs' view='secondary'>
                Привязка
              </Text>
              <ChoiceGroup
                value={itemsProps.styles?.alignItems}
                items={alignItems}
                getItemLabel={(label: AlignItems) => label.name}
                name='ChoiceGroupExample'
                size='xs'
                onlyIcon
                view='ghost'
                onChange={({ value }) => onChangeAlignItems(value)}
              />
            </div>
          </div>
          <div className={styles.columnSettingsWithoutRow}>
            <Text size='xs' view='secondary'>
              Граница
            </Text>
            <ChoiceGroup
              value={itemsProps.styles?.borderSide}
              items={borderSide}
              getItemLabel={(label: BorderSide) => label.name}
              name='ChoiceGroupExample'
              size='xs'
              onlyIcon
              view='ghost'
              onChange={({ value }) => onChangeBorderSide(value)}
            />
          </div>
          <div className={styles.rowSettings}>
            <Select
              getItemKey={(key: BorderStyle) => key.name}
              label='Стиль'
              size='xs'
              getItemLabel={(label: BorderStyle) => label.name}
              items={borderStyle}
              value={itemsProps.styles?.borderStyle}
              onChange={({ value }) => onChangeBorderStyle(value)}
              renderItem={({ item, active, hovered, onClick, onMouseEnter }) => (
                <div
                  className={cnSelectVariants('MyItem', { active, hovered })}
                  role='option'
                  tabIndex={0}
                  aria-selected={active}
                  aria-hidden='true'
                  onMouseEnter={onMouseEnter}
                  onClick={onClick}>
                  {item.name === 'hidden' ? (
                    <Text className={styles.paddingHidden} size='xs'>
                      Без стиля (скрытый)
                    </Text>
                  ) : (
                    <div className={styles.selectElement}>
                      {item.icon && funcName(item.icon)}
                      <Text size='xs'>{item.name}</Text>
                    </div>
                  )}
                </div>
              )}
              renderValue={({ item }) => (
                <div className={styles.select}>
                  {item.icon && funcName(item.icon)}
                  <Text size='xs'>{item.name}</Text>
                </div>
              )}
            />
            <Select
              getItemKey={key => key}
              label='Толщина'
              size='xs'
              getItemLabel={label => label}
              items={borderWidths}
              value={`${itemsProps.styles?.borderWidth || ''}`}
              onChange={({ value }) => onChangeBorderWidth(value)}
            />
          </div>
          <div className={styles.rowSettings}>
            <div className={styles.columnSettings}>
              <Text size='xs' view='secondary'>
                Цвет Фона
              </Text>
              <LayoutPalette
                color={itemsProps.styles?.backgroundColor}
                size={'xs'}
                onChangeColor={onChangeBackroundColor}
              />
            </div>
            <div className={styles.columnSettings}>
              <Text size='xs' view='secondary'>
                Цвет границы
              </Text>
              <LayoutPalette
                color={itemsProps.styles?.borderColor}
                size={'xs'}
                onChangeColor={onChangeBorderColor}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

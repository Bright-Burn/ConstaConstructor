import React, { FC, useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import styles from './styles.module.css'
import { useItemsHandlers } from './ItemsService'
import {
  directions,
  justifyContentProps,
  alignItems,
  borderWidths,
  borderStyle,
  borderSide,
  directionDict,
  justifyContentDict,
  alignItemsDict,
  borderSideDict,
  borderStyleDict,
} from './LayoutConstants'
import { LayoutPalette } from '../../../../../ConstaPalette'
import { Text } from '@consta/uikit/Text'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { BorderWidth, LayoutElement, LayoutElementPropsStyles } from '../../../../coreTypes'
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
                value={directionDict[itemsProps.constaProps?.direction || 'row']}
                items={directions}
                getItemLabel={label => label.name}
                name='ChoiceGroupExample'
                size='xs'
                onlyIcon
                view='ghost'
                onChange={({ value }) => onChangeDirection(value.name)}
              />
            </div>
          </div>
          <div className={styles.rowSettings}>
            <div className={styles.columnSettings}>
              <Text size='xs' view='secondary'>
                Распределение
              </Text>
              <ChoiceGroup
                value={justifyContentDict[itemsProps.styles?.justifyContent || 'start']}
                items={justifyContentProps}
                getItemLabel={label => label.name}
                name='ChoiceGroupExample'
                size='xs'
                onlyIcon
                view='ghost'
                onChange={({ value }) => onChangeJustifyContent(value.name)}
              />
            </div>
            <div className={styles.columnSettings}>
              <Text size='xs' view='secondary'>
                Привязка
              </Text>
              <ChoiceGroup
                value={alignItemsDict[itemsProps.styles?.alignItems || 'normal']}
                items={alignItems}
                getItemLabel={label => label.name}
                name='ChoiceGroupExample'
                size='xs'
                onlyIcon
                view='ghost'
                onChange={({ value }) => onChangeAlignItems(value.name)}
              />
            </div>
          </div>
          <div className={styles.columnSettingsWithoutRow}>
            <Text size='xs' view='secondary'>
              Граница
            </Text>
            <ChoiceGroup
              value={borderSideDict[itemsProps.styles?.borderSide || 'borderAll']}
              items={borderSide}
              getItemLabel={label => label.name}
              name='ChoiceGroupExample'
              size='xs'
              onlyIcon
              view='ghost'
              onChange={({ value }) => onChangeBorderSide(value.name)}
            />
          </div>
          <div className={styles.rowSettings}>
            <Select
              getItemKey={key => key.name}
              label='Стиль'
              size='xs'
              getItemLabel={label => label.name}
              items={borderStyle}
              value={borderStyleDict[itemsProps.styles?.borderStyle || 'dotted']}
              onChange={({ value }) => onChangeBorderStyle(value?.name)}
              renderItem={({ item, active, onClick, onMouseEnter }) => (
                <div
                  className={`${styles.SelectItem} ${active ? styles.SelectItemActive : ''}`}
                  role='option'
                  tabIndex={0}
                  aria-selected={active}
                  aria-hidden='true'
                  onMouseEnter={onMouseEnter}
                  onClick={onClick}>
                  {item.name === 'hidden' ? (
                    <Text
                      className={`${styles.selectElement} ${active ? styles.BorderLeftItem : ''}`}
                      size='xs'>
                      Без стиля (скрытый)
                    </Text>
                  ) : (
                    <div
                      className={`${styles.selectElement} ${active ? styles.BorderLeftItem : ''}`}>
                      {item.icon && funcName(item.icon)}
                      <Text className={`${active ? styles.SelectItemActive : ''}`} size='xs'>
                        {item.name}
                      </Text>
                    </div>
                  )}
                </div>
              )}
              renderValue={({ item }) => (
                <div className={styles.selectElement}>
                  {item.icon && funcName(item.icon)}
                  <Text size='xs'>{item.name}</Text>
                </div>
              )}
            />
            <Select
              getItemKey={(key: BorderWidth) => key}
              label='Толщина'
              size='xs'
              getItemLabel={(label: BorderWidth) => label}
              items={borderWidths}
              value={itemsProps.styles?.borderWidth}
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

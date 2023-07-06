import React, { useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import styles from './styles.module.css'
import { LayoutElementPropsStyles } from '../../../../store/formElements/layoutTypes'
import { useDebouncedCallback } from '../../../../utils/useDebounceCallBack'
import { useItemsHandlers } from './ItemsService'
import {
  directions,
  justifyContentProps,
  alignItems,
  verticalAligns,
  horizontalAligns,
  borderWidths,
  borderStyle,
  borderSide,
} from './LayoutConstants'

export const LayoutSettings = () => {
  const {
    itemsProps,
    onChangeFlex,
    onChangeWidth,
    onChangeJustifyContent,
    onChangeAlignItems,
    onChangeHeight,
    onChangeHorizontalAligment,
    onChangeBorderWidth,
    onChangeBorderStyle,
    onChangeBorderColor,
    onChangeBorderSide,
    onChangeVerticalAligment,
    onChangeDirection,
  } = useItemsHandlers()

  const [widthValue, setWidthValue] = useState<string>('0')
  const [heightValue, setHeightValue] = useState<string>('0')

  const updateColor = useDebouncedCallback(value => onChangeBorderColor(value), 300)

  useLayoutEffect(() => {
    if (itemsProps.selectedElementProps) {
      const layoutProps = itemsProps.selectedElementProps as LayoutElementPropsStyles

      setHeightValue(layoutProps.styles?.maxHeight?.replaceAll('px', '') || '0')
      setWidthValue(layoutProps.styles?.maxWidth?.replaceAll('px', '') || '0')
    }
  }, [itemsProps.selectedElementProps])

  return (
    <div className={styles.layoutSettings}>
      {itemsProps ? (
        <>
          <TextField
            onChange={onChangeFlex()}
            value={`${itemsProps.constaProps.flex}`}
            type='number'
            label='Flex'
            min='1'
          />
          <Select
            getItemKey={key => key}
            label='Direction'
            getItemLabel={label => label}
            items={directions}
            value={`${itemsProps.constaProps.direction}`}
            onChange={({ value }) => {
              onChangeDirection(value)
            }}
          />
          <Select
            getItemKey={key => key}
            label='JustifyContent'
            getItemLabel={label => label}
            items={justifyContentProps}
            value={`${itemsProps.styles?.justifyContent}`}
            onChange={({ value }) => onChangeJustifyContent(value)}
          />
          <Select
            getItemKey={key => key}
            label='AlignItems'
            getItemLabel={label => label}
            items={alignItems}
            value={`${itemsProps.styles?.alignItems}`}
            onChange={({ value }) => onChangeAlignItems(value)}
          />
          <TextField
            onChange={({ value }) => onChangeWidth(value)}
            value={widthValue}
            type='number'
            label='Width'
            min='0'
          />
          <TextField
            onChange={({ value }: { value: string | null }) => onChangeHeight(value)}
            value={heightValue}
            type='number'
            label='Height'
            min='0'
          />
          <Select
            getItemKey={key => key}
            label='Vertical Aligned'
            getItemLabel={label => label}
            items={verticalAligns}
            value={`${itemsProps.constaProps.verticalAlign}`}
            onChange={({ value }) => onChangeVerticalAligment(value)}
          />
          <Select
            getItemKey={key => key}
            label='Horizontal Aligned'
            getItemLabel={label => label}
            items={horizontalAligns}
            value={`${itemsProps.constaProps.horizontalAlign}`}
            onChange={({ value }) => onChangeHorizontalAligment(value)}
          />
          <Select
            getItemKey={key => key}
            label='Border style'
            getItemLabel={label => label}
            items={borderStyle}
            value={`${itemsProps.styles?.borderStyle || ''}`}
            onChange={({ value }) => onChangeBorderStyle(value)}
          />
          <Select
            getItemKey={key => key}
            label='Border width'
            getItemLabel={label => label}
            items={borderWidths}
            value={`${itemsProps.styles?.borderWidth || ''}`}
            onChange={({ value }) => onChangeBorderWidth(value)}
          />
          <Select
            getItemKey={key => key}
            label='Border side'
            getItemLabel={label => label}
            items={borderSide}
            value={`${itemsProps.styles?.borderSide || ''}`}
            onChange={({ value }) => onChangeBorderSide(value)}
          />
          <TextField
            value={itemsProps.styles?.borderColor}
            type='text'
            label='Border color'
            onChange={({ value }) => onChangeBorderColor(value)}
          />
          <input
            type='color'
            value={itemsProps.styles?.borderColor}
            onChange={value => updateColor(value.currentTarget.value)}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

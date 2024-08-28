import React from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import { LayoutPalette } from '../../../../../ConstaPalette'
import type { LayoutElement, LayoutElementPropsStyles } from '../../../../coreTypes'

import { useItemsHandlers } from './ItemsService'
import { borderStyle, borderStyleDict } from './LayoutConstants'

import styles from './styles.module.css'

type LayoutSettingsType = {
  selectedViewProps: LayoutElementPropsStyles
  selectedView: LayoutElement
}
export const LayoutBorderSettings: React.FC<LayoutSettingsType> = ({
  selectedViewProps,
  selectedView,
}) => {
  const { itemsProps, onChangeBorderWidth, onChangeBorderStyle, onChangeBorderColor } =
    useItemsHandlers(selectedViewProps, selectedView)
  return (
    <div className={`${styles.columnSettings} ${styles.labelMarginTop}`}>
      <Text size="xs" view="secondary">
        Border
      </Text>
      <ChoiceGroup
        value={borderStyleDict[itemsProps.styles?.borderStyle || 'hidden']}
        items={borderStyle}
        getItemLabel={label => label.name}
        name="BorderStyle"
        size="xs"
        onlyIcon={true}
        view="ghost"
        onChange={value => {
          onChangeBorderStyle(value.name)
        }}
      />
      <LayoutPalette
        color={itemsProps.styles?.borderColor}
        size="xs"
        onChangeColor={onChangeBorderColor}
      />
      <div className={styles.rowSettings}>
        <TextField
          className={styles.widthFlex}
          value={itemsProps.styles?.borderTopWidth || '0'}
          type="number"
          leftSide="T"
          size="xs"
          min="0"
          onChange={value => {
            onChangeBorderWidth(value, 'T')
          }}
        />{' '}
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          {' '}
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <TextField
          className={styles.widthFlex}
          value={itemsProps.styles?.borderLeftWidth || '0'}
          type="number"
          leftSide="L"
          size="xs"
          min="0"
          onChange={value => {
            onChangeBorderWidth(value, 'L')
          }}
        />{' '}
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          {' '}
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <TextField
          className={styles.widthFlex}
          value={itemsProps.styles?.borderRightWidth || '0'}
          type="number"
          leftSide="R"
          size="xs"
          min="0"
          onChange={value => {
            onChangeBorderWidth(value, 'R')
          }}
        />{' '}
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          {' '}
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <TextField
          className={styles.widthFlex}
          value={itemsProps.styles?.borderBottomWidth || '0'}
          type="number"
          leftSide="B"
          size="xs"
          min="0"
          onChange={value => {
            onChangeBorderWidth(value, 'B')
          }}
        />{' '}
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          {' '}
          px
        </Text>
      </div>
    </div>
  )
}

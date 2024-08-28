import React from 'react'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { LayoutElement, LayoutElementPropsStyles } from '../../../../coreTypes'

import { useItemsHandlers } from './ItemsService'

import styles from './styles.module.css'
type LayoutSettingsType = {
  selectedViewProps: LayoutElementPropsStyles
  selectedView: LayoutElement
}

export const LayoutRadiusSettings: React.FC<LayoutSettingsType> = ({
  selectedViewProps,
  selectedView,
}) => {
  const { itemsProps, onChangeBorderRadius } = useItemsHandlers(selectedViewProps, selectedView)
  return (
    <div className={`${styles.columnSettings} ${styles.labelMarginTop}`}>
      <Text size="xs" view="secondary">
        Radius
      </Text>
      <div className={styles.rowSettings}>
        <TextField
          className={styles.widthFlex}
          value={itemsProps.styles?.borderTopLeftRadius || '0'}
          type="number"
          leftSide="TL"
          size="xs"
          min="0"
          onChange={value => {
            onChangeBorderRadius(value, 'TL')
          }}
        />
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          {' '}
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <TextField
          className={styles.widthFlex}
          value={itemsProps.styles?.borderTopRightRadius || '0'}
          type="number"
          leftSide="TR"
          size="xs"
          min="0"
          onChange={value => {
            onChangeBorderRadius(value, 'TR')
          }}
        />
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <TextField
          className={styles.widthFlex}
          value={itemsProps.styles?.borderBottomRightRadius || '0'}
          type="number"
          leftSide="BR"
          size="xs"
          min="0"
          onChange={value => {
            onChangeBorderRadius(value, 'BR')
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
          value={itemsProps.styles?.borderBottomLeftRadius || '0'}
          type="number"
          leftSide="BL"
          size="xs"
          min="0"
          onChange={value => {
            onChangeBorderRadius(value, 'BL')
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

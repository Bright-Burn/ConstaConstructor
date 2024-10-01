import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import { LayoutPalette } from '../../../../../ConstaPalette'
import type { LayoutElement, LayoutElementPropsStyles } from '../../../../coreTypes'
import { getValueForSelect } from '../LabelForSelectComponent'

import { useItemsHandlers } from './ItemsService'
import { LayoutBorderSettings } from './LayoutBorderSettings'
import {
  alignItems,
  alignItemsDict,
  directionDict,
  directions,
  justifyContentDict,
  justifyContentProps,
  overflow,
} from './LayoutConstants'
import { LayoutRadiusSettings } from './LayoutRadiusSettings'

import styles from './styles.module.css'

type LayoutSettingsType = {
  selectedViewProps: LayoutElementPropsStyles
  selectedView: LayoutElement
}

export const LayoutSettings: FC<LayoutSettingsType> = ({ selectedViewProps, selectedView }) => {
  const {
    itemsProps,
    onChangeFlex,
    onChangeWidth,
    onChangeJustifyContent,
    onChangeAlignItems,
    onChangeHeight,
    onChangeRotate,
    onChangeDirection,
    onChangeBackroundColor,
    onChangeOverflow,
    onChangeWrap,
  } = useItemsHandlers(selectedViewProps, selectedView)

  const [widthValue, setWidthValue] = useState<string>('0')
  const [heightValue, setHeightValue] = useState<string>('0')

  useLayoutEffect(() => {
    const layoutProps = itemsProps.selectedViewProps

    setHeightValue(layoutProps.styles.maxHeight?.replaceAll('px', '') || '0')
    setWidthValue(layoutProps.styles.maxWidth?.replaceAll('px', '') || '0')
  }, [itemsProps.selectedViewProps])

  return (
    <div className={styles.layoutSettings}>
      <div className={styles.rowSettings}>
        <TextField
          value={heightValue}
          type="number"
          leftSide="H"
          size="xs"
          min="0"
          onChange={value => {
            onChangeHeight(value)
          }}
        />
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          {' '}
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <TextField
          value={widthValue}
          type="number"
          leftSide="W"
          size="xs"
          min="0"
          onChange={value => {
            onChangeWidth(value)
          }}
        />
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          {' '}
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <TextField
          value={itemsProps.styles.transform}
          type="number"
          leftSide="Rotate"
          size="xs"
          min="0"
          onChange={value => {
            onChangeRotate(value)
          }}
        />{' '}
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          {' '}
          deg
        </Text>
      </div>
      <ChoiceGroup
        value={directionDict[itemsProps.uiLibProps.direction || 'row']}
        items={directions}
        getItemLabel={label => label.name}
        name="ChoiceGroupExample"
        size="xs"
        view="ghost"
        onChange={value => {
          onChangeDirection(value.name)
        }}
      />
      <Switch
        checked={selectedViewProps.styles.flexWrap === 'wrap'}
        size="xs"
        label="wrap"
        onChange={onChangeWrap}
      />
      <TextField
        className={styles.widthFlex}
        value={`${itemsProps.uiLibProps.flex}`}
        type="number"
        leftSide="flex"
        size="xs"
        min="1"
        onChange={onChangeFlex}
      />
      <Select
        getItemKey={key => key.name}
        size="xs"
        getItemLabel={label => label.name}
        items={justifyContentProps}
        renderValue={({ item }) => getValueForSelect({ item: item.name, label: 'J-C' })}
        value={justifyContentDict[itemsProps.styles.justifyContent || 'start']}
        onChange={value => {
          onChangeJustifyContent(value?.name)
        }}
      />
      <Select
        getItemKey={key => key.name}
        size="xs"
        getItemLabel={label => label.name}
        items={alignItems}
        renderValue={({ item }) => getValueForSelect({ item: item.name, label: 'Align' })}
        value={alignItemsDict[itemsProps.styles.alignItems || 'start']}
        onChange={value => {
          onChangeAlignItems(value?.name)
        }}
      />
      <Select
        getItemKey={(key: string) => key}
        size="xs"
        getItemLabel={(label: string) => label}
        items={overflow}
        placeholder="OverflowY"
        renderValue={({ item }) => getValueForSelect({ item, label: 'OverflowY' })}
        value={itemsProps.styles.overflowY}
        onChange={value => {
          onChangeOverflow(value, 'Y')
        }}
      />
      <Select
        getItemKey={(key: string) => key}
        size="xs"
        getItemLabel={(label: string) => label}
        items={overflow}
        placeholder="OverflowX"
        renderValue={({ item }) => getValueForSelect({ item, label: 'OverflowX' })}
        value={itemsProps.styles.overflowX}
        onChange={value => {
          onChangeOverflow(value, 'X')
        }}
      />
      <LayoutPalette
        color={itemsProps.styles.backgroundColor}
        size="xs"
        placeholder="Bg"
        onChangeColor={onChangeBackroundColor}
      />
      <LayoutBorderSettings selectedViewProps={selectedViewProps} selectedView={selectedView} />

      <LayoutRadiusSettings selectedViewProps={selectedViewProps} selectedView={selectedView} />
    </div>
  )
}

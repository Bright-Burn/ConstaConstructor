import { Select } from '@consta/uikit/Select'
import React, { useLayoutEffect, useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { Button } from '@consta/uikit/Button'
import { FormArray, sizeArray, innerOffsetArray } from './types'
import { TabsPropLinePosition, TabsPropSize, TabsPropView } from '@consta/uikit/TabsDeprecated'
import { ITEM } from '../../../../store/formElements/tabsTypes'
import { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'
import {
  ItemList,
  ListElementPropsStyles,
  ListProps,
} from '../../../../store/formElements/ListTypes'
import styles from './styles.module.css'
import { Switch } from '@consta/uikit/Switch'
import { CardElementPropsStyles, useAppSelector } from '../../../../store/formElements'
export const ListSettings = () => {
  const [props, setProps] = useState<ListProps>()
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  useLayoutEffect(() => {
    if (selectedElement) {
      const textFieldProps = selectedElementProps as ListProps

      setProps(textFieldProps)
    }
  }, [selectedElementProps, selectedElement])

  const {
    itemsProps,
    onChangeSize,
    onChangeSwitch,
    onChangeInnerOffset,
    onChangeForm,
    onChangeItemsCount,
    onChangeItems,
  } = useItemsHandlers()

  const [tabs, setTabs] = useState<ItemList[]>(itemsProps.items)
  const [isLabelsEditing, setIsLabelsEditing] = useState<boolean>(false)
  const labelsEditingHandler = (value: boolean) => {
    setTabs(itemsProps.items)
    setIsLabelsEditing(value)
  }

  const applyNewTabs = () => {
    onChangeItems(tabs)
    setIsLabelsEditing(false)
  }

  const onTabLabelEdit = (value: string | null, index: number) => {
    const newTabs = [...tabs]
    newTabs[index] = { ...newTabs[index], label: `${value}` }
    setTabs([...newTabs])
  }

  return (
    <>
      {!isLabelsEditing && (
        <>
          <TextField
            label='Количество строк'
            type='number'
            value={`${itemsProps.items.length}`}
            onChange={onChangeItemsCount}
          />
          <Button
            view='secondary'
            className='m-b-xs m-t-xs'
            label={'Сменить названия строк'}
            onClick={() => labelsEditingHandler(true)}
          />
        </>
      )}
      {isLabelsEditing && (
        <>
          {tabs.map((tab, index) => {
            return (
              <TextField
                key={index}
                label={`${index + 1}`}
                value={`${tab.label}`}
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
      <Select
        label='size'
        getItemKey={(key: ListPropSize) => key}
        getItemLabel={(label: ListPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Switch
        className={styles.Switch}
        style={{ paddingBottom: 10 }}
        checked={props?.withListBox ?? false}
        label='withListBox'
        onChange={onChangeSwitch('withListBox')}
      />
      <Select
        label='innerOffset'
        getItemKey={(key: ListPropInnerOffset) => key}
        getItemLabel={(label: ListPropInnerOffset) => label}
        value={itemsProps.innerOffset}
        items={innerOffsetArray}
        onChange={({ value }) => onChangeInnerOffset(value)}
      />
      {/* <Switch
        className={styles.Switch}
        style={{ paddingBottom: 10 }}
        checked={props?.isInteractive ?? false}
        label='isInteractive'
        onChange={onChangeSwitch('isInteractive')}
      /> */}
      <Select
        label='Form'
        getItemKey={(key: ListPropForm) => key}
        getItemLabel={(label: ListPropForm) => label}
        value={itemsProps.form}
        items={FormArray}
        onChange={({ value }) => onChangeForm(value)}
      />
      {/* <Switch
        className={styles.Switch}
        checked={props?.withGroups ?? false}
        label='withGroups'
        onChange={onChangeSwitch('withGroups')}
      />
      {props?.withGroups === true ? (
        <Switch
          className={styles.Switch}
          checked={props?.groupsWithLabel ?? false}
          label='groupsWithLabel'
          onChange={onChangeSwitch('groupsWithLabel')}
        />
      ) : (
        <></>
      )}
      <Switch
        className={styles.Switch}
        checked={props?.disabled ?? false}
        label='disabled'
        onChange={onChangeSwitch('disabled')}
      />
       <Switch
        className={styles.Switch}
        checked={props?.withLeftSide ?? false}
        label='withLeftSide'
        onChange={onChangeSwitch('withLeftSide')}
      />
      <Switch
        className={styles.Switch}
        checked={props?.withLeftIcon ?? false}
        label='withLeftIcon'
        onChange={onChangeSwitch('withLeftIcon')}
      />
      <Switch
        className={styles.Switch}
        checked={props?.withRightSide ?? false}
        label='withRightSide'
        onChange={onChangeSwitch('withRightSide')}
      />
      <Switch
        className={styles.Switch}
        checked={props?.withRightIcon ?? false}
        label='withRightIcon'
        onChange={onChangeSwitch('withRightIcon')}
      />
      <Switch
        className={styles.Switch}
        checked={props?.withDisabledItems ?? false}
        label='withDisabledItems'
        onChange={onChangeSwitch('withDisabledItems')}
      />
       <Switch
        className={styles.Switch}
        checked={props?.isLoading ?? false}
        label='isLoading'
        onChange={onChangeSwitch('isLoading')}
      /> 
      <Switch
        className={styles.Switch}
        style={{ paddingBottom: 10 }}
        checked={props?.withListAddItem ?? false}
        label='withListAddItem'
        onChange={onChangeSwitch('withListAddItem')}
      />
      {(itemsProps.linePosition === 'bottom' || itemsProps.linePosition === 'top') && (
        <Select
          label='fitMode'
          getItemKey={(key: FitMode) => key}
          getItemLabel={(label: FitMode) => label}
          value={itemsProps.fitMode}
          items={fitModeArray}
          onChange={({ value }) => onChangeFitMode(value)}
        />
      )} */}
    </>
  )
}

import { Select } from '@consta/uikit/Select'
import { useLayoutEffect, useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { Button } from '@consta/uikit/Button'
import { FormArray, sizeArray, innerOffsetArray } from './types'
import { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'
import { ItemList, ListProps } from '../../../../store/formElements/ListTypes'
import styles from './styles.module.css'
import { Switch } from '@consta/uikit/Switch'
import { useAppSelector } from '../../../../store/formElements'

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

  const [lines, setLines] = useState<ItemList[]>(itemsProps.items)
  const [isLabelsEditing, setIsLabelsEditing] = useState<boolean>(false)
  const labelsEditingHandler = (value: boolean) => {
    setLines(itemsProps.items)
    setIsLabelsEditing(value)
  }

  const applyNewTabs = () => {
    onChangeItems(lines)
    setIsLabelsEditing(false)
  }

  const onTabLabelEdit = (value: string | null, index: number) => {
    const newTabs = [...lines]
    newTabs[index] = { ...newTabs[index], label: `${value}` }
    setLines([...newTabs])
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
          {lines.map((line, index) => {
            return (
              <TextField
                key={index}
                label={`${index + 1}`}
                value={`${line.label}`}
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
      <Select
        label='Form'
        getItemKey={(key: ListPropForm) => key}
        getItemLabel={(label: ListPropForm) => label}
        value={itemsProps.form}
        items={FormArray}
        onChange={({ value }) => onChangeForm(value)}
      />
    </>
  )
}


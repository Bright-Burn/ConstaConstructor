import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { BadgePropForm, BadgePropSize, BadgePropStatus, BadgePropView } from '@consta/uikit/Badge'
import { useDispatch } from 'react-redux'
import { useLayoutEffect, useState } from 'react'
import { Select } from '@consta/uikit/Select'
import { Checkbox } from '@consta/uikit/Checkbox'
import { TextField } from '@consta/uikit/TextField'
import { TableProps } from '../../../../store/formElements/tableTypes'

export const TableSettings = () => {
  const [props, setProps] = useState<TableProps>()

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as TableProps)
    }
  }, [selectedElementProps, selectedElement])

  const handleOnChangeLabelRow = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: TableProps = {
        ...(selectedElementProps as TableProps),
      }
      newProps.row = (value && +value) || undefined
      onDispatch(selectedElement, newProps)
    }
  }
  const handleOnChangeLabelColumn = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: TableProps = {
        ...(selectedElementProps as TableProps),
      }
      newProps.column = (value && +value) || undefined

      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: TableProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return (
    <div className={styles.badgeSettings}>
      {props ? (
        <>
          <TextField
            type='number'
            step='1'
            label='Row'
            min='0'
            value={props.row ? `${props.row}` : '3'}
            onChange={handleOnChangeLabelRow}
          />
          <TextField
            type='number'
            step='1'
            min='0'
            label='Column'
            value={props.column ? `${props.column}` : '3'}
            onChange={handleOnChangeLabelColumn}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

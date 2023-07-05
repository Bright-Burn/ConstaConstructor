import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { useLayoutEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'
import { TableProps } from '../../../../store/formElements/tableTypes'

export const TableSettings = () => {
  const [props, setProps] = useState<TableProps>()

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  const handleOnChangeLabelRow = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: TableProps = {
        ...(selectedElementProps as TableProps),
      }
      newProps.row = value === null ? undefined : +value
      onDispatch(selectedElement, newProps)
    }
  }

  const handleOnChangeLabelColumn = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: TableProps = {
        ...(selectedElementProps as TableProps),
      }
      newProps.column = value === null ? undefined : +value
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

  useLayoutEffect(() => {
    if (selectedElement) {
      setProps(selectedElementProps as TableProps)
    }
  }, [selectedElementProps, selectedElement])

  return (
    <div className={styles.badgeSettings}>
      {props ? (
        <>
          <TextField
            type='number'
            step='1'
            label='Row'
            min='0'
            value={props && `${props.row}`}
            onChange={handleOnChangeLabelRow}
          />
          <TextField
            type='number'
            step='1'
            min='0'
            label='Column'
            value={props && `${props.column}`}
            onChange={handleOnChangeLabelColumn}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

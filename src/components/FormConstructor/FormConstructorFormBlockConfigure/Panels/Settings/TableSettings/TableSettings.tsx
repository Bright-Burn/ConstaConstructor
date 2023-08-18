import styles from './styles.module.css'
import { FC, useLayoutEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'
import { TableProps, ISelectedElement } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { BrandTableProps, TableElement } from '../../../../coreTypes/tableTypes'

type TableSettingsType = {
  selectedElementProps: TableProps, 
  selectedElement: TableElement,
}

export const TableSettings: FC<TableSettingsType> = ({selectedElementProps, selectedElement}) => {
  const [props, setProps] = useState<TableProps>()
  const dispatch = useAppDispatch()

  const handleOnChangeLabelRow = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: BrandTableProps = {
        props: selectedElementProps,
        type: 'Table'
      }
      newProps.props.row = value === null ? undefined : +value
      onDispatch(selectedElement, newProps)
    }
  }

  const handleOnChangeLabelColumn = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: BrandTableProps = {
        props: selectedElementProps,
        type: 'Table'
      }
      newProps.props.column = value === null ? undefined : +value
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandTableProps) => {
    dispatch(
      setSelectedElement({
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

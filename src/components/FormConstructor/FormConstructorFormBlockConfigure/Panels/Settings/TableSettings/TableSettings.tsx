import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { TextField } from '@consta/uikit/TextField'

import type {
  BrandTableProps,
  ISelectedElement,
  TableElement,
  TableProps,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

import styles from './styles.module.css'

type TableSettingsType = {
  selectedElementProps: TableProps
  selectedElement: TableElement
}

export const TableSettings: FC<TableSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const [props, setProps] = useState<TableProps>()
  const dispatch = useAppDispatch()

  const handleOnChangeLabelRow = (value: string | null) => {
    const newProps: BrandTableProps = {
      props: { ...selectedElementProps },
      type: 'Table',
    }
    newProps.props.row = value === null ? undefined : +value
    onDispatch(selectedElement, newProps)
  }

  const handleOnChangeLabelColumn = (value: string | null) => {
    const newProps: BrandTableProps = {
      props: { ...selectedElementProps },
      type: 'Table',
    }
    newProps.props.column = value === null ? undefined : +value
    onDispatch(selectedElement, newProps)
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandTableProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }

  useLayoutEffect(() => {
    setProps(selectedElementProps)
  }, [selectedElementProps, selectedElement])

  return (
    <div className={styles.badgeSettings}>
      {props ? (
        <>
          <TextField
            type="number"
            step="1"
            label="Row"
            min="0"
            value={`${props.row}`}
            onChange={handleOnChangeLabelRow}
          />
          <TextField
            type="number"
            step="1"
            min="0"
            label="Column"
            value={`${props.column}`}
            onChange={handleOnChangeLabelColumn}
          />
        </>
      ) : null}
    </div>
  )
}

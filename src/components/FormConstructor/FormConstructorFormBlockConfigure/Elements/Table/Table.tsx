import { FC, useEffect, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements'
import { AgGridReact } from 'ag-grid-react'
import { IFormElementTable, TableProps } from '../../../store/formElements/tableTypes'
import css from './styles.module.css'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { ITable } from './types'

type Row = Record<string, string>

export const Table: FC<ITable> = ({ element }) => {
  const [tableProps, setTableProps] = useState<TableProps>()
  const result: { field: string }[] = []

  const updateRow = (columnDefs: any) => {
    if (tableProps?.row) {
      const newArray = new Array(tableProps.row).fill(
        columnDefs.reduce((accum: any, column: any) => {
          accum[column.field] = 'Item'
          return accum
        }, {} as Record<string, string>),
      )
      setRowData(newArray)
    }
  }

  const [rowData, setRowData] = useState([
    { Header1: 'Item', Header2: 'Item', Header3: 'Item' },
    { Header1: 'Item', Header2: 'Item', Header3: 'Item' },
    { Header1: 'Item', Header2: 'Item', Header3: 'Item' },
  ])

  const [columnDefs, setColumnDefs] = useState([
    { field: 'Header1' },
    { field: 'Header2' },
    { field: 'Header3' },
  ])

  useLayoutEffect(() => {
    const tableElement = element as IFormElementTable
    setTableProps(tableElement.props)
  }, [element])

  useEffect(() => {
    if (tableProps?.row && rowData.length !== tableProps.row) {
      updateRow(columnDefs)
      return
    }
    if (tableProps?.column && columnDefs.length < tableProps.column) {
      for (let i = columnDefs.length + 1; i <= tableProps.column; i++) {
        result.push({ field: `Header${i}` })
      }
      const NewColumns = [...columnDefs, ...result]
      setColumnDefs(NewColumns)
      updateRow(NewColumns)
    }

    if (tableProps?.column && columnDefs.length > tableProps.column) {
      setColumnDefs(prev =>
        prev.slice(0, tableProps?.column && tableProps.column - columnDefs.length),
      )
    }
  }, [tableProps])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Table}
      className={'container-row'}>
      <div className='ag-theme-material' style={{ height: 400, width: 900 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} {...tableProps}></AgGridReact>
      </div>
    </SelectableLayerFullWidth>
  )
}


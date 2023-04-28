import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements'
import { AgGridReact } from 'ag-grid-react'
import { IFormElementTable, TableProps } from '../../../store/formElements/tableTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { ITable } from './types'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

export const Table: FC<ITable> = ({ element }) => {
  const gridRef = useRef()
  const [tableProps, setTableProps] = useState<TableProps>()
  const result: { field: string }[] = []

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

  const updateRow = (columnDefs: { field: string }[]) => {
    if (tableProps?.row) {
      let someName: Record<string, string> = {}
      columnDefs.forEach(cd => {
        someName[cd.field] = 'Item'
      })
      const newArray = new Array(tableProps.row).fill(someName)
      setRowData(newArray)
    }
  }

  const sizeToFit = () => {
    if (gridRef.current)
      // @ts-ignore
      gridRef.current.api?.sizeColumnsToFit()
  }

  useLayoutEffect(() => {
    const tableElement = element as IFormElementTable
    setTableProps(tableElement.props)
  }, [element])

  useEffect(() => {
    if (tableProps?.row && rowData.length !== tableProps.row) {
      updateRow(columnDefs)
      return
    }
    if (tableProps?.column && columnDefs.length !== tableProps.column) {
      for (let i = 1; i <= tableProps.column; i++) {
        result.push({ field: `Header${i}` })
      }
      const newColumns = [...result]
      setColumnDefs(newColumns)
      updateRow(newColumns)
    }
  }, [tableProps])

  useEffect(() => {
    sizeToFit()
  }, [columnDefs.length])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Table}
      className={'container-row'}>
      <div className='ag-theme-material' style={{ height: 400, width: '100%' }}>
        <AgGridReact
          // @ts-ignore
          ref={gridRef}
          onFirstDataRendered={() => sizeToFit()}
          rowData={rowData}
          columnDefs={columnDefs}
          {...tableProps}></AgGridReact>
      </div>
    </SelectableLayerFullWidth>
  )
}


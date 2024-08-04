import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import type { GridApi } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayerFullWidth } from '../../SelectableLayer'

import type { ITable } from './types'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import style from './styles.module.css'

export const Table: FC<ITable> = ({ element }) => {
  const gridRef = useRef<GridApi | null>(null)
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

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
    if (props?.row) {
      const someName: Record<string, string> = {}
      columnDefs.forEach(cd => {
        someName[cd.field] = 'Item'
      })
      const newArray = new Array(props.row).fill(someName)
      setRowData(newArray)
    }
  }

  const sizeToFit = () => {
    if (gridRef.current) gridRef.current.sizeColumnsToFit()
  }

  useEffect(() => {
    if (props?.row && rowData.length !== props.row) {
      updateRow(columnDefs)
      return
    }
    if (props?.column && columnDefs.length !== props.column) {
      for (let i = 1; i <= props.column; i++) {
        result.push({ field: `Header${i}` })
      }
      const newColumns = [...result]
      setColumnDefs(newColumns)
      updateRow(newColumns)
    }
  }, [props])

  useEffect(() => {
    sizeToFit()
  }, [columnDefs.length])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Table}
      className={style.fullScreen}>
      <div className="ag-theme-material" style={{ width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          onGridReady={event => {
            gridRef.current = event.api
          }}
          onFirstDataRendered={() => {
            sizeToFit()
          }}
          {...props}
        />
      </div>
    </SelectableLayerFullWidth>
  )
}

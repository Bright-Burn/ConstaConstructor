import { FC, useLayoutEffect, useRef, useState } from 'react'
import {
  IExpertiseFormProps,
  ExpertiseFormProps,
  ElementTypes,
  FormElementDictTypes,
} from '../../../coreTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { IExpertiseForm } from './types'
import { agGridAdapter } from '@consta/ag-grid-adapter/agGridAdapter'
import { AgGridReact } from 'ag-grid-react'
import style from './styles.module.css'
import { ColDef } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { IconClose } from '@consta/uikit/IconClose'
import { wellInfo, wellType } from './mocks'
import { InfoWindow } from './InfoWindow'
import { defaultColDef, sideBar } from './config'

export const ExpertiseForm: FC<IExpertiseForm> = ({ element }) => {
  const gridRef = useRef<AgGridReact<wellType>>(null)
  const [activeRow, setActiveRow] = useState<wellType>()
  const [, setFormProps] = useState<ExpertiseFormProps>()
  const [checkModal, setCheckModal] = useState(false)
  const styleOptions = agGridAdapter({
    size: 's',
    borderBetweenColumns: true,
    borderBetweenRows: true,
    headerVerticalAlign: 'center',
    headerView: 'default',
    verticalAlign: 'center',
  })
  const [columnDefs] = useState<ColDef[]>([
    { field: 'well', headerName: 'Скважина', filter: 'agTextColumnFilter', minWidth: 100 },
    { field: 'status', headerName: 'Статус', minWidth: 200 },
    { field: 'state', headerName: 'Состояние', minWidth: 50 },
    { field: 'calculationType', headerName: 'Вид Расчёта', minWidth: 150 },
    { field: 'date', headerName: 'Дата', filter: 'agDateColumnFilter', minWidth: 150 },
    { field: 'oilField', headerName: 'Месторождение', minWidth: 150 },
  ])

  const changeActiveRow = (event: any) => {
    setActiveRow(event.data)
    setCheckModal(true)
  }

  useLayoutEffect(() => {
    const ExpertiseFormElement = element as IExpertiseFormProps
    setFormProps(ExpertiseFormElement.props)
  }, [element])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.CardWithBarChart}
      className={`${style.fullScreen}`}
    >
      {checkModal ? (
        <>
          <div style={{ width: '70%' }} className='ag-theme-alpine'>
            <AgGridReact<wellType>
              {...styleOptions}
              ref={gridRef}
              rowData={wellInfo}
              rowSelection={'single'}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              sideBar={sideBar}
              onRowClicked={changeActiveRow}
            ></AgGridReact>
          </div>
          <div className={`${style.modalOpen}`}>
            <div className={`${style.commonInfo}`}>
              <div>Общая информация</div>
              <div>
                <IconClose className={`${style.icon}`} onClick={() => setCheckModal(false)} />
              </div>
            </div>
            {activeRow && <InfoWindow {...activeRow}></InfoWindow>}
          </div>
        </>
      ) : (
        <div style={{ width: '100%' }} className='ag-theme-alpine'>
          <AgGridReact<wellType>
            {...styleOptions}
            ref={gridRef}
            rowData={wellInfo}
            rowSelection={'single'}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            sideBar={sideBar}
            onRowClicked={changeActiveRow}
          ></AgGridReact>
        </div>
      )}
    </SelectableLayerFullWidth>
  )
}

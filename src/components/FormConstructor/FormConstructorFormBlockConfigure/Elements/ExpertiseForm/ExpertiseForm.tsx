import { FC, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements'
import {IExpertiseFormProps,ExpertiseFormProps} from '../../../store/formElements/ExpertiseFormTypes'
import { SelectableLayerFullWidth } from '../../SelectableLayer/SelectableLayerFullWidth'
import { IExpertiseForm } from './types'
import { agGridAdapter } from '@consta/ag-grid-adapter/agGridAdapter';
import { AgGridReact } from 'ag-grid-react';
import style from './styles.module.css'
import { ColDef, SideBarDef } from 'ag-grid-community'
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { IconClose } from '@consta/uikit/IconClose';

interface IOlympicData {
  Скважина: string;
  Статус: string;
  Состояние: string;
  'Вид Расчёта': number;
  Дата: string;
  Месторождение: string;
}

const DataJson = [
  {Скважина:"1618",Статус:'Изменены ограничения',Состояние:"","Вид Расчёта":2008,"Месторождение":"Оренбургские","Дата":"24/08/2008"},
  {Скважина:"1441",Статус:'Изменены ограничения',Состояние:"","Вид Расчёта":2012,"Месторождение":"Оренбургские","Дата":"12/08/2012"},
  {Скважина:"1331",Статус:'Отключена(Ошибки)',Состояние:"","Вид Расчёта":2004,"Месторождение":"Оренбургские","Дата":"29/08/2004"},
]

export const ExpertiseForm: FC<IExpertiseForm> = ({ element }) => {
  const gridRef = useRef<AgGridReact<IOlympicData>>(null);
  const [activeRow,setActiveRow] = useState<IOlympicData>() 
  const [, setFormProps] = useState<ExpertiseFormProps>()
  const [checkModal, setCheckModal] = useState(false)
  const styleOptions = agGridAdapter({
    size: 'm',
    borderBetweenColumns: true,
    borderBetweenRows: true,
    headerVerticalAlign: 'center',
    headerView: 'default',
    verticalAlign: 'center',
  });
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
      { field: 'Скважина', filter: 'agTextColumnFilter', minWidth: 100 },
      { field: 'Статус' , minWidth: 200},
      { field: 'Состояние', minWidth: 50 },
      { field: 'Вид Расчёта', minWidth: 150 },
      { field: 'Месторождение', minWidth: 150 },
      { field: 'Дата', minWidth: 150 },
  ]);

  const sideBar  = useMemo<SideBarDef | string | string[] | boolean | null>(() => {
    return {
      toolPanels: [
        {
          id: 'filters',
          labelKey: 'filters',
          labelDefault: 'Filters',
          iconKey: 'menu',
          toolPanel: 'agFiltersToolPanel',
          minWidth: 180,
          maxWidth: 400,
          width: 250,
        },
      ],
      defaultToolPanel: 'filters',
      position: 'left',
    };
  }, []);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 100,
      // allow every column to be aggregated
      enableValue: true,
      // allow every column to be grouped
      enableRowGroup: true,
      // allow every column to be pivoted
      enablePivot: true,
      sortable: true,
      filter: true,
    };
  }, []);


  const ActiveRow = (event: any) => {
  setActiveRow(event.data);
  setCheckModal(true);
  }

  useLayoutEffect(() => {
    const ExpertiseFormElement = element as IExpertiseFormProps
    setFormProps(ExpertiseFormElement.props)
  }, [element])

  return (
    <SelectableLayerFullWidth
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.CardWithBarChart}
      className={`${style.fullScreen}`}
    >
      {checkModal ? (
      <>
      <div style={{ width: '70%' }} className="ag-theme-alpine">
      <AgGridReact<IOlympicData>
        {...styleOptions}
        ref={gridRef}
        rowData={DataJson}
        rowSelection={'single'}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        sideBar={sideBar}
        onRowClicked={ActiveRow}
      ></AgGridReact>
    </div>
    <div className={`${style.modalOpen}`}>
      <div className={`${style.commonInfo}`}>
      <div>
        Общая информация
      </div>
      <div>
      <IconClose className={`${style.icon}`} onClick={() => setCheckModal(false)}/>
      </div>
      </div>
    <div className={`${style.list}`}>
    Скважина - {activeRow?.Скважина}
    </div>
    <div className={`${style.list}`}>
    Статус - {activeRow?.Статус}
    </div>
    <div className={`${style.list}`}>
    Состояние - {activeRow?.Состояние}
    </div>
    <div className={`${style.list}`}>
    Вид Расчёта - {activeRow?.['Вид Расчёта']}
    </div>
    <div className={`${style.list}`}>
    Месторождение - {activeRow?.Месторождение}
    </div>
    <div className={`${style.list}`}>
    Дата - {activeRow?.Дата}
    </div>
    </div>
      </>
    ): (<div style={{ width: '100%' }} className="ag-theme-alpine">
      <AgGridReact<IOlympicData>
        {...styleOptions}
        ref={gridRef}
        rowData={DataJson}
        rowSelection={'single'}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        sideBar={sideBar}
        onRowClicked={ActiveRow}
      ></AgGridReact>
    </div>)}
    </SelectableLayerFullWidth>
  )
}
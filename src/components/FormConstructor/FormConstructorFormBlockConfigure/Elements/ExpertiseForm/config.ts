import { ColDef, SideBarDef } from "ag-grid-community"

export const defaultColDef: ColDef = {
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
    }


 export const sideBar: SideBarDef | string | string[] | boolean | null = {
      toolPanels: [
        {
          id: 'filters',
          labelKey: 'filters',
          labelDefault: 'Filters',
          iconKey: 'menu',
          toolPanel: 'agFiltersToolPanel',
          minWidth: 100,
          maxWidth: 400,
          width: 250,
        },
      ],
      defaultToolPanel: 'filters',
      position: 'left',
  }
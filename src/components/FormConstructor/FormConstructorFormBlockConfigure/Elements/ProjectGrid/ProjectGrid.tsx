import { FC } from 'react'
import { IProjectGrid, ProjectTableView } from './types'
import { Table, TableColumn } from '@consta/uikit/Table'
import { Text } from '@consta/uikit/Text'
import { Pagination } from '@consta/uikit/Pagination'
import { currentPage, range, rows } from './mocks'
import { Badge } from '@consta/uikit/Badge'
import { IconsCell } from './Icons'
import style from './styles.module.css'

export const ProjectGrid: FC<IProjectGrid> = ({ element }) => {
  const renderNameCell = (row: ProjectTableView) => (
    <Text view='link' cursor='pointer'>
      {row.name}
    </Text>
  )

  const renderStatusCell = (row: ProjectTableView) =>
    row.status ? <Badge view='stroked' label={row.status} /> : null

  const renderIconsCell = () => <IconsCell />

  const columnDefs: TableColumn<ProjectTableView>[] = [
    { accessor: 'name', width: 160, title: 'Название', renderCell: renderNameCell },
    { accessor: 'companyName', width: 160, title: 'ДО' },
    { accessor: 'fieldName', width: 160, title: 'Месторождение' },
    { accessor: 'createdBy', width: 160, title: 'Автор' },
    { accessor: 'changedAt', width: 160, title: 'Дата изменения' },
    { accessor: 'status', title: 'Статус', renderCell: renderStatusCell },
    { accessor: 'icons', title: '', renderCell: renderIconsCell },
  ]

  return (
    <div className={style.ProjectGrid}>
      <Table
        className='m-b-2'
        size='m'
        rows={rows}
        columns={columnDefs}
        emptyRowsPlaceholder={<Text>Пусто</Text>}
        borderBetweenRows={true}
      />
      <Pagination
        className='p-v-5'
        size='s'
        totalPages={range}
        currentPage={currentPage}
        onChange={() => {}}
      />
    </div>
  )
}

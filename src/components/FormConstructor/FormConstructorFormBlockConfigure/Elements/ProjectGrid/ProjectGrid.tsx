import { FC, useState } from 'react'
import { IProjectGrid, ProjectTableView } from './types'
import { Table, TableColumn } from '@consta/uikit/Table'
import { Text } from '@consta/uikit/Text'
import { Pagination } from '@consta/uikit/Pagination'
import { currentPage, range, rows } from './mocks'
import { Badge } from '@consta/uikit/Badge'
import { IconsCell } from './Icons'
import style from './styles.module.css'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { IconBento } from '@consta/uikit/IconBento'
import { IconAdd } from '@consta/uikit/IconAdd'
import { IconHamburger } from '@consta/uikit/IconHamburger'
import { IconComponent } from '@consta/icons/Icon'
import { SelectableLayerFitSpace } from '../../SelectableLayer/SelectableLayerFitSpace'
import { ElementTypes, FormElementTypes } from '../../../coreTypes'
import { Button } from '@consta/uikit/Button'

type Item = {
  name: string
  icon: IconComponent
}

const sortGroups = ['Последнее', 'Избранное', 'Все']

const groupTypes: Item[] = [
  { name: 'Бенто', icon: IconBento },
  { name: 'Бургер', icon: IconHamburger },
]

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
    { accessor: 'changedAt', width: 155, title: 'Дата изменения' },
    { accessor: 'status', title: 'Статус', renderCell: renderStatusCell },
    { accessor: 'icons', title: '', renderCell: renderIconsCell, align: 'right' },
  ]

  const [choisenSortGroup, setChoisenSortGroup] = useState<string>()

  return (
    <SelectableLayerFitSpace
      className={style.TableView}
      parentElementId={element.id}
      elementType={FormElementTypes.ProjectGrid}
      elementTypeUsage={ElementTypes.FormElement}
    >
      <div className={style.HeaderButtons}>
        <Text size='2xl' as='h1'>
          Проекты
        </Text>
        <Button size='s' iconSize='s' iconLeft={IconAdd} label='Новые проект' />
      </div>
      <div className={style.FilterButtons}>
        <ChoiceGroup
          name='ChoiceGroupType'
          value={choisenSortGroup}
          onChange={({ value }) => setChoisenSortGroup(value)}
          items={sortGroups}
          size='s'
          getItemLabel={item => item}
        />
        <ChoiceGroup
          name='ChoiceGroupGrid'
          value={groupTypes[1]}
          items={groupTypes}
          getItemLabel={item => item.name}
          getItemIcon={item => item.icon}
          onChange={() => {}}
          size='s'
          view='secondary'
          onlyIcon
        />
      </div>
      <div className={style.ProjectGrid}>
        <Table
          size='m'
          rows={rows}
          columns={columnDefs}
          emptyRowsPlaceholder={<Text>Пусто</Text>}
          borderBetweenRows={true}
        />
        <Pagination size='s' totalPages={range} currentPage={currentPage} onChange={() => {}} />
      </div>
    </SelectableLayerFitSpace>
  )
}

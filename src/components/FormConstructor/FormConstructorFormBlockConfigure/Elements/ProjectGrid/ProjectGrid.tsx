import type { FC } from 'react'
import { useState } from 'react'
import type { IconComponent } from '@consta/icons/Icon'
import { IconAdd } from '@consta/icons/IconAdd'
import { IconBento } from '@consta/icons/IconBento'
import { IconHamburger } from '@consta/icons/IconHamburger'
import { Badge } from '@consta/uikit/Badge'
import { Button } from '@consta/uikit/Button'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Pagination } from '@consta/uikit/Pagination'
import type { TableColumn } from '@consta/uikit/Table'
import { Table } from '@consta/uikit/Table'
import { Text } from '@consta/uikit/Text'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayerFitSpace } from '../../SelectableLayer'

import { IconsCell } from './Icons'
import { currentPage, range, rows } from './mocks'
import type { IProjectGrid, ProjectTableView } from './types'

import style from './styles.module.css'

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
    <Text view="link" cursor="pointer">
      {row.name}
    </Text>
  )

  const renderStatusCell = (row: ProjectTableView) =>
    row.status ? <Badge view="stroked" label={row.status} /> : null

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
      elementType={FormElementDictTypes.ProjectGrid}
      elementTypeUsage={ElementTypes.FormElement}>
      <div className={style.HeaderButtons}>
        <Text size="2xl" as="h1">
          Проекты
        </Text>
        <Button size="s" iconSize="s" iconLeft={IconAdd} label="Новые проект" />
      </div>
      <div className={style.FilterButtons}>
        <ChoiceGroup
          name="ChoiceGroupType"
          value={choisenSortGroup}
          items={sortGroups}
          size="s"
          getItemLabel={item => item}
          onChange={value => {
            setChoisenSortGroup(value)
          }}
        />
        <ChoiceGroup
          name="ChoiceGroupGrid"
          value={groupTypes[1]}
          items={groupTypes}
          getItemLabel={item => item.name}
          getItemIcon={item => item.icon}
          size="s"
          view="secondary"
          onlyIcon={true}
          onChange={() => {}}
        />
      </div>
      <div className={style.ProjectGrid}>
        <Table
          size="m"
          rows={rows}
          columns={columnDefs}
          emptyRowsPlaceholder={<Text>Пусто</Text>}
          borderBetweenRows={true}
        />
        <Pagination size="s" value={currentPage} items={range} onChange={() => {}} />
      </div>
    </SelectableLayerFitSpace>
  )
}

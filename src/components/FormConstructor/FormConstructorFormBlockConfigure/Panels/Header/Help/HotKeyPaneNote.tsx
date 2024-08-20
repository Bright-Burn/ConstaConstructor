import { IconArrowUp } from '@consta/icons/IconArrowUp'
import { IconThumbUp } from '@consta/icons/IconThumbUp'
import { Button } from '@consta/uikit/Button'
import type { TableColumn } from '@consta/uikit/Table'
import { Table } from '@consta/uikit/Table'

import { IconCommand } from './IconCommand'
import { IconDel } from './IconDel'

import styles from './styles.module.css'

interface IHotkeys {
  onClose: () => void
}
export const HotKeyPaneNote: React.FC<IHotkeys> = ({ onClose }) => {
  const rows = [
    {
      action: 'Отмена',
      win: (
        <div>
          <Button label="ctrl" view="ghost" className="m-r-s" /> <Button label="z" view="ghost" />
        </div>
      ),
      mac: (
        <div className="container-row align-center m-r-s">
          <Button onlyIcon={true} iconLeft={IconArrowUp} view="ghost" className="m-r-s" />
          <Button onlyIcon={true} iconLeft={IconCommand} view="ghost" className="m-r-s" />{' '}
          <Button label="z" view="ghost" />
        </div>
      ),
      id: '1',
    },
    {
      action: 'Скрыть/показать панель',
      win: (
        <div>
          <Button label="ctrl" view="ghost" className="m-r-s" />{' '}
          <Button label="space" view="ghost" />
        </div>
      ),
      mac: (
        <div className="container-row align-center m-r-s">
          <Button onlyIcon={true} iconLeft={IconArrowUp} view="ghost" className="m-r-s" />
          <Button onlyIcon={true} iconLeft={IconCommand} view="ghost" className="m-r-s" />
          <Button label="space" view="ghost" />
        </div>
      ),
      id: '2',
    },
    {
      action: 'Удалить',
      win: (
        <div>
          <Button label="delete" view="ghost" />
        </div>
      ),
      mac: (
        <div className="container-row align-center m-r-s">
          <Button label="fn" view="ghost" className="m-r-s" />{' '}
          <Button onlyIcon={true} iconLeft={IconDel} view="ghost" />
        </div>
      ),
      id: '3',
    },
    {
      action: 'Копировать с наследованием',
      win: (
        <div>
          <Button label="ctrl" view="ghost" className="m-r-s" /> <Button label="D" view="ghost" />
        </div>
      ),
      mac: (
        <div>
          <Button label="ctrl" view="ghost" className="m-r-s" /> <Button label="D" view="ghost" />
        </div>
      ),
      id: '3',
    },
    {
      action: 'Найти копии',
      win: (
        <div>
          <Button label="ctrl" view="ghost" className="m-r-s" /> <Button label="Q" view="ghost" />
        </div>
      ),
      mac: (
        <div>
          <Button label="ctrl" view="ghost" className="m-r-s" /> <Button label="Q" view="ghost" />
        </div>
      ),
      id: '4',
    },
  ]

  const columns: TableColumn<(typeof rows)[number]>[] = [
    {
      title: 'Действие',
      accessor: 'action',
    },
    {
      title: 'Windows/Linux',
      accessor: 'win',
      renderCell: row => row.win,
    },
    {
      title: 'Mac',
      accessor: 'mac',
      renderCell: row => row.mac,
    },
  ]
  return (
    <div className={styles.hotkeyContainer}>
      <div className={styles.hotKeyPane}>
        <Table columns={columns} rows={rows} />
      </div>
      <Button label="Круто!" view="primary" iconLeft={IconThumbUp} onClick={onClose} />
    </div>
  )
}

import { Text } from '@consta/uikit/Text'
import styles from './styles.module.css'
import {
  DECLINE_ACTION_MAC,
  DECLINE_ACTION_WIN,
  DECLINE_TEXT,
  DELETE,
  DELETE_ELEMENT_MAC,
  DELETE_ELEMENT_WIN,
  HIDE_SHOW_PANELS,
  HIDE_SHOW_PANELS_MAC,
  HIDE_SHOW_PANELS_WIN,
} from './constants'
import { Table, TableColumn } from '@consta/uikit/Table'
import { Button } from '@consta/uikit/Button'
import { IconThumb } from './IconThumb'
import { IconArrowUp } from '@consta/icons/IconArrowUp'
import { IconCommand } from './IconCommand'
import { IconDel } from './IconDel'

interface IHotkeys {
  onClose: () => void
}
export const HotKeyPaneNote: React.FC<IHotkeys> = ({ onClose }) => {
  const rows = [
    {
      action: 'Отмена',
      win: (
        <div>
          <Button label={'ctrl'} view='ghost' className='m-r-s' />{' '}
          <Button label={'z'} view='ghost' />
        </div>
      ),
      mac: (
        <div className='container-row align-center m-r-s'>
          <Button onlyIcon iconLeft={IconArrowUp} view='ghost' className='m-r-s' />
          <Button onlyIcon iconLeft={IconCommand} view='ghost' className='m-r-s' />{' '}
          <Button label={'z'} view='ghost' />
        </div>
      ),
      id: '1',
    },
    {
      action: 'Скрыть/показать панель',
      win: (
        <div>
          <Button label={'ctrl'} view='ghost' className='m-r-s' />{' '}
          <Button label={'space'} view='ghost' />
        </div>
      ),
      mac: (
        <div className='container-row align-center m-r-s'>
          <Button onlyIcon iconLeft={IconArrowUp} view='ghost' className='m-r-s' />
          <Button onlyIcon iconLeft={IconCommand} view='ghost' className='m-r-s' />
          <Button label={'space'} view='ghost' />
        </div>
      ),
      id: '2',
    },
    {
      action: 'Удалить',
      win: (
        <div>
          <Button label={'ctrl'} view='ghost' className='m-r-s' />{' '}
          <Button label={'delete'} view='ghost' />
        </div>
      ),
      mac: (
        <div className='container-row align-center m-r-s'>
          <Button label={'fn'} view='ghost' className='m-r-s' />{' '}
          <Button onlyIcon iconLeft={IconDel} view='ghost' />
        </div>
      ),
      id: '3',
    },
  ]

  const columns: TableColumn<typeof rows[number]>[] = [
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
      <Button label={'Круто!'} iconLeft={IconThumb} onClick={onClose} />
    </div>
  )
}

import { useState } from 'react'
import { IconDownload } from '@consta/icons/IconDownload'
import { IconMoon } from '@consta/icons/IconMoon'
import { IconQuestion } from '@consta/icons/IconQuestion'
import { IconSun } from '@consta/icons/IconSun'
import { IconUpload } from '@consta/icons/IconUpload'
import { Button } from '@consta/uikit/Button'
import { FileField } from '@consta/uikit/FileField'
import { Modal } from '@consta/uikit/Modal'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'

import { MainIcon } from '../../../../../Icons'
import {
  checkIsGridVisible,
  checkViewMode,
  toggleGrid,
  useAppDispatch,
  useAppSelector,
} from '../../../store'
import { localStorageObserver, useTheme } from '../../../utils'

import { useProject } from './headerServices'
import { HotKeyPaneNote } from './Help'
import { Pages } from './Pages'

import style from './Header.module.css'

export const Header: React.FC = () => {
  const { onDownloadProject, saveToHtml, onSaveProject } = useProject()
  const [showNotes, setShowNotes] = useState<boolean>(false)
  const theme = useTheme()
  const onNotesOpen = () => {
    setShowNotes(true)
  }

  const onNotesClose = () => {
    setShowNotes(false)
  }
  const isViewMode = useAppSelector(checkViewMode)
  if (isViewMode) {
    return null
  }
  const toggleTheme = () => {
    localStorageObserver.setItem(
      'theme',
      localStorage.getItem('theme') === 'dark' ? 'light' : 'dark',
    )
  }
  const dispatch = useAppDispatch()

  const isGridVisible = useAppSelector(checkIsGridVisible)

  const onClickShowGrid = () => {
    dispatch(toggleGrid())
  }
  return (
    <div className={`${style.headerContainer} container-row`}>
      <div className="container-row align-center ">
        <MainIcon />
        <div className={style.divider} />
        <Button
          view="clear"
          iconRight={IconQuestion}
          size="xs"
          onlyIcon={true}
          onClick={onNotesOpen}
        />
        <Pages />
      </div>
      <div className="container-row">
        <Button
          onlyIcon={true}
          iconLeft={theme === 'dark' ? IconMoon : IconSun}
          view="clear"
          size="xs"
          className="m-r-xs"
          onClick={toggleTheme}
        />
        <div className="container-row align-center ">
          <Text className="m-r-s" size="s" view="primary">
            grid
          </Text>
          <Switch checked={isGridVisible} size="xs" onChange={onClickShowGrid} />
        </div>
        <FileField id="loader_project" onChange={onDownloadProject}>
          {props => (
            <Button
              id="btn"
              {...props}
              label="Импортировать"
              view="clear"
              iconLeft={IconDownload}
              size="xs"
            />
          )}
        </FileField>

        <Button
          label="json"
          iconLeft={IconUpload}
          className="m-r-xs"
          view="primary"
          size="xs"
          onClick={onSaveProject}
        />
        <Button label="html" view="primary" size="xs" iconLeft={IconUpload} onClick={saveToHtml} />
      </div>
      <Modal isOpen={showNotes} onClickOutside={onNotesClose} onEsc={onNotesClose}>
        <HotKeyPaneNote onClose={onNotesClose} />
      </Modal>
    </div>
  )
}

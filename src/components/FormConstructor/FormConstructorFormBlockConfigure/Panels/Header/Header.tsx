import { useState } from 'react'
import { IconDownload } from '@consta/icons/IconDownload'
import { IconQuestion } from '@consta/icons/IconQuestion'
import { IconUpload } from '@consta/icons/IconUpload'
import { Button } from '@consta/uikit/Button'
import { FileField } from '@consta/uikit/FileField'
import { Modal } from '@consta/uikit/Modal'

import { MainIcon } from '../../../../../Icons'
import { checkViewMode, useAppSelector } from '../../../store'

import { useProject } from './headerServices'
import { HotKeyPaneNote } from './Help'
import { ProjectName } from './ProjectName'

import style from './Header.module.css'

export const Header: React.FC = () => {
  const { onChangeProjectName, onDownloadProject, projectName, saveToHtml, onSaveProject } =
    useProject()
  const [showNotes, setShowNotes] = useState<boolean>(false)

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

  return (
    <div className={`${style.headerContainer} container-row`}>
      <div className="container-row align-center ">
        <MainIcon />
        <Button
          label="Справка"
          view="clear"
          iconRight={IconQuestion}
          size="xs"
          onClick={onNotesOpen}
        />
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
      </div>
      <ProjectName projectName={projectName} onChangeProjectName={onChangeProjectName} />
      <div>
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

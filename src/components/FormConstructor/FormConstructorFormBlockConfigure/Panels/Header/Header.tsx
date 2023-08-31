import { Button } from '@consta/uikit/Button'
import style from './Header.module.css'
import { IconUpload } from '@consta/icons/IconUpload'
import { MainIcon } from '../../../../../Icons'
import { IconQuestion } from '@consta/icons/IconQuestion'
import { IconDownload } from '@consta/icons/IconDownload'
import { FileField } from '@consta/uikit/FileField'
import { useProject } from './headerServices'
import { useState } from 'react'
import { Modal } from '@consta/uikit/Modal'
import { HotKeyPaneNote } from './Help'
import { ProjectName } from './ProjectName'

export const Header: React.FC = () => {
  const {
    onChangeProjectName,
    onDownloadProject,
    onDownloadOldProject,
    onSaveProject,
    projectName,
  } = useProject()
  const [showNotes, setShowNotes] = useState<boolean>(false)
  const onNotesOpen = () => {
    setShowNotes(true)
  }

  const onNotesClose = () => {
    setShowNotes(false)
  }
  return (
    <div className={`${style.headerContainer} container-row`}>
      <div className='container-row align-center '>
        <MainIcon />
        <Button
          label='Справка'
          view='clear'
          iconRight={IconQuestion}
          size='xs'
          onClick={onNotesOpen}
        />
        <FileField id={'loader_project_old'} onChange={onDownloadOldProject}>
          {props => (
            <Button
              id={'btn'}
              {...props}
              label='Импортировать старый json'
              view='clear'
              iconLeft={IconDownload}
              size='xs'
            />
          )}
        </FileField>
        <FileField id={'loader_project'} onChange={onDownloadProject}>
          {props => (
            <Button
              id={'btn'}
              {...props}
              label='Импортировать'
              view='clear'
              iconLeft={IconDownload}
              size='xs'
            />
          )}
        </FileField>
      </div>
      <ProjectName onChangeProjectName={onChangeProjectName} projectName={projectName} />
      <Button
        label={'Экспортировать'}
        iconLeft={IconUpload}
        view='primary'
        size='xs'
        onClick={onSaveProject}
      />
      <Modal isOpen={showNotes} onClickOutside={onNotesClose} onEsc={onNotesClose}>
        <HotKeyPaneNote onClose={onNotesClose} />
      </Modal>
    </div>
  )
}

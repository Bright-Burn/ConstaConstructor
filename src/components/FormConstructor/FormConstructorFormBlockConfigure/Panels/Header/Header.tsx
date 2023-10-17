import { Button } from '@consta/uikit/Button'
import style from './Header.module.css'
import { IconUpload } from '@consta/icons/IconUpload'
import { MainIcon } from '../../../../../Icons'
import { IconQuestion } from '@consta/icons/IconQuestion'
import { IconDownload } from '@consta/icons/IconDownload'
import { FileField } from '@consta/uikit/FileField'
import { useProject } from './headerServices'
import { useEffect, useState } from 'react'
import { Modal } from '@consta/uikit/Modal'
import { HotKeyPaneNote } from './Help'
import { ProjectName } from './ProjectName'

export const Header: React.FC = () => {
  const { onChangeProjectName, onDownloadProject, onSaveProject, projectName, onDownloadProjectFromDiv, saveToHtml } = useProject()
  const [showNotes, setShowNotes] = useState<boolean>(false)
  useEffect(() => {
    const loadedData = document.getElementById('loaded_data')
    
    if(loadedData) {
      onDownloadProjectFromDiv(loadedData.innerHTML)
    }
  }, [])
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

      <Button  label={'Экспортировать html'}
        iconLeft={IconUpload} onClick={saveToHtml}/>
      <Modal isOpen={showNotes} onClickOutside={onNotesClose} onEsc={onNotesClose}>
        <HotKeyPaneNote onClose={onNotesClose} />
      </Modal>
    </div>
  )
}

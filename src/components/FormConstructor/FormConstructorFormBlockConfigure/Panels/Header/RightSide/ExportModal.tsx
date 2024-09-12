import { useState } from 'react'
import { IconClose } from '@consta/icons/IconClose'
import { Button } from '@consta/uikit/Button'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Modal } from '@consta/uikit/Modal'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import { useProject } from '../headerServices'

import styles from './styles.module.css'

interface IExportModal {
  onClose: () => void
  isOpen: boolean
}
type exportType = 'json' | 'html'
const exportItems: exportType[] = ['json', 'html']
export const ExportModal: React.FC<IExportModal> = ({ isOpen, onClose }) => {
  const [exportType, setExportType] = useState<exportType>('json')
  const [projectName, setProjectName] = useState<string>('Новый проект')
  const { saveToHtml, onSaveProject } = useProject()
  const onChangeExportType = (value: 'json' | 'html') => {
    setExportType(value)
  }
  const onSave = () => {
    if (exportType === 'json') onSaveProject(projectName)
    else saveToHtml(projectName)
    onClose()
  }
  const onChangeProjectName = (value: string | null) => {
    setProjectName(value ?? '')
  }
  return (
    <Modal isOpen={isOpen} className={styles.modalHeight} onClickOutside={onClose} onEsc={onClose}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Text view="primary" size="xs">
            Export{' '}
          </Text>
          <Button onlyIcon={true} iconLeft={IconClose} view="ghost" size="xs" onClick={onClose} />
        </div>
        <TextField
          size="xs"
          withClearButton={true}
          value={projectName}
          onChange={onChangeProjectName}
        />
        <ChoiceGroup
          items={exportItems}
          name="exportType"
          getItemLabel={(item: string) => item}
          value={exportType}
          size="xs"
          view="ghost"
          onChange={onChangeExportType}
        />
        <div>
          <Button label="Save" size="xs" onClick={onSave} />
        </div>
      </div>
    </Modal>
  )
}

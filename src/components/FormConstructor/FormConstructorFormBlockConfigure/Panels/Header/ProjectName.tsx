import { useState } from 'react'
import { IconAdd } from '@consta/icons/IconAdd'
import { IconEdit } from '@consta/icons/IconEdit'
import { Button } from '@consta/uikit/Button'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import style from './Header.module.css'

interface IProjectName {
  projectName: string | null
  onChangeProjectName: (value: string | null) => void
}
export const ProjectName: React.FC<IProjectName> = ({ onChangeProjectName, projectName }) => {
  const [isEditingProjectName, setIsEditingProjectName] = useState(false)
  const onStartEditing = () => {
    setIsEditingProjectName(true)
  }
  const onEndEditing = () => {
    setIsEditingProjectName(false)
  }

  return (
    <div className={`${style.projectName} container-row`}>
      {isEditingProjectName ? (
        <>
          {' '}
          <TextField size="xs" value={projectName} onChange={onChangeProjectName} />{' '}
          <Button
            view="clear"
            iconLeft={IconAdd}
            size="xs"
            onlyIcon={true}
            onClick={onEndEditing}
          />
        </>
      ) : (
        <>
          {' '}
          <Text weight="light" size="xs" className="p-r-l">
            {projectName}
          </Text>
          <Button
            view="clear"
            iconLeft={IconEdit}
            size="xs"
            onlyIcon={true}
            onClick={onStartEditing}
          />
        </>
      )}
    </div>
  )
}

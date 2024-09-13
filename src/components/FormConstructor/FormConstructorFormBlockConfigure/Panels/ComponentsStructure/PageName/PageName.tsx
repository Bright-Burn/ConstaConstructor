import React, { useState } from 'react'
import { IconCheck } from '@consta/icons/IconCheck'
import { IconEdit } from '@consta/icons/IconEdit'
import { Button } from '@consta/uikit/Button'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import { usePageName } from './PageService'

import style from './styles.module.css'

export const PageName: React.FC = () => {
  const [isEditingPageName, setIsEditingPageName] = useState(false)
  const { onChangePageName, projectName, onSubmitPageName } = usePageName()

  const onStartEditing = () => {
    setIsEditingPageName(true)
  }
  const onEndEditing = () => {
    onSubmitPageName()
    setIsEditingPageName(false)
  }

  return (
    <div className={`${style.projectName} container-row`}>
      {isEditingPageName ? (
        <>
          {' '}
          <TextField
            className="m-r-2xs"
            size="xs"
            value={projectName}
            type="text"
            onChange={onChangePageName}
          />{' '}
          <Button
            view="clear"
            iconLeft={IconCheck}
            size="xs"
            onlyIcon={true}
            onClick={onEndEditing}
          />
        </>
      ) : (
        <>
          {' '}
          <Text weight="light" size="xs" className="p-r-l" view="primary">
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

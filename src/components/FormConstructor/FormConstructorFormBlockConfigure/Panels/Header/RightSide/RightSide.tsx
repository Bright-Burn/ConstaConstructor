import { useState } from 'react'
import { IconMoon } from '@consta/icons/IconMoon'
import { IconSun } from '@consta/icons/IconSun'
import { Button } from '@consta/uikit/Button'
import { FileField } from '@consta/uikit/FileField'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'

import { checkIsGridVisible, toggleGrid, useAppDispatch, useAppSelector } from '../../../../store'
import { localStorageObserver, useTheme } from '../../../../utils'
import { useProject } from '../headerServices'

import { ExportModal } from './ExportModal'

export const RightSide = () => {
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false)
  const { onDownloadProject } = useProject()
  const theme = useTheme()

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
  const onToggleExportModal = () => {
    setIsExportModalOpen(!isExportModalOpen)
  }
  return (
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
            className="m-r-xs m-l-xs"
            label="import"
            view="ghost"
            size="xs"
          />
        )}
      </FileField>
      <Button label="export" view="primary" size="xs" onClick={onToggleExportModal} />
      <ExportModal isOpen={isExportModalOpen} onClose={onToggleExportModal} />
    </div>
  )
}

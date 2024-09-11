import { IconClose } from '@consta/icons/IconClose'
import { Button } from '@consta/uikit/Button'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'

import {
  getRightPanelType,
  getSelectedView,
  setRightPanelMode,
  togglePanels,
  useAppDispatch,
  useAppSelector,
} from '../../../store'
import { RightPanelsSwitch } from '../../../store/Viewer/types'

import css from './styles.module.css'

export const RightPanelHeader = () => {
  const rightPaneType = useAppSelector(getRightPanelType)
  // Признак был ли выбран Layout
  const isViewTypeLayout = useAppSelector(getSelectedView)?.elementType === 'Layout'
  const dispatch = useAppDispatch()

  const toggaleRightPane = () => {
    dispatch(togglePanels('right'))
  }

  const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.currentTarget.checked
    const mode = checked ? RightPanelsSwitch.DeveloperPanel : RightPanelsSwitch.Settings
    dispatch(setRightPanelMode(mode))
  }

  const text = rightPaneType === RightPanelsSwitch.DeveloperPanel ? 'Разработка' : 'Настройки'
  const isCheked = rightPaneType === RightPanelsSwitch.DeveloperPanel

  return (
    <div className={css.rightPanelTitle}>
      <div className="container-row">
        <Text size="xs" className="m-r-xs">
          {text}
        </Text>
        {isViewTypeLayout ? <Switch checked={isCheked} size="s" onChange={onCheck} /> : null}
      </div>
      <Button
        onlyIcon={true}
        iconLeft={IconClose}
        size="xs"
        view="ghost"
        onClick={toggaleRightPane}
      />
    </div>
  )
}

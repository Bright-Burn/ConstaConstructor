import { IconClose } from '@consta/icons/IconClose'
import { Button } from '@consta/uikit/Button'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'

import {
  getRightPanelType,
  getSelectedView,
  RightPanelsSwitch,
  setRightPanelMode,
  togglePanels,
  useAppDispatch,
  useAppSelector,
} from '../../../store'
import { codeElements } from '../DeveloperPanel'

import css from './styles.module.css'

export const RightPanelHeader = () => {
  const rightPanelType = useAppSelector(getRightPanelType)
  // Признак был ли выбран Layout
  const selectedElementType = useAppSelector(getSelectedView)?.elementType
  const developPanelAvailable = selectedElementType && codeElements.has(selectedElementType)
  const dispatch = useAppDispatch()

  const toggaleRightPane = () => {
    dispatch(togglePanels('right'))
  }

  const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.currentTarget.checked
    const mode = checked ? RightPanelsSwitch.DeveloperPanel : RightPanelsSwitch.Settings
    dispatch(setRightPanelMode(mode))
  }

  const text = rightPanelType === RightPanelsSwitch.DeveloperPanel ? 'DevMode' : 'Settings'
  const isCheked = rightPanelType === RightPanelsSwitch.DeveloperPanel

  return (
    <div className={css.rightPanelTitle}>
      <div className="container-row">
        <Text size="xs" view="primary" className="m-r-xs">
          {text}
        </Text>
        {developPanelAvailable ? <Switch checked={isCheked} size="s" onChange={onCheck} /> : null}
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

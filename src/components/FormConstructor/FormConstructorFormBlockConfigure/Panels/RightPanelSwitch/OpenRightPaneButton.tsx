import { IconArrowLeft } from '@consta/icons/IconArrowLeft'
import { Button } from '@consta/uikit/Button'
import { FC } from 'react'
import { useAppDispatch, togglePanels } from '../../../store'
import css from './styles.module.css'

export const OpenRightPaneButton: FC = () => {
  const dispatch = useAppDispatch()
  const toggaleRightPane = () => {
    dispatch(togglePanels('right'))
  }

  return (
    <div className={css.toggleButton}>
      <Button onlyIcon={true} iconLeft={IconArrowLeft} size="s" onClick={toggaleRightPane} />
    </div>
  )
}

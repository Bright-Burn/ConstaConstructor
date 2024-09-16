import type { FC } from 'react'
import { IconCheck } from '@consta/icons/IconCheck'
import { Button } from '@consta/uikit/Button'

import type { IBaseComponent } from '../../../../../../store'
import {
  sameInstanceElementsIdsSelector,
  updateBaseComponentAction,
  useAppDispatch,
  useAppSelector,
} from '../../../../../../store'

export const UpdateBaseComponentButton: FC<{ baseComponent: IBaseComponent }> = ({
  baseComponent,
}) => {
  const updateAvailable = useAppSelector(sameInstanceElementsIdsSelector).size
  const dispatch = useAppDispatch()

  const onButtonUpdateClick = () => {
    dispatch(
      updateBaseComponentAction({
        elements: baseComponent.views,
        instances: baseComponent.instances,
      }),
    )
  }

  return updateAvailable ? (
    <Button iconLeft={IconCheck} view="ghost" size="xs" onClick={onButtonUpdateClick} />
  ) : null
}

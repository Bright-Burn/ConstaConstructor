import type { FC } from 'react'
import { TextField } from '@consta/uikit/TextField'

import {
  getViewInfoByIdSelector,
  setViewLabel,
  useAppDispatch,
  useAppSelector,
} from '../../../store'

export const LabelSetting: FC<{ viewId: string }> = ({ viewId }) => {
  const dispatch = useAppDispatch()
  const viewInfo = useAppSelector(getViewInfoByIdSelector(viewId))
  const onChangeLabel = (value: string | null) => {
    dispatch(setViewLabel(viewId, value))
  }

  return (
    <TextField
      value={viewInfo?.label}
      leftSide="label"
      size="xs"
      min="0"
      onChange={onChangeLabel}
    />
  )
}

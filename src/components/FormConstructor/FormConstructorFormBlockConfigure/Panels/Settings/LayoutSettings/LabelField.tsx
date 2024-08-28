import { TextField } from '@consta/uikit/TextField'
import {
  setViewLabel,
  useAppDispatch,
  useAppSelector,
  getViewInfoByIdSelector,
} from '../../../../store'
import { FC } from 'react'

export const LabelField: FC<{ viewId: string }> = ({ viewId }) => {
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

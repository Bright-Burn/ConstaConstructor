import type { FC } from 'react'
import { TextField } from '@consta/uikit/TextField'

import {
  getViewInfoLabelByIdSelector,
  setViewLabel,
  useAppDispatch,
  useAppSelector,
} from '../../../store'

export const LabelSetting: FC<{ viewId: string }> = ({ viewId }) => {
  const dispatch = useAppDispatch()
  const label = useAppSelector(getViewInfoLabelByIdSelector(viewId))
  const onChangeLabel = (value: string | null) => {
    dispatch(setViewLabel(viewId, value))
  }

  return <TextField value={label} leftSide="label" size="xs" min="0" onChange={onChangeLabel} />
}

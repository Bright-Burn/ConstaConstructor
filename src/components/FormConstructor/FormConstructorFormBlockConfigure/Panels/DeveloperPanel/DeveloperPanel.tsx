import type { FC } from 'react'

import {
  getSelectedView,
  getSelectedViewPropsSelector,
  getViewInfoLabelByIdSelector,
  useAppSelector,
} from '../../../store'

import { CodeText } from './CodeText'
import { getCode } from './getCode'

import styles from './styles.module.css'

export const DeveloperPanel: FC = () => {
  const selectedView = useAppSelector(getSelectedView)
  const selectedViewProps = useAppSelector(getSelectedViewPropsSelector)
  const viewLabel = useAppSelector(getViewInfoLabelByIdSelector(selectedView?.elementId || ''))

  const code = selectedViewProps ? getCode(selectedViewProps, viewLabel || '') : null

  return code ? (
    <div className={`container-column p-r-xs flex-grow-1 p-t-xs ${styles.code_pane}`}>
      <CodeText text={code.cssCode} label="Css" />
      <CodeText text={code.jsxCode} label="Дизайн система" />
    </div>
  ) : null
}

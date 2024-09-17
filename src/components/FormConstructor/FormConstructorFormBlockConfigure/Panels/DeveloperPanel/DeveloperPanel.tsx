import type { FC } from 'react'

import {
  getSelectedView,
  getSelectedViewPropsSelector,
  getViewInfoLabelByIdSelector,
  useAppSelector,
} from '../../../store'

import type { BuildedCode } from './CodeBuilder'
import { codeBuilders } from './CodeBuilder'
import { CodeText } from './CodeText'

import styles from './styles.module.css'

export const DeveloperPanel: FC = () => {
  const selectedView = useAppSelector(getSelectedView)
  const selectedViewProps = useAppSelector(getSelectedViewPropsSelector)
  const viewLabel = useAppSelector(getViewInfoLabelByIdSelector(selectedView?.elementId || ''))
  let code: BuildedCode | null = null

  if (selectedViewProps) {
    switch (selectedViewProps.type) {
      case 'Layout': {
        const buildFunc = codeBuilders[selectedViewProps.type]
        if (buildFunc) {
          code = buildFunc(viewLabel, selectedViewProps)
        }
        break
      }
    }
  }

  return code ? (
    <div className={`container-column p-r-xs flex-grow-1 p-t-xs ${styles.code_pane}`}>
      <CodeText text={code.cssCode} label="Css стили" />
      <CodeText text={code.jsxCode} label="Стили дизайн системы" />
    </div>
  ) : null
}

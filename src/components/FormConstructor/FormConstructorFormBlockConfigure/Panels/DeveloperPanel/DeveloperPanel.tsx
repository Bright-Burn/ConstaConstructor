import type { FC } from 'react'

import { getSelectedViewPropsSelector, useAppSelector } from '../../../store'

import { buildLayoutStyles } from './CodeBuilder'
import { CodeText } from './CodeText'

import styles from './styles.module.css'

export const DeveloperPanel: FC = () => {
  const selectedViewProps = useAppSelector(getSelectedViewPropsSelector)

  const code =
    selectedViewProps?.type === 'Layout' ? buildLayoutStyles(selectedViewProps.props) : undefined

  return code ? (
    <div className={`container-column p-r-xs flex-grow-1 m-t-xs ${styles.code_pane}`}>
      <CodeText text={code.cssCode} label="Css стили" />
      <CodeText text={code.jsxCode} label="Стили дизайн системы" />
    </div>
  ) : null
}

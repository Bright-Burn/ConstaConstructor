import { FC } from 'react'
import { CodeText } from './CodeText'
import styles from './styles.module.css'
import { getSelectedViewPropsSelector, useAppSelector } from '../../../store'
import { buildCode, BuildedCode } from './CodeBuilder'

export const DeveloperPanel: FC = () => {
  const selectedViewProps = useAppSelector(getSelectedViewPropsSelector)

  const code = selectedViewProps ? buildCode(selectedViewProps) : undefined

  return code ? (
    <div className={`container-column p-r-xs flex-grow-1 ${styles.code_pane}`}>
      <CodeText text={code.cssCode} label="Стили" />
      <CodeText text={code.jsxCode} label="Код компонента" />
    </div>
  ) : null
}

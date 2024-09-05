import { FC } from 'react'
import { CodeText } from './CodeText'
import styles from './styles.module.css'

export const DeveloperPanel: FC = () => {
  return (
    <div className={`container-column p-r-xs flex-grow-1 ${styles.code_pane}`}>
      <CodeText text="" label="Стили" />
      <CodeText text="" label="Стили" />
    </div>
  )
}

import { FC } from 'react'
import { CodeTextProps } from './types'
import { Text } from '@consta/uikit/Text'
import styles from './styles.module.css'

export const CodeText: FC<CodeTextProps> = ({ text, label }) => {
  return text.length ? (
    <Text size="s" className={`p-l-xs p-r-xs p-b-xs p-t-xs ${styles.code}`}>
      {text}
    </Text>
  ) : null
}

import type { FC } from 'react'
import { IconCopy } from '@consta/icons/IconCopy'
import { Button } from '@consta/uikit/Button'

import type { CodeTextProps } from './types'

import styles from './styles.module.css'
import { useTheme } from '../../../utils'
import { Text } from '@consta/uikit/Text'

export const CodeText: FC<CodeTextProps> = ({ text, label }) => {
  const theme = useTheme()

  const onCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text)
      console.log('Copied to clipboard:', text)
    } catch (error) {
      console.error('Unable to copy to clipboard:', error)
    }
  }
  return text.length ? (
    <div>
      <div className="container-row space-between space-center m-b-xs">
        <Text size="xs" view="secondary">
          {label}
        </Text>
        <Button size="xs" onlyIcon={true} view="ghost" iconLeft={IconCopy} onClick={onCopyClick} />
      </div>
      <p
        className={`p-l-xs p-r-xs p-b-xs p-t-xs ${styles.code} ${theme === 'dark' ? styles.code_dark : ''}`}>
        {text}
      </p>
    </div>
  ) : null
}

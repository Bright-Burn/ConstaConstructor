import type { FC } from 'react'
import { IconCopy } from '@consta/icons/IconCopy'
import { Button } from '@consta/uikit/Button'

import type { CodeTextProps } from './types'

import styles from './styles.module.css'

export const CodeText: FC<CodeTextProps> = ({ text, label }) => {
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
      <div className="container-row space-between">
        <p className="p-b-xs">{label}</p>
        <Button size="xs" onlyIcon={true} view="ghost" iconLeft={IconCopy} onClick={onCopyClick} />
      </div>
      <p className={`p-l-xs p-r-xs p-b-xs p-t-xs ${styles.code}`}>{text}</p>
    </div>
  ) : null
}

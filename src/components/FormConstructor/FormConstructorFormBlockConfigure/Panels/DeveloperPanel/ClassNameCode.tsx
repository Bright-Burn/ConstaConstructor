import type { FC } from 'react'
import { IconUpload } from '@consta/icons/IconUpload'
import { Button } from '@consta/uikit/Button'

import { saveToFile } from '../../../utils'

import { getCssFromSpacingStyles } from './CodeBuilder'
import { CodeText } from './CodeText'

export const ClassNameCode: FC<{ text: string }> = ({ text }) => {
  const onUpload = () => {
    saveToFile(getCssFromSpacingStyles(), 'styles.css')
  }
  return (
    <>
      <CodeText text={text} label="classname" />
      <Button
        label="Общий Css конфиг стилей"
        view="secondary"
        iconLeft={IconUpload}
        size="xs"
        onClick={onUpload}
      />
    </>
  )
}

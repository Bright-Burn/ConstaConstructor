import { FC } from 'react'
import { CodeTextProps } from './types'

export const CodeText: FC<CodeTextProps> = ({ text }) => {
  return <div>{text}</div>
}

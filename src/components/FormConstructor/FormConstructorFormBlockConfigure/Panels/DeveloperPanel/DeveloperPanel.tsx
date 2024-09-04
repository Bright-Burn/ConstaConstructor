import { FC } from 'react'
import { CodeText } from './CodeText'

export const DeveloperPanel: FC = () => {
  
  return (
    <div>
      <CodeText text="" label="Стили" />
      <CodeText text="" label="Код" />
    </div>
  )
}

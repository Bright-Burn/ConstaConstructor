import React from 'react'
import { ResponsesEmptyPockets } from '@consta/uikit/ResponsesEmptyPockets'

import style from './styles.module.css'

export const NotFound = ({ title, description }: { title: string; description: string }) => {
  return (
    <ResponsesEmptyPockets
      className={style.notFound}
      title={title}
      description={description}
      actions={<></>}
      size="m"
    />
  )
}

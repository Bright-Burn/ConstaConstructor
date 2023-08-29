import React from 'react'
import style from './styles.module.css'
import { ResponsesEmptyPockets } from '@consta/uikit/ResponsesEmptyPockets'

export const NotFound = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      <ResponsesEmptyPockets
        className={style.notFound}
        title={title}
        description={description}
        actions={<></>}
        size='m'
      />
    </>
  )
}

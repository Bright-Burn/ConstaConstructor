import React from 'react'
import style from './styles.module.css'
import { ResponsesEmptyPockets } from '@consta/uikit/ResponsesEmptyPockets'

export const NotFound = () => {
  return (
    <>
      <ResponsesEmptyPockets
        className={style.notFound}
        title=' '
        description='Нет выбранного элемента для настройки'
        actions={<></>}
        size='m'
      />
    </>
  )
}

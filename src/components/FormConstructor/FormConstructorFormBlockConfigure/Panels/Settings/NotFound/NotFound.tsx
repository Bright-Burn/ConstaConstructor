import React from 'react'
import { Text } from '@consta/uikit/Text'
import style from './styles.module.css'
import { ResponsesEmptyPockets } from '@consta/uikit/ResponsesEmptyPockets'

export const NotFound = () => {
  return (
    <>
      <div className={style.paddingSvg}>
        <div className={style.notFound}>
          <ResponsesEmptyPockets
            title=' '
            description='Нет выбранного элемента для настройки'
            actions={<></>}
            size='m'
          />
        </div>
      </div>
    </>
  )
}

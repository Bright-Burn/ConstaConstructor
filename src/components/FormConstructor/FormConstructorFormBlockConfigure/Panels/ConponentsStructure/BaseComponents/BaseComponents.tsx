import { Button } from '@consta/uikit/Button'
import { FileField } from '@consta/uikit/FileField'
import React, { FC } from 'react'
import { readFile } from '../../../../utils'
import styles from './styles.module.css'

export const BaseComponents: FC = () => {
  const onChange = (e: DragEvent | React.ChangeEvent) => {
    const targer = e?.target as HTMLInputElement
    const files = targer?.files ? targer?.files : undefined

    if (files) {
      const filesArray = Array.from(files)
      filesArray.forEach(file => {
        readFile(file).then(json => {
        })
      })
    }
  }

  const onNewBaseComponentClick = () => {}

  return (
    <div className={`${styles.baseComponentsPanel} borderCard`}>
      <div className={styles.buttonsSaveLoad}>
        <FileField id={'loader'} onChange={onChange} multiple={true}>
          {props => (
            <Button
              id={'btn'}
              {...props}
              className='m-t-s'
              label={'Загрузить в реестр'}
              size={'xs'}
              view={'secondary'}
            />
          )}
        </FileField>
        <Button
          className='m-t-s'
          label={'Сохранить в файл'}
          onClick={onNewBaseComponentClick}
          size={'xs'}
          view={'secondary'}
        />
      </div>
      <div className={styles.baseComponents}></div>
    </div>
  )
}

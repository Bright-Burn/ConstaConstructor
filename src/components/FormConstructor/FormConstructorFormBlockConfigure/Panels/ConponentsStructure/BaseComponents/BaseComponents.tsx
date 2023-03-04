import { Button } from '@consta/uikit/Button'
import { FileField } from '@consta/uikit/FileField'
import React, { FC } from 'react'
import { IBaseComponent } from '../../../../store/baseComponentsItems'
import { readFile } from '../../../../utils'
import styles from './styles.module.css'
import {
  baseComponentsSlice,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from '../../../../store/baseComponentsItems'

export const BaseComponents: FC = () => {
  const dispatch = useBaseComponentsDispatch()

  const onChange = (e: DragEvent | React.ChangeEvent) => {
    const targer = e?.target as HTMLInputElement
    const files = targer?.files ? targer?.files : undefined

    if (files) {
      const filesArray = Array.from(files)
      filesArray.forEach(file => {
        readFile(file).then(json => {
          if (json) {
            const baseComponent: IBaseComponent = JSON.parse(json as string)
            dispatch(
              baseComponentsSlice.actions.addNewBaseElement({ baseComponent: baseComponent }),
            )
          }
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

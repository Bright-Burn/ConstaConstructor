import type { FC } from 'react'
import React, { useEffect } from 'react'
import { IconDownload } from '@consta/icons/IconDownload'
import { Button } from '@consta/uikit/Button'
import { FileField } from '@consta/uikit/FileField'
import { Text } from '@consta/uikit/Text'

import { JsonHelper } from '../../../../../../helpers'
import type { IBaseComponent } from '../../../../store'
import {
  addBaseElement,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from '../../../../store'
import { readFile } from '../../../../utils'
import {
  cardMock,
  dashboardMock,
  footerWithSwitchMock,
  gridMock,
  placeholderMock,
  PrototypeRectangleMock,
  PrototypeTextMock,
  simpleFormMock,
  TableMock,
  wizardFormMock,
} from '../../../Elements'

import { BaseComponentCardsList } from './BaseComponentCardsList'

import styles from './styles.module.css'

export const BaseComponents: FC = () => {
  const { baseComponents } = useBaseComponentsSelector(state => state.baseComponents)
  const baseComponentMocks = [
    placeholderMock,
    cardMock,
    gridMock,
    dashboardMock,
    simpleFormMock,
    wizardFormMock,
    footerWithSwitchMock,
    TableMock,
    PrototypeTextMock,
    PrototypeRectangleMock,
  ]

  const dispatch = useBaseComponentsDispatch()
  useEffect(() => {
    //Инициализация дефолтных компонент
    baseComponentMocks.forEach(mock => {
      if (!baseComponents.some(component => component.id === mock.id)) {
        dispatch(addBaseElement({ baseComponent: mock }))
      }
    })
  }, [baseComponentMocks, baseComponents])

  const onChange = (e: DragEvent | React.ChangeEvent) => {
    const target = e.target as EventTarget & HTMLInputElement

    if (target.files) {
      const filesArray = Array.from(target.files)

      filesArray.forEach(file => {
        readFile(file).then(json => {
          //TODO сделать проверку типов
          const baseComponent: IBaseComponent = JsonHelper.parse(json)
          dispatch(addBaseElement({ baseComponent }))
        })
      })
    }
  }

  return (
    <div className={styles.baseComponentsPanel}>
      <div className={styles.buttonsSaveLoad}>
        <Text view="secondary" size="xs">
          Импортировать компонент
        </Text>
        <FileField id="loader" multiple={true} onChange={onChange}>
          {props => (
            <Button
              id="btn"
              {...props}
              size="xs"
              onlyIcon={true}
              view="ghost"
              iconLeft={IconDownload}
            />
          )}
        </FileField>
      </div>
      <div className={styles.baseComponents}>
        <BaseComponentCardsList baseComponents={baseComponents} />
      </div>
    </div>
  )
}

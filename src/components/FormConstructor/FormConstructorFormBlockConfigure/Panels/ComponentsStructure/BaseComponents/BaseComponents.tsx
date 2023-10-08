import { Button } from '@consta/uikit/Button'
import { FileField } from '@consta/uikit/FileField'
import React, { FC, useEffect, useState } from 'react'
import { IBaseComponent, useBaseComponentsSelector } from '../../../../store/baseComponentsItems'
import { readFile } from '../../../../utils'
import styles from './styles.module.css'
import { useBaseComponentsDispatch } from '../../../../store/baseComponentsItems'
import { useAppSelector } from '../../../../store'
import { SaveModalCard } from '../../../../SaveModalCard'
import { customCardsTemplateMock } from '../../../Elements/CustomCardsTemplate/mock'
import {
  headerMock,
  placeholderMock,
  headerWithStatusMock,
  headerCognitiveGeologistMock,
  gridMock,
  dashboardMock,
  simpleFormMock,
  cardMock,
  wizardFormMock,
  footerWithSwitchMock,
  FormWithTwoColumnsMock,
  TableMock,
  ExpertiseFormMock,
  PrototypeTextMock,
  PrototypeRectangleMock,
} from '../../../Elements'
import { BaseComponentCardsList } from './BaseComponentCardsList'
import { saveModuleToFile, addBaseElement, getAllFormElements } from '../../../../store'
import { Text } from '@consta/uikit/Text'
import { IconDownload } from '@consta/icons/IconDownload'
import { JsonHelper } from '../../../../../../helpers'

export const BaseComponents: FC = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { baseComponents } = useBaseComponentsSelector(state => state.baseComponents)
  const baseComponentMocks = [
    customCardsTemplateMock,
    headerMock,
    placeholderMock,
    headerWithStatusMock,
    headerCognitiveGeologistMock,
    cardMock,
    gridMock,
    dashboardMock,
    simpleFormMock,
    wizardFormMock,
    footerWithSwitchMock,
    FormWithTwoColumnsMock,
    TableMock,
    ExpertiseFormMock,
    PrototypeTextMock,
    PrototypeRectangleMock,
  ]

  const dispatch = useBaseComponentsDispatch()
  useEffect(() => {
    //Инициализация дефолтных компонент
    baseComponentMocks.forEach(mock => {
      if (!baseComponents.some(component => component.id === mock.id))
        dispatch(addBaseElement({ baseComponent: mock }))
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
          dispatch(addBaseElement({ baseComponent: baseComponent }))
        })
      })
    }
  }

  const onSaveComponent = (name: string, description: string) => {
    if (selectedElement) {
      dispatch(saveModuleToFile(selectedElement.elementId, name))
      // const elementsList: (IFormElement | IGroupElement)[] = []
      // const childParentMap: Map<string, string> = new Map<string, string>([])

      // const prepareDataLayer = (currentId: string) => {
      //   // const elem = allElementsMap.get(currentId)
      //   // let childrenElemsIds: string[] = []
      //   // if (elem) {
      //   //   elementsList.push(elem)
      //   //   childrenElemsIds = allElementsTree.get(elem.id) || []
      //   //   // childrenComponentsTree.set(elem.id, childrenElemsIds)
      //   //   childrenElemsIds.forEach(childId => {
      //   //     childParentMap.set(childId, elem.id)
      //   //   })
      //   // }
      //   // if (childrenElemsIds.length) {
      //   //   childrenElemsIds.forEach(elemId => {
      //   //     prepareDataLayer(elemId)
      //   //   })
      //   // }
      // }

      // const id = selectedElement.elementId
      // prepareDataLayer(id)

      // const baseComponent: IBaseComponent = {
      //   id: uuid(),
      //   name: name,
      //   description: description,
      //   childrenElementList: elementsList,
      //   childParentMap: Array.from(childParentMap.entries()),
      // }

      // const fileData = JSON.stringify(baseComponent)
      // saveToFile(fileData, `${name}_BaseComponent.json`)
    }
  }

  return (
    <div className={`${styles.baseComponentsPanel}`}>
      <div className={styles.buttonsSaveLoad}>
        <Text view='secondary' size='xs'>
          Импортировать компонент
        </Text>
        <FileField id={'loader'} onChange={onChange} multiple={true}>
          {props => (
            <Button
              id={'btn'}
              {...props}
              size={'xs'}
              onlyIcon
              view='ghost'
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

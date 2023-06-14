import { Button } from '@consta/uikit/Button'
import { FileField } from '@consta/uikit/FileField'
import React, { FC, useEffect, useState } from 'react'
import { IBaseComponent, useBaseComponentsSelector } from '../../../../store/baseComponentsItems'
import { readFile, saveToFile } from '../../../../utils'
import styles from './styles.module.css'
import {
  baseComponentsSlice,
  useBaseComponentsDispatch,
} from '../../../../store/baseComponentsItems'
import { IFormElement, IGroupElement, useAppSelector } from '../../../../store/formElements'
import uuid from 'react-uuid'
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
  PrototypeTextElement,
  PrototypeTextMock,
} from '../../../Elements'
import { BaseComponentCardsList } from './BaseComponentCardsList'

export const BaseComponents: FC = () => {
  const [saveModalOpen, setSaveModalOpen] = useState<boolean>(false)

  const { selectedElement, allElementsTree, allElementsMap } = useAppSelector(
    state => state.formConstructor,
  )

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
  ]

  const dispatch = useBaseComponentsDispatch()
  useEffect(() => {
    baseComponentMocks.forEach(mock => {
      if (!baseComponents.some(component => component.id === mock.id))
        dispatch(baseComponentsSlice.actions.addNewBaseElement({ baseComponent: mock }))
    })
  }, [])

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

  const onSaveInFileBtnClick = () => {
    setSaveModalOpen(true)
  }

  const onCloseSaveModal = () => {
    setSaveModalOpen(false)
  }

  const onSaveComponent = (name: string, description: string) => {
    if (selectedElement) {
      const elementsList: (IFormElement | IGroupElement)[] = []
      const childParentMap: Map<string, string> = new Map<string, string>([])

      const prepareDataLayer = (currentId: string) => {
        const elem = allElementsMap.get(currentId)
        let childrenElemsIds: string[] = []
        if (elem) {
          elementsList.push(elem)
          childrenElemsIds = allElementsTree.get(elem.id) || []
          // childrenComponentsTree.set(elem.id, childrenElemsIds)
          childrenElemsIds.forEach(childId => {
            childParentMap.set(childId, elem.id)
          })
        }
        if (childrenElemsIds.length) {
          childrenElemsIds.forEach(elemId => {
            prepareDataLayer(elemId)
          })
        }
      }

      const id = selectedElement.elementId
      prepareDataLayer(id)

      const baseComponent: IBaseComponent = {
        id: uuid(),
        name: name,
        description: description,
        childrenElementList: elementsList,
        childParentMap: Array.from(childParentMap.entries()),
      }

      const fileData = JSON.stringify(baseComponent)
      saveToFile(fileData, `${name}_BaseComponent.json`)
    }
  }

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
          onClick={onSaveInFileBtnClick}
          size={'xs'}
          view={'secondary'}
        />
      </div>
      <div className={styles.baseComponents}>
        <BaseComponentCardsList baseComponents={baseComponents} />
      </div>
      <SaveModalCard
        onCloseModalCard={onCloseSaveModal}
        onSave={onSaveComponent}
        showSaveModal={saveModalOpen}
      />
    </div>
  )
}

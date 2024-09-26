import type { IFormConstructor } from '../../../coreTypes'
import {
  instanceAdapter,
  selectInstanceAll,
  selectViewAll,
  selectViewInfoAll,
  viewAdapter,
  viewInfoAdapter,
} from '../../formElements'
import type { RootState } from '../../setupStore'
import type { FormConstructorToSave } from '../types'

// Временная информация о версии выгрузки, пока осуществляется переезд на новый тип пропсов, каждый обновленный тип +1
export const PROJECT_VERSION = '2'

/**
 * Формирует объект для сохраенения из текущего состояния
 */
export const formConstructorToSave = (state: RootState): FormConstructorToSave => {
  const views = selectViewAll(state)
  const instances = selectInstanceAll(state)
  const viewInfos = selectViewInfoAll(state)
  const formConstructor = state.formConstructor

  const toSave: FormConstructorToSave = {
    projectVersion: PROJECT_VERSION,
    instanceManager: formConstructor.instanceManager,
    numberOfPages: formConstructor.numberOfPages,
    pages: formConstructor.pages,
    selectedPageId: formConstructor.selectedPageId,
    views,
    instances,
    viewInfos,
  }

  return toSave
}

/**
 * Формирует текущее состояние из сохраненного объекта
 */
export const formConstructorSaveToState = (save: FormConstructorToSave): IFormConstructor => {
  const allElements = viewAdapter.getInitialState()
  const elementInstances = instanceAdapter.getInitialState()
  const viewInfos = viewInfoAdapter.getInitialState()

  const newAllElements = viewAdapter.addMany(allElements, save.views)
  const newElementInstances = instanceAdapter.addMany(elementInstances, save.instances)
  const newInfos = viewInfoAdapter.addMany(viewInfos, save.viewInfos || [])

  const formConstructor: IFormConstructor = {
    ...save,
    history: [],
    views: newAllElements,
    instances: newElementInstances,
    viewInfo: newInfos,
    draggableElement: null,
    elementToCopyId: null,
    selectedView: null,
    sameInstanceElementsIds: [],
  }
  return formConstructor
}

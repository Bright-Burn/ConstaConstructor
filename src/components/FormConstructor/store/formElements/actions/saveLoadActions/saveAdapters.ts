import type { IFormConstructor } from '../../../../coreTypes'
import type { FormConstructorToSave } from '../../../../projectSaveLoad'
import type { RootState } from '../../../setupStore'
import {
  instanceAdapter,
  selectInstanceAll,
  selectViewAll,
  selectViewInfoAll,
  viewAdapter,
  viewInfoAdapter,
} from '../../adapters'

/**
 * Формирует объект для сохраенения из текущего состояния
 */
export const formConstructorToSave = (state: RootState): FormConstructorToSave => {
  const views = selectViewAll(state)
  const instances = selectInstanceAll(state)
  const viewInfos = selectViewInfoAll(state)
  const formConstructor = state.formConstructor

  const toSave: FormConstructorToSave = {
    instanceManager: formConstructor.instanceManager,
    numberOfPages: formConstructor.numberOfPages,
    pages: formConstructor.pages,
    selectedPageId: formConstructor.selectedPageId,
    allElements: views,
    elementInstances: instances,
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

  const newAllElements = viewAdapter.addMany(allElements, save.allElements)
  const newElementInstances = instanceAdapter.addMany(elementInstances, save.elementInstances)
  const allNewInfos = viewInfoAdapter.addMany(viewInfos, save.viewInfos || [])

  const formConstructor: IFormConstructor = {
    ...save,
    history: [],
    views: newAllElements,
    instances: newElementInstances,
    viewInfo: allNewInfos,
    draggableElement: null,
    elementToCopyId: null,
    selectedView: null,
    sameInstanceElementsIds: [],
  }
  return formConstructor
}

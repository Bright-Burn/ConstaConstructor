import { statuses } from '@consta/stats/__internal__/src/components/Stats/helpers'
import { ProjectSaveWays, SaveProjectIntent, saveProjectData } from '../../projectSaveLoad'
import { ViewrSlice } from '../Viewer'
import { AppDispatch, RootState } from '../setupStore'
import { layuoutAdapter } from './initialState'
import { AddNewElementPayload, SaveNewProject, SetNewElementDraggableElem } from './payload'
import { formConstructorSlice } from './slices'
import { IFormElement, IGroupElement, IPageOfLayout, ISelectedElement, UnionProps } from './types'
import { EntityState } from '@reduxjs/toolkit'
import { saveToFile } from '../../utils'
import { IBaseComponent } from '../baseComponentsItems'
import uuid from 'react-uuid'

const { selectAll, selectById, selectIds, selectEntities } = layuoutAdapter.getSelectors<RootState>(
  state => state.formConstructor.allElements,
)

export const deleteElement = (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState()
  const map = new Map<string, (IGroupElement | IFormElement)[]>()
  const allElements = selectAll(state)

  allElements.forEach(el => {
    if (el.parentId && map.get(el.parentId)) {
      map.set(el.parentId, [...(map.get(el.parentId) ?? []), el])
    } else if (el.parentId) {
      map.set(el.parentId, [el])
    }
  })

  const getIdsForDelete = (parentId: string) => {
    let idsForDelete: string[] = []
    const arrForDelete = map.get(parentId)

    arrForDelete?.forEach(el => {
      if (map.get(el.id)) {
        idsForDelete = [...idsForDelete, ...getIdsForDelete(el.id)]
      }

      idsForDelete.push(el.id)
    })

    return idsForDelete
  }
  let idsForDelete = [id, ...getIdsForDelete(id)]
  dispatch(formConstructorSlice.actions.deleteElement(idsForDelete))
}
export const setDraggableElement = (el: SetNewElementDraggableElem) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.setDraggableElement(el))
}

export const addNewElement = (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch) => {
  addPayloads.forEach(payload => {
    const element = { ...payload.element, parentId: payload.parent }
    dispatch(formConstructorSlice.actions.addNewElement(element))
  })
}
export const loadProjectFromStorage =
  (project: IFormConstructorSerializable) => (dispatch: AppDispatch) => {
    dispatch(formConstructorSlice.actions.loadProjectFromJson(project))
    dispatch(ViewrSlice.actions.showGrid(project.isGridVisible))
  }
export const saveProjectToFile =
  (project: SaveNewProject) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const viewer = state.Viewer
    const formConstructor = state.formConstructor
    const allElements = selectAll(state)
    const intent: SaveProjectIntent = {
      description: project.description,
      name: project.name,
      saveWay: ProjectSaveWays.FILE,
      project: { ...formConstructor, isGridVisible: viewer.isGridVisible, allElements },
    }
    saveProjectData(intent)
    //это просто экшн
  }
export const saveModuleToFile =
  (id: string, fileName: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const allElements = selectAll(state)
    const selectedEl = selectById(state, id)
    const map = new Map<string, (IGroupElement | IFormElement)[]>()
    //TODO нужно проверить есть ли выбранный элемент
    allElements.forEach(el => {
      if (el.parentId && map.get(el.parentId)) {
        map.set(el.parentId, [...(map.get(el.parentId) ?? []), el])
      } else if (el.parentId) {
        map.set(el.parentId, [el])
      }
    })

    const getIdsForSave = (parentId: string) => {
      let idsForSave: (IGroupElement | IFormElement)[] = []
      const arrForSave = map.get(parentId)

      arrForSave?.forEach(el => {
        if (map.get(el.id)) {
          idsForSave = [...idsForSave, ...getIdsForSave(el.id)]
        }

        idsForSave.push(el)
      })

      return idsForSave
    }
    let arrForSave = [...getIdsForSave(id)]

    if (selectedEl) {
      const parentEl = { ...selectedEl, parentId: undefined }
      arrForSave = [parentEl, ...arrForSave]
    }

    const saveObj: IBaseComponent = {
      id: uuid(),
      name: fileName,
      childrenElementList: arrForSave,
      description: fileName,
    }

    debugger

    saveToFile(JSON.stringify(saveObj), `${fileName}_BaseComponent.json`)
    //это просто экшн
  }
export const saveProjectToMemmoryStorage =
  (project: SaveNewProject) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const viewer = state.Viewer
    const formConstructor = state.formConstructor
    const allElements = selectAll(state)
    const intent: SaveProjectIntent = {
      description: project.description,
      name: project.name,
      saveWay: ProjectSaveWays.FILE,
      project: { ...formConstructor, isGridVisible: viewer.isGridVisible, allElements },
    }
    saveProjectData(intent)
    //это просто экшн
  }

export interface IFormConstructorSerializable {
  allElements: (IFormElement | IGroupElement)[]
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null
  isGridVisible: boolean

  pages: IPageOfLayout[]
  selectedPageId: string
  numberOfPages: number
}

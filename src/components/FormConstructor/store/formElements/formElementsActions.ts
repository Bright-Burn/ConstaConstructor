import uuid from 'react-uuid'

import type {
  FormElementTypes,
  IFormElement,
  IGroupElement,
  ILayoutElement,
  IPageOfLayout,
  ISelectedElement,
  UnionProps,
} from '../../coreTypes'
import type { SaveProjectIntent } from '../../projectSaveLoad'
import { ProjectSaveWays, saveProjectData } from '../../projectSaveLoad'
import { saveToFile } from '../../utils'
import type { IBaseComponent } from '../baseComponentsItems'
import type { AppDispatch, RootState } from '../setupStore'
import { ViewerSlice } from '../Viewer'

import { formConstructorSlice } from './formElementsSlice'
import { initialLayout } from './initialState'
import type { SaveNewProject, SetNewElementDraggableElem } from './payload'
import { selectById, selectAll } from './layoutAdapterSelectors'
import { deleteFormElement } from './instanceElements'

export const deletePage =
  (pageId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (getState().formConstructor.pages.length > 1) {
      dispatch(formConstructorSlice.actions.deletePage({ id: pageId }))
      dispatch(deleteFormElement(pageId))
    }
  }

export const addNewPage = () => (dispatch: AppDispatch) => {
  const newPageId = uuid()
  const pageLayout: ILayoutElement = { ...initialLayout, id: uuid(), parentId: newPageId }

  dispatch(formConstructorSlice.actions.addNewPage({ newPageId, pageLayout }))
}

export const changeActivePage = (pageId: string) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.changeActivePage({ id: pageId }))
}

export const changePageName = (pageName: string) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.changePageName({ pageName }))
}

export const setDraggableElement =
  <T extends FormElementTypes = FormElementTypes>(el: SetNewElementDraggableElem<T>) =>
  (dispatch: AppDispatch) => {
    dispatch(formConstructorSlice.actions.setDraggableElement(el))
  }

export const getSiblingsCount = (state: RootState, parentId: string) => {
  const allElements: (IFormElement | IGroupElement)[] = selectAll(state)
  let elements = 0
  allElements.forEach(element => {
    if (element.parentId === parentId) {
      elements++
    }
  })
  return elements
}

export const loadProjectFromStorage =
  (project: IFormConstructorSerializable) => (dispatch: AppDispatch) => {
    dispatch(formConstructorSlice.actions.loadProjectFromJson(project))
    dispatch(ViewerSlice.actions.showGrid(project.isGridVisible))
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

    saveToFile(JSON.stringify(saveObj), `${fileName}_BaseComponent.json`)
    //это просто экшн
  }
export const saveProjectToMemoryStorage =
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

export const saveProjectToHtml =
  (projectName: string | null) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()

    const css = Array.from(document.styleSheets)
      .map(styleSheet =>
        Array.from(styleSheet.cssRules)
          .map(rule => rule.cssText)
          .filter(rule => !rule.includes('border-block'))
          .join('\n'),
      )
      .join('\n')
    const js = Array.from(document.scripts)
      .map(script =>
        script.src
          ? fetch(script.src).then(response => response.text())
          : Promise.resolve(script.innerText),
      )
      .reduce(
        (accumulator, currentValue) =>
          accumulator.then(accumulatorValue =>
            currentValue.then(currentValueValue => accumulatorValue + currentValueValue),
          ),
        Promise.resolve(''),
      )
    const intent = {
      description: projectName,
      name: projectName,
      saveWay: 'file',
      project: { ...state.formConstructor, isGridVisible: false, allElements: selectAll(state) },
    }
    const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <script async defer src='${document.scripts[0].src}'></script>
        </head>
        <body>
        <div class='Theme Theme_color_gpnDefault Theme_control_gpnDefault Theme_font_gpnDefault Theme_size_gpnDefault Theme_space_gpnDefault Theme_shadow_gpnDefault'>
          <div id='root'></div>
        </div>
        <div style='display: none' id='loaded_data'>${JSON.stringify(intent)}</div>
        </body>
        </html>`
    Promise.all([css, js]).then(([cssText]) => {
      const blob = new Blob([html, `<style>${cssText}</style> `], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      const tagA = document.createElement('a')
      tagA.href = url
      tagA.download = 'webpage.html'
      tagA.click()
    })
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

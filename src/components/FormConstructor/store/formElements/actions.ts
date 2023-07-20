import { ProjectSaveWays, SaveProjectIntent, saveProjectData } from "../../projectSaveLoad";
import { ViewrSlice } from "../Viewer";
import { AppDispatch, RootState } from "../setupStore";
import { AddNewElementPayload, SaveNewProject, SetNewElementDraggableElem } from "./payload";
import { formConstructorSlice } from "./slices";
import { IFormElement, IGroupElement, IPageOfLayout, ISelectedElement, UnionProps } from "./types";

export const setDraggableElement  = (el: SetNewElementDraggableElem ) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.setDraggableElement(el))
}

export const addNewElement = (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => { 
    const state = getState().formConstructor
     const newTreeMap = new Map<string, string[]>(state.allElementsTree)
  
     const newAllelementMap = new Map<string, IFormElement | IGroupElement>(state.allElementsMap)
  
     addPayloads.forEach(payload => {
       const element = payload.element
       newTreeMap.set(payload.parent, [...(newTreeMap.get(payload.parent) || []), element.id])
  
       newAllelementMap.set(element.id, element)
     })

     dispatch(formConstructorSlice.actions.addNewElement({allElementsMap: newAllelementMap, newTreeMap: newTreeMap}))
}
export const loadProjectFromStorage = (project: IFormConstructorSerializable) => (dispatch: AppDispatch) => { 
      dispatch(formConstructorSlice.actions.loadProjectFromJson(project))
      dispatch(ViewrSlice.actions.showGrid(project.isGridVisible))

}
export const saveProjectToFile = (
project: SaveNewProject,
  ) => (dispatch: AppDispatch, getState: () => RootState) =>{
    const viewer = getState().Viewer
    const state = getState().formConstructor
    const intent: SaveProjectIntent = {
      description: project.description,
      name: project.name,
      saveWay: ProjectSaveWays.FILE,
      project: {...state, isGridVisible: viewer.isGridVisible},
    }
    saveProjectData(intent)
    //это просто экшн
  }
  export const saveProjectToMemmoryStorage = (
    project: SaveNewProject,
      ) => (dispatch: AppDispatch, getState: () => RootState) =>{
        const viewer = getState().Viewer
        const state = getState().formConstructor
        const intent: SaveProjectIntent = {
          description: project.description,
          name: project.name,
          saveWay: ProjectSaveWays.FILE,
          project: {...state, isGridVisible: viewer.isGridVisible},
        }
        saveProjectData(intent)
        //это просто экшн
      } 

export interface IFormConstructorSerializable {
    allElementsTree:  Map<string, string[]>
    allElementsMap: Map<string, IGroupElement | IFormElement>
    selectedElement: ISelectedElement | null
    selectedElementProps: UnionProps | null
    isGridVisible: boolean
  
    pages: IPageOfLayout[]
    selectedPageId: string
    numberOfPages: number
  }
import { ProjectSaveWays, SaveProjectIntent, saveProjectData } from "../../projectSaveLoad";
import { ViewrSlice } from "../Viewer";
import { AppDispatch, RootState } from "../setupStore";
import { AddNewElementPayload, SaveNewProject } from "./payload";
import { formConstructorSlice } from "./slices";
import { IFormConstructor, IFormElement, IGroupElement, IPageOfLayout, ISelectedElement, UnionProps } from "./types";

export const addNewElement = (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => { 
    console.log(getState())
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
state: IFormConstructor
  ) => (dispatch: AppDispatch) =>{
    const intent: SaveProjectIntent = {
      description: project.description,
      name: project.name,
      saveWay: ProjectSaveWays.FILE,
      project: state,
    }
    saveProjectData(intent)
    //это просто экшн
  }
  export const saveProjectToMemmoryStorage = (
    project: SaveNewProject,
    state: IFormConstructor
      ) => (dispatch: AppDispatch) => {
        const intent: SaveProjectIntent = {
          description: project.description,
          name: project.name,
          saveWay: ProjectSaveWays.FILE,
          project: state,
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
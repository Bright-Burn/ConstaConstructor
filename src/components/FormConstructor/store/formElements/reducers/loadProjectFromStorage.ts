import { PayloadAction } from '@reduxjs/toolkit'
import { projectFromSerilizable } from '../../../projectSaveLoad'
import { LoadProjectFromStorage } from '../payload'
import { IFormConstructor } from '../types'
import { ProjectDataSerializable } from '../../../projectSaveLoad/types'

export const loadProjectFromStorage = (
  state: IFormConstructor,
  action: PayloadAction<LoadProjectFromStorage>,
) => {
  const projectJson = localStorage.getItem(action.payload.name)
  if (projectJson) {
    const projectSerilizable: ProjectDataSerializable = {
      ...JSON.parse(projectJson),
    }
    const newSate = projectFromSerilizable(projectSerilizable.project)
    state.allElementsMap = newSate.allElementsMap
    state.allElementsTree = newSate.allElementsTree
    state.isGridVisible = newSate.isGridVisible
    state.selectedElement = newSate.selectedElement
    state.selectedElementProps = newSate.selectedElementProps
    state.pages = newSate.pages
    state.numberOfPages = newSate.numberOfPages
  }
}

import { PayloadAction } from '@reduxjs/toolkit'
import { LoadProjectFromFile } from '../payload'
import { ProjectDataSerializable, projectFromSerilizable } from '../../../projectSaveLoad'
import { IFormConstructor } from '../types'

export const loadProjectFromJson = (
  state: IFormConstructor,
  action: PayloadAction<LoadProjectFromFile>,
) => {
  const projectJson = action.payload.projectJson
  if (projectJson) {
    const projectSerilizable: ProjectDataSerializable = {
      ...JSON.parse(projectJson as string),
    }
    const newSate = projectFromSerilizable(projectSerilizable.project)
    state.allElementsMap = newSate.allElementsMap
    state.allElementsTree = newSate.allElementsTree
    state.isGridVisible = newSate.isGridVisible
    state.selectedElement = newSate.selectedElement
    state.selectedElementProps = newSate.selectedElementProps
  }
}

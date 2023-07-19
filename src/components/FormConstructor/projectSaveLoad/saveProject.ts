import { IFormConstructor, IFormElement, IGroupElement } from '../store/formElements/types'
import { saveToFile } from '../utils'
import {
  IFormConstructorSerializable,
  ProjectDataSerializable,
  ProjectSaveWays,
  SaveProjectIntent,
} from './types'
import { PrototypeProps } from '../FormConstructorFormBlockConfigure/Panels/Settings/PrototypeSettings/types'

export const saveProject = (saveIntent: SaveProjectIntent) => {
  const projData: ProjectDataSerializable = {
    //TODO isGridVisible Typing
    project: projectToSerilizable(saveIntent.project),
    description: saveIntent.description,
    name: saveIntent.name,
  }
  switch (saveIntent.saveWay) {
    case ProjectSaveWays.STORAGE:
      saveToStorage(projData)
      break
    case ProjectSaveWays.FILE:
      saveFile(projData)
      break
  }
}

const saveToStorage = (data: ProjectDataSerializable) => {
  localStorage.setItem(data.name, JSON.stringify(data))
}

const saveFile = (projData: ProjectDataSerializable) => {
  const fileData = JSON.stringify(projData)
  saveToFile(fileData, `${projData.name}_ConstaConstructor.json`)
}

export const projectToSerilizable = (proj: IFormConstructor & {isGridVisible : boolean}): IFormConstructorSerializable => {
  return {
    isGridVisible: proj.isGridVisible,
    numberOfPages: proj.numberOfPages,
    pages: proj.pages,
    selectedElement: proj.selectedElement,
    selectedElementProps: proj.selectedElementProps,
    selectedPageId: proj.selectedPageId,
    allElementsMap: JSON.stringify(Array.from(proj.allElementsMap.entries())),
    allElementsTree: JSON.stringify(Array.from(proj.allElementsTree.entries())),
  }
}

/**
 * Мутирует allElementsMap для создания инстансов класса props после импорта из json
 *
 * Пример:
 * {
 *   props: new PrototypeProps(props)
 * }
 *
 * @param {Map<string, IFormElement | IGroupElement>} allElementsMapParsed
 */
export const mutateAllElementsMap = (
  allElementsMapParsed: Map<string, IFormElement | IGroupElement>,
): void => {
  Array.from(allElementsMapParsed).forEach(([, value]) => {
    if (value.type === 'PrototypeTextElement' || value.type === 'PrototypeRectElement') {
      if ('zIndex' in value.props) {
        value.props = new PrototypeProps(value.props)
      }
    }
  })
}

export const projectFromSerilizable = (proj: IFormConstructorSerializable): IFormConstructor & {isGridVisible: boolean} => {
  const allElementsTree: Map<string, string[]> = new Map(JSON.parse(proj.allElementsTree))

  const allElementsMap: Map<string, IFormElement | IGroupElement> = new Map(
    JSON.parse(proj.allElementsMap),
  )

  mutateAllElementsMap(allElementsMap)

  return {
    ...proj,
    allElementsMap,
    allElementsTree,
    draggableElement: null,
    // componentsStructurePanelState: true,
    // settingsPanelState: true,
    isGridVisible: proj.isGridVisible,
    pages: proj.pages,
    numberOfPages: proj.numberOfPages,
    selectedPageId: proj.selectedPageId,
    history: [],
  }
}

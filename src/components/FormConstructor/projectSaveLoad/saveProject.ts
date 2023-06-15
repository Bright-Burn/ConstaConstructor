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

export const projectToSerilizable = (proj: IFormConstructor): IFormConstructorSerializable => {
  return {
    ...proj,
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
 * @param {Map<string, IGroupElement | IFormElement>} allElementsMapParsed
 */
export const mutateAllElementsMap = (
  allElementsMapParsed: Map<string, IGroupElement | IFormElement>,
): void => {
  Array.from(allElementsMapParsed).forEach(([, value]) => {
    if (value.type === 'PrototypeTextElement' || value.type === 'PrototypeRectElement') {
      if ('zIndex' in value.props) {
        value.props = new PrototypeProps(value.props)
      }
    }
  })
}

export const projectFromSerilizable = (proj: IFormConstructorSerializable): IFormConstructor => {
  const allElementsTree: Map<string, string[]> = new Map(JSON.parse(proj.allElementsTree))

  const allElementsMap: Map<string, IGroupElement | IFormElement> = new Map(
    JSON.parse(proj.allElementsMap),
  )

  mutateAllElementsMap(allElementsMap)

  return {
    ...proj,
    allElementsMap,
    allElementsTree,
    draggableElement: null,
    componentsStructurePanelState: true,
    settingsPanelState: true,
  }
}

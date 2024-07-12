import jsonBeautify from 'json-beautify'

import { saveToFile } from '../utils'

import type { ProjectDataSerializable, SaveProjectIntent } from './types'
import { ProjectSaveWays } from './types'

export const saveProject = (saveIntent: ProjectDataSerializable & SaveProjectIntent) => {
  switch (saveIntent.saveWay) {
    case ProjectSaveWays.STORAGE:
      saveToStorage(saveIntent)
      break
    case ProjectSaveWays.FILE:
      saveFile(saveIntent)
      break
  }
}

const saveToStorage = (data: ProjectDataSerializable) => {
  localStorage.setItem(data.name, JSON.stringify(data))
}

const saveFile = (projData: ProjectDataSerializable) => {
  // @ts-expect-error неправильная анотация типов в библиотеке beautify
  const fileData = jsonBeautify(projData, null, 2)
  saveToFile(fileData, `${projData.name}_ConstaConstructor.json`)
}

// export const projectToSerilizable = (proj: IFormConstructor & {isGridVisible : boolean}): IFormConstructorSerializable => {
//   return {
//     isGridVisible: proj.isGridVisible,
//     numberOfPages: proj.numberOfPages,
//     pages: proj.pages,
//     selectedElement: proj.selectedElement,
//     selectedElementProps: proj.selectedElementProps,
//     selectedPageId: proj.selectedPageId,
//     // allElementsMap: JSON.stringify(Array.from(proj.allElementsMap.entries())),
//     // allElementsTree: JSON.stringify(Array.from(proj.allElementsTree.entries())),
//   }
// }

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
// export const mutateAllElementsMap = (
//   allElementsMapParsed: Map<string, IFormElement | IGroupElement>,
// ): void => {
//   Array.from(allElementsMapParsed).forEach(([, value]) => {
//     if (value.type === 'PrototypeTextElement' || value.type === 'PrototypeRectangleElement') {
//       if ('zIndex' in value.props) {
//         value.props = new PrototypeProps(value.props)
//       }
//     }
//   })
// }

// export const projectFromSerilizable = (proj: IFormConstructorSerializable): IFormConstructor & {isGridVisible: boolean} => {
//   const allElementsTree: Map<string, string[]> = new Map(JSON.parse(proj.allElementsTree))

//   const allElementsMap: Map<string, IFormElement | IGroupElement> = new Map(
//     JSON.parse(proj.allElementsMap),
//   )

//   mutateAllElementsMap(allElementsMap)

//   return {
//     ...proj,
//     allElements: null,
//     // allElementsMap,
//     // allElementsTree,
//     draggableElement: null,
//     // componentsStructurePanelState: true,
//     // settingsPanelState: true,
//     isGridVisible: proj.isGridVisible,
//     pages: proj.pages,
//     numberOfPages: proj.numberOfPages,
//     selectedPageId: proj.selectedPageId,
//     history: [],
//   }
// }

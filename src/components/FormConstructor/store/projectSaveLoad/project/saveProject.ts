import jsonBeautify from 'json-beautify'

import { saveToFile } from '../../../utils'
import type { SaveProjectIntent } from '../types'
import { ProjectSaveWays } from '../types'

import { saveProjectToHtml } from './saveProjectToHtml'

export const saveProject = (saveIntent: SaveProjectIntent) => {
  switch (saveIntent.saveWay) {
    case ProjectSaveWays.STORAGE:
      saveToStorage(saveIntent)
      break
    case ProjectSaveWays.FILE:
      saveFile(saveIntent)
      break
    case ProjectSaveWays.HTML:
      saveProjectToHtml(saveIntent)
      break
  }
}

const saveToStorage = (saveIntent: SaveProjectIntent) => {
  localStorage.setItem(saveIntent.data.name, JSON.stringify(saveIntent.data))
}

const saveFile = (saveIntent: SaveProjectIntent) => {
  // @ts-expect-error неправильная анотация типов в библиотеке beautify
  const fileData = jsonBeautify(saveIntent.data, null, 2)
  saveToFile(fileData, `${saveIntent.data.name}_Project.json`)
}

import jsonBeautify from 'json-beautify'

import { saveToFile } from '../utils'

import type { SaveProjectIntent } from './types'
import { ProjectSaveWays } from './types'

export const saveProject = (saveIntent: SaveProjectIntent) => {
  switch (saveIntent.saveWay) {
    case ProjectSaveWays.STORAGE:
      saveToStorage(saveIntent)
      break
    case ProjectSaveWays.FILE:
      saveFile(saveIntent)
      break
  }
}

const saveToStorage = (data: SaveProjectIntent) => {
  localStorage.setItem(data.name, JSON.stringify(data))
}

const saveFile = (projData: SaveProjectIntent) => {
  // @ts-expect-error неправильная анотация типов в библиотеке beautify
  const fileData = jsonBeautify(projData, null, 2)
  saveToFile(fileData, `${projData.name}_ConstaConstructor.json`)
}

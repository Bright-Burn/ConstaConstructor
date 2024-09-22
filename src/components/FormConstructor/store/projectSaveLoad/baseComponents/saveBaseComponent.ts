import uuid from 'react-uuid'

import { saveToFile } from '../../../utils'
import type { BaseComponentToSave, SaveBaseComponentIntent } from '../types'

export const saveBaseComponent = (saveBaseComponentIntent: SaveBaseComponentIntent) => {
  const saveObj: BaseComponentToSave = {
    id: uuid(),
    name: saveBaseComponentIntent.fileName,
    views: saveBaseComponentIntent.viewsToSave,
    description: saveBaseComponentIntent.fileName,
    instances: saveBaseComponentIntent.instancesToSave,
    viewInfos: saveBaseComponentIntent.viewInfosToSave,
  }
  saveToFile(JSON.stringify(saveObj), `${saveObj.name}_BaseComponent.json`)
}

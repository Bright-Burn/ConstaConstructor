import type { IBaseComponent } from '../../baseComponentsItems'
import type { BaseComponentToSave } from '../types'

export const baseComponentSaveToState = (el: BaseComponentToSave): IBaseComponent => {
  return {
    description: el.description,
    id: el.id,
    instances: el.instances,
    name: el.name,
    viewInfos: el.viewInfos,
    views: el.views,
  }
}

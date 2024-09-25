import { PROJECT_VERSION } from '../project'
import type { BaseComponentToSave } from '../types'

import type { BaseComponentToSave_Deprecated } from './deprecatedTypes'
import { instanceAdapter } from './instanceAdapter'

// Тип адаптера для базовых компонентов
type BaseComponentVersionAdapter = (
  baseComponentDeprecated: BaseComponentToSave_Deprecated,
) => BaseComponentToSave

/**
 * Адаптер для устарелых выгрузок базовых компоннтов
 * @param toSaveDeprecated Объект типа deprecated
 * @returns Объект актуального типа базового компонента
 */
export const baseComponentVersionAdapter: BaseComponentVersionAdapter = toSaveDeprecated => {
  const baseComponentToSave: BaseComponentToSave = {
    id: toSaveDeprecated.id,
    description: toSaveDeprecated.description,
    instances: toSaveDeprecated.instances.map(instanceAdapter),
    name: toSaveDeprecated.name,
    projectVersion: PROJECT_VERSION,
    viewInfos: toSaveDeprecated.viewInfos,
    views: toSaveDeprecated.childrenElementList,
  }
  return baseComponentToSave
}

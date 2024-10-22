import { PROJECT_VERSION } from '../project'
import type { FormConstructorToSave } from '../types'

import type { FormConstructorToSave_Deprecated } from './deprecatedTypes'
import { instanceAdapter } from './instanceAdapter'

// Тип глобального адаптера для структуры проекта
// Адаптер переводит из типа Deprecated типа FormConstructorToSave_Deprecated в актуальный FormConstructorToSave
type ProjectVersionAdapter = (
  parsedProject: FormConstructorToSave_Deprecated,
) => FormConstructorToSave

// По умолчанию считаем, что parsedProject соответствует типу FormConstructorToSave_Deprecated
export const projectVersionAdapter: ProjectVersionAdapter = parsedProject => {
  const adaptedInstances = parsedProject.elementInstances.map(instanceAdapter)
  const toSave: FormConstructorToSave = {
    instanceManager: parsedProject.instanceManager,
    instances: adaptedInstances,
    numberOfPages: parsedProject.numberOfPages,
    pages: parsedProject.pages,
    projectVersion: PROJECT_VERSION,
    selectedPageId: parsedProject.selectedPageId,
    viewInfos: parsedProject.viewInfos,
    views: parsedProject.allElements,
  }

  // Перемапливаем поля для корректного сохранения FormConstructorToSave
  return toSave
}

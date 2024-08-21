import uuid from 'react-uuid'

import type { AllElementTypes, FormInstance } from '../coreTypes'

/**
 * Копирует инстансы - под копией подразумевается тот же инстанс, но с новым id
 * @param instances Список инстансов
 * @returns Список новых инстансов и карта сохраняющая зависисмость со старым id
 */
export const copyInstances = (instances: FormInstance<AllElementTypes>[]) => {
  const newInstancesIdsDict: Record<string, string> = {}
  // Создаем новые экземпляры с обновленными идентификаторами
  const newInstances: FormInstance<AllElementTypes>[] = instances.map(instance => {
    const newId = uuid()
    newInstancesIdsDict[instance.id] = newId
    return {
      ...instance,
      id: newId,
    }
  })

  return {
    newInstances,
    newInstancesIdsDict,
  }
}

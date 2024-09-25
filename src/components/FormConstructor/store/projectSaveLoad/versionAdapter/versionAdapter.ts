import { PROJECT_VERSION } from '../project'
import type { FormConstructorToSave } from '../types'

import type { ButtonAdapterType } from './buttonAdapter'
import { buttonAdapter } from './buttonAdapter'
import type { FormConstructorToSave_Deprecated } from './deprecatedTypes'

type TypeAdapter = {
  Button: ButtonAdapterType
}

// Адаптер для старых макетов, сюда подключаются адаптеры для конкретных элементов
const typeAdapterDict: TypeAdapter = {
  Button: buttonAdapter,
}

// Тип глобального адаптера для структуры проекта
// Адаптер переводит из типа Deprecated типа FormConstructorToSave_Deprecated в актуальный FormConstructorToSave
type VersionAdapter = (parsedProject: FormConstructorToSave_Deprecated) => FormConstructorToSave

// По умолчанию считаем, что parsedProject соответствует типу FormConstructorToSave_Deprecated
export const versionAdapter: VersionAdapter = parsedProject => {
  const adaptedInstances = parsedProject.elementInstances.map(instance => {
    switch (instance.props.type) {
      case 'Button': {
        // Получаем адаптер функцию для кнопки
        const adapterFunc = typeAdapterDict[instance.props.type]
        const newProps = adapterFunc(instance.id, instance.props.props)
        return {
          ...instance,
          props: { ...instance.props, props: newProps },
        }
      }
    }
    return instance
  })

  // Перемапливаем поля для корректного сохранения FormConstructorToSave
  return {
    instanceManager: parsedProject.instanceManager,
    instances: adaptedInstances,
    numberOfPages: parsedProject.numberOfPages,
    pages: parsedProject.pages,
    projectVersion: PROJECT_VERSION,
    selectedPageId: parsedProject.selectedPageId,
    viewInfos: parsedProject.viewInfos,
    views: parsedProject.allElements,
  }
}

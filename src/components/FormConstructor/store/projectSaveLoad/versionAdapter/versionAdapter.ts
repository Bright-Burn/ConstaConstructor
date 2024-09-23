import { PROJECT_VERSION } from '../project'
import type { FormConstructorToSave, FormConstructorToSave_Deprecated } from '../types'

import type { ButtonAdapterType } from './buttonAdapter'
import { buttonAdapter } from './buttonAdapter'

type TypeAdapter = {
  Button: ButtonAdapterType
}

// Адаптер для старых макетов
const typeAdapterDict: TypeAdapter = {
  Button: buttonAdapter,
}

// Тип глобалдьного адаптера для структуры проекта.
// Адаптер переводит из типа Deprecated типа FormConstructorToSave_Deprecated в  актуальный FormConstructorToSave
type VersionAdapter = (parsedProject: FormConstructorToSave_Deprecated) => FormConstructorToSave

// По умолчанию считаем, что parsedProject на самом деле не соответствует типу FormConstructorToSave
export const versionAdapter: VersionAdapter = parsedProject => {
  const adaptedInstances = parsedProject.elementInstances.map(instance => {
    if (instance.props.type === 'Button') {
      const adapterFunc = typeAdapterDict[instance.props.type]
      const newProps = adapterFunc(instance.props.props)
      return {
        ...instance,
        props: { ...instance.props, props: newProps },
      }
    }
    return instance
  })
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

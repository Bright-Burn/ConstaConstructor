import uuid from 'react-uuid'

import type { AllElementTypes, FormInstance } from '../../coreTypes'
import type { AddElementsWithInstancesPayload } from '../../store'
import {
  getDraggedBaseComponent,
  setDraggableBaseComponent,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from '../../store'
import { deepCopyElements } from '../../utils'

export const useDropBaseComponent = () => {
  const draggableBaseComponent = useBaseComponentsSelector(getDraggedBaseComponent)
  const dispathBaseComponents = useBaseComponentsDispatch()

  /*Подготавливаем данные для добавления базовго компонента*/
  const handleOnDropBaseComponent = (
    parentElementId: string,
  ): AddElementsWithInstancesPayload | null => {
    if (draggableBaseComponent) {
      const allElements = draggableBaseComponent.childrenElementList
      const instances = draggableBaseComponent.instances
      /*Словарь: старый id инстанса - новый id инстанса*/
      const newInstancesIdsDict: Record<string, string> = {}

      /*Список инстансов для добавления, выстовляем новые id, сохрянем взаимосвязь новый id со старым id*/
      const instancesToAdd: FormInstance<AllElementTypes>[] = instances.map(instance => {
        const newId = uuid()
        newInstancesIdsDict[instance.id] = newId
        return {
          ...instance,
          id: newId,
        }
      })

      /*Глубоко копируем элементы, сохраяя взаимосвязи, выставляем новые id в свойство instanceId, сформированныее ранее*/
      const elementsCopy = deepCopyElements(allElements).map(elem => {
        return { ...elem, instanceId: newInstancesIdsDict[elem.instanceId] }
      })

      /*Формируем payload*/
      const addBaseElementPayload: AddElementsWithInstancesPayload = {
        elements: elementsCopy,
        instances: instancesToAdd,
        parentId: parentElementId,
      }
      // После перетаскивания, очищаем соответсвующее поле в сторе
      dispathBaseComponents(setDraggableBaseComponent(null))

      /*Возвращаем объект - payload для добавления*/
      return addBaseElementPayload
    }
    return null
  }
  return { handleOnDropBaseComponent }
}

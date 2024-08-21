import type { AddElementsWithInstancesPayload } from '../../store'
import {
  getDraggedBaseComponent,
  setDraggableBaseComponent,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from '../../store'
import { copyInstances, deepCopyElements } from '../../utils'

export const useDropBaseComponent = () => {
  const draggableBaseComponent = useBaseComponentsSelector(getDraggedBaseComponent)
  const dispathBaseComponents = useBaseComponentsDispatch()

  /**
   * Эта функция подготавливает данные для добавления базового компонента, создавая копию его элементов и экземпляров,
   * и обновляя их идентификаторы. Затем она возвращает объект с копией элементов, новыми экземплярами и идентификатором родительского элемента.
   * Если draggableBaseComponent равен null, она возвращает null.
   *
   * @param parentElementId - Идентификатор родительского элемента, в который будет добавлен базовый компонент.
   * @returns Объект с копией элементов, новыми экземплярами и идентификатором родительского элемента, или null, если draggableBaseComponent равен null.
   */
  const handleOnDropBaseComponent = (
    parentElementId: string,
  ): AddElementsWithInstancesPayload | null => {
    // Проверяем, что draggableBaseComponent не равен null
    if (draggableBaseComponent) {
      // Получаем список всех элементов и экземпляров из draggableBaseComponent
      const allElements = draggableBaseComponent.childrenElementList
      const instances = draggableBaseComponent.instances
      const { newInstances, newInstancesIdsDict } = copyInstances(instances)
      // Создаем копию всех элементов с обновленными идентификаторами экземпляров
      const elementsCopy = deepCopyElements(allElements).map(elem => {
        return { ...elem, instanceId: newInstancesIdsDict[elem.instanceId] }
      })
      // Создаем объект с копией элементов, новыми экземплярами и идентификатором родительского элемента
      const addBaseElementPayload: AddElementsWithInstancesPayload = {
        elements: elementsCopy,
        instances: newInstances,
        parentId: parentElementId,
      }
      dispathBaseComponents(setDraggableBaseComponent(null))

      return addBaseElementPayload
    }
    // Возвращаем null, если draggableBaseComponent равен null
    return null
  }
  return handleOnDropBaseComponent
}

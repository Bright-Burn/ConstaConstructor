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

  const handleOnDropBaseComponent = (
    parentElementId: string,
  ): AddElementsWithInstancesPayload | null => {
    if (draggableBaseComponent) {
      const allElements = draggableBaseComponent.childrenElementList
      const instancesToAdd = draggableBaseComponent.instances

      /*Глубоко копируем элементы*/
      const elementsCopy = deepCopyElements(allElements)

      const addBaseElementPayload: AddElementsWithInstancesPayload = {
        elements: elementsCopy,
        instances: instancesToAdd,
        parentId: parentElementId,
      }
      // После перетаскивания, очищаем соответсвующее поле в сторе
      dispathBaseComponents(setDraggableBaseComponent(null))
      return addBaseElementPayload
    }
    return null
  }
  return { handleOnDropBaseComponent }
}

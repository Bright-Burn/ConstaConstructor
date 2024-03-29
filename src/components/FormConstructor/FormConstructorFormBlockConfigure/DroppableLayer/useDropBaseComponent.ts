import uuid from 'react-uuid'

import type { IFormElement, IGroupElement } from '../../coreTypes'
import {
  getDraggedBaseComponent,
  setDraggableBaseComponent,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from '../../store'

export const useDropBaseComponent = () => {
  const draggableBaseComponent = useBaseComponentsSelector(getDraggedBaseComponent)
  const dispathBaseComponents = useBaseComponentsDispatch()

  const handleOnDropBaseComponent = (parentElementId: string) => {
    if (draggableBaseComponent) {
      const map = new Map<string, (IGroupElement | IFormElement)[]>()
      const allElementsMap = new Map<string, IGroupElement | IFormElement>()
      const allElements = draggableBaseComponent.childrenElementList
      allElements.forEach(el => {
        if (el.parentId && map.get(el.parentId)) {
          map.set(el.parentId, [...(map.get(el.parentId) ?? []), el])
        } else if (el.parentId) {
          map.set(el.parentId, [el])
        }
      })
      allElements.forEach(el => {
        allElementsMap.set(el.id, el)
      })

      allElements.forEach(el => {
        const parentEl = map.get(el.id)
        const currElement = allElementsMap.get(el.id)

        if (currElement) {
          const newEl = { ...currElement, id: uuid() }
          allElementsMap.set(currElement.id, newEl)
          if (parentEl) {
            parentEl.forEach(el => {
              const fromAllMap = allElementsMap.get(el.id)
              fromAllMap && allElementsMap.set(el.id, { ...fromAllMap, parentId: newEl.id })
            })
          }
        }
      })
      const action = [...allElementsMap].map(([_, value]) => ({
        element: value,
        parent: value.parentId ?? parentElementId,
      }))

      // После перетаскивания, очищаем соответсвующее поле в сторе
      dispathBaseComponents(setDraggableBaseComponent(null))
      return action
    }
  }
  return { handleOnDropBaseComponent }
}

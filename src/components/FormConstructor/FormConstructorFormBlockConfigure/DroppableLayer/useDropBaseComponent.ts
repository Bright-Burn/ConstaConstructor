import uuid from 'react-uuid'

import type { IFormElement, IGroupElement } from '../../coreTypes'
import {
  getDraggedBaseComponent,
  setDraggableBaseComponent,
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from '../../store'

import type { AddNewElementPayload } from './types'

export const useDropBaseComponent = () => {
  const draggableBaseComponent = useBaseComponentsSelector(getDraggedBaseComponent)
  const dispathBaseComponents = useBaseComponentsDispatch()

  const handleOnDropBaseComponent = (parentElementId: string): AddNewElementPayload[] => {
    if (draggableBaseComponent) {
      const map = new Map<string, (IGroupElement | IFormElement)[]>()
      const allElementsMap = new Map<string, IGroupElement | IFormElement>()
      const allElements = draggableBaseComponent.childrenElementList
      const savedInstances = draggableBaseComponent.instances
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
      const action: AddNewElementPayload[] = []
      Array.from(allElementsMap.entries()).forEach(([_, value]) => {
        const usedInstanceProps = savedInstances.find(
          instance => value.instanceId === instance.id,
        )?.props
        if (usedInstanceProps) {
          const payload: AddNewElementPayload = {
            element: {
              ...value,
              props: usedInstanceProps,
            },
            parent: value.parentId ?? parentElementId,
          }
          action.push(payload)
        }
      })

      // После перетаскивания, очищаем соответсвующее поле в сторе
      dispathBaseComponents(setDraggableBaseComponent(null))
      return action
    }
    return []
  }
  return { handleOnDropBaseComponent }
}

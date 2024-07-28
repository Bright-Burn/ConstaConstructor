import type { DraggbleElement, IFormElement, IGroupElement } from '../../../coreTypes'
import { FormGroupsDictTypes } from '../../../coreTypes'

export const isDragGroupElement = (
  element: DraggbleElement<IFormElement | IGroupElement>,
): element is DraggbleElement<IGroupElement> => {
  const allGroupTypes: string[] = Object.values(FormGroupsDictTypes)
  return new Set(allGroupTypes).has(element.type)
}

export const isDragFormElement = (
  element: DraggbleElement<IFormElement | IGroupElement>,
): element is DraggbleElement<IFormElement> => {
  return !isDragGroupElement(element)
}

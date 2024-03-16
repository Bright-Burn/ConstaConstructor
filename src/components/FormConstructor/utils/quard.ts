import type { AllElementProps, AllElementTypes, ISelectedElement, UnionProps } from '../coreTypes'

export function isElementProps<T extends AllElementProps>(
  element: UnionProps | null,
  type: AllElementTypes,
): element is T {
  if (!element) return false

  return element.type === type
}

export function isElement<T extends ISelectedElement>(
  element: ISelectedElement | null,
  type: AllElementTypes,
): element is T {
  if (!element) return false

  return element.elementType === type
}

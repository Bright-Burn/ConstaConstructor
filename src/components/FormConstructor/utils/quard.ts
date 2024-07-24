import type {
  AllElementTypes,
  FormElementTypes,
  FormGroupsTypes,
  IFormElement,
  IGroupElement,
  ISelectedElement,
  OmitInstanceId,
  UnionProps,
} from '../coreTypes'
import { GroupCardsTypes } from '../FormConstructorFormBlockConfigure/Panels/ComponentsStructure/BaseComponents/BaseComponentCardsList/BaseComponentGroupCard'

export function isElementProps<T extends UnionProps>(
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

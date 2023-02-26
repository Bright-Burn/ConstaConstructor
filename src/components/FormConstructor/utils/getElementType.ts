import {
  ElementTypes,
  FormGroupsTypes,
  IFormElement,
  ILayoutElement,
} from '../store/formElements/types'

export const getElementType: (element: IFormElement | ILayoutElement) => ElementTypes = (
  element: IFormElement | ILayoutElement,
) => {
  if (element.type === FormGroupsTypes.Layout) {
    return ElementTypes.FormGroups
  }
  return ElementTypes.FormElement
}

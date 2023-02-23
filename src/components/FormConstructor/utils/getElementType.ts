import { ElementTypes, IFormElement, ILayoutElement } from '../store/formElements/types'

export const getElementType: (element: IFormElement | ILayoutElement) => ElementTypes = (
  element: IFormElement | ILayoutElement,
) => {
  if ('childrenFromElements' in element) {
    return ElementTypes.Layout
  }
  return ElementTypes.FormElement
}

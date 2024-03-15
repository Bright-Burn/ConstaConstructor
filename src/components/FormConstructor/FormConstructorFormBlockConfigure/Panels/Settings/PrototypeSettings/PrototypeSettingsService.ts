import type {
  BrandPrototypeRectangleProps,
  BrandPrototypeTextProps,
  PrototypeProps,
  PrototypeRectangleElement,
  PrototypeTextElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useTextSettingsStore = (
  selectedElementProps: PrototypeProps,
  selectedElement: PrototypeRectangleElement | PrototypeTextElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (newProps: BrandPrototypeTextProps | BrandPrototypeRectangleProps) => {
    if (selectedElement.elementType) {
      dispatch(
        setSelectedElement({
          elementType: selectedElement.elementType,
          elementId: selectedElement.elementId,
          newProps,
        }),
      )
    }
  }

  return {
    onDispatch,
    textProps: selectedElementProps,
  }
}

import {
  BrandPrototypeRectProps,
  BrandPrototypeTextProps,
  PrototypeProps,
  PrototypeRectElement,
  PrototypeTextElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useTextSettingsStore = (
  selectedElementProps: PrototypeProps,
  selectedElement: PrototypeRectElement | PrototypeTextElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (newProps: BrandPrototypeTextProps | BrandPrototypeRectProps) => {
    if (selectedElement?.elementType) {
      dispatch(
        setSelectedElement({
          elementType: selectedElement?.elementType,
          elementId: selectedElement?.elementId,
          newProps: newProps,
        }),
      )
    }
  }

  return {
    onDispatch,
    textProps: selectedElementProps,
  }
}

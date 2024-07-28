import type {
  BrandPrototypeRectangleProps,
  BrandPrototypeTextProps,
  PrototypeProps,
  PrototypeRectangleElement,
  PrototypeTextElement,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useTextSettingsStore = (
  selectedElementProps: PrototypeProps,
  selectedElement: PrototypeRectangleElement | PrototypeTextElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (newProps: BrandPrototypeTextProps | BrandPrototypeRectangleProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  return {
    onDispatch,
    textProps: selectedElementProps,
  }
}

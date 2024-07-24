import type {
  BrandPrototypeRectangleProps,
  BrandPrototypeTextProps,
  PrototypeProps,
  PrototypeRectangleElement,
  PrototypeTextElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { setInstanceProps } from '../../../../store/formElements'

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

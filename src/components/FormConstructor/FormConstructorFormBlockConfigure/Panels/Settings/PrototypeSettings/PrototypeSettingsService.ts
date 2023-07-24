import { useAppSelector } from '../../../../store/formElements'
import { PrototypeProps } from './types'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useTextSettingsStore = () => {
  const dispatch = useAppDispatch()

  const store = useAppSelector(state => state.formConstructor)

  if (!store) return null

  const { selectedElementProps, selectedElement } = store
  const onDispatch = (newProps: PrototypeProps) => {
    if (selectedElement?.elementType) {
      dispatch(
        setSelectedElement({
          elementType: selectedElement?.elementType,
          elementId: selectedElement?.elementId,
          newProps: new PrototypeProps(newProps),
        }),
      )
    }
  }
  if (selectedElementProps instanceof PrototypeProps) {
    return {
      onDispatch,
      textProps: selectedElementProps,
    }
  }

  return null
}

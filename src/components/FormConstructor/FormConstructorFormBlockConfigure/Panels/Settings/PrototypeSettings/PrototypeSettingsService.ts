import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { useDispatch } from 'react-redux'
import { PrototypeProps } from './types'

export const useTextSettingsStore = () => {
  const dispatch = useDispatch()

  const store = useAppSelector(state => state.formConstructor)

  if (!store) return null

  const { selectedElementProps, selectedElement } = store
  const onDispatch = (newProps: PrototypeProps) => {
    if (selectedElement?.elementType) {
      dispatch(
        formConstructorSlice.actions?.setSelectedElement({
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

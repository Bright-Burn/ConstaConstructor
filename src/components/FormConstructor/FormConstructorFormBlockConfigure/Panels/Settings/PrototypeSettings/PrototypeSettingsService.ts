import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { useDispatch } from 'react-redux'
import { PrototypeTextProps } from '../../../Elements/PrototypeTextElement/types'

export const useTextSettingsStore = () => {
  const dispatch = useDispatch()

  const store = useAppSelector(state => state.formConstructor)

  if (!store) return null

  const { selectedElementProps, selectedElement } = store
  const onDispatch = (newProps: PrototypeTextProps) => {
    if (selectedElement?.elementType) {
      dispatch(
        formConstructorSlice.actions?.setSelectedElement({
          elementType: selectedElement?.elementType,
          elementId: selectedElement?.elementId,
          newProps: new PrototypeTextProps(newProps),
        }),
      )
    }
  }
  if (selectedElementProps instanceof PrototypeTextProps) {
    return {
      onDispatch,
      textProps: selectedElementProps,
    }
  }

  return null
}

import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { useDispatch } from 'react-redux'
import { PrototypeTextProps } from '../../../Elements/PrototypeTextElement/types'

export const useTextSettingsStore = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (newProps: PrototypeTextProps) => {
    if (selectedElement?.elementType) {
      dispatch(
        formConstructorSlice.actions?.setSelectedElement({
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

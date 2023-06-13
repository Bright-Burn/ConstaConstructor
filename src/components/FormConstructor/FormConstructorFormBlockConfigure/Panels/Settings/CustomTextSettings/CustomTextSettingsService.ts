import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { useDispatch } from 'react-redux'
import { CustomTextProps } from '../../../Elements/CustomTextElement/types'

export const useTextSettingsStore = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (newProps: CustomTextProps) => {
    dispatch(
      formConstructorSlice.actions?.setSelectedElement({
        elementType: selectedElement?.elementType,
        elementId: selectedElement?.elementId,
        newProps: newProps,
      }),
    )
  }
  return {
    onDispatch,
    textProps: selectedElementProps,
  }
}

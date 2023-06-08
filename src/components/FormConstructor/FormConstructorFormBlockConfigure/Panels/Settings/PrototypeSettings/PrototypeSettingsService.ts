import {
  formConstructorSlice,
  LayoutElementPropsStyles,
  useAppSelector,
} from '../../../../store/formElements'
import { useDispatch } from 'react-redux'
import { ISelectedElement } from '../../../../store/formElements/types'

export const useProtorypeSettingsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (newProps: LayoutElementPropsStyles) => {
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
    prototypeProps: selectedElementProps
  }
}

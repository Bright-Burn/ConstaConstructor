import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { RadioPropAlign, RadioPropView } from '@consta/uikit/Radio'
import { RadioButtonProps } from '../../../../store/formElements/radioButtonTypes'
import { PropSize } from '@consta/uikit/__internal__/src/components/SelectComponents/types'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: RadioButtonProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeView = (value: RadioPropView | null) => {
    if (selectedElement && value) {
      const newProps: RadioButtonProps = {
        ...(selectedElementProps as RadioButtonProps),
      }
      newProps.view = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSize = (value: PropSize | null) => {
    if (selectedElement && value) {
      const newProps: RadioButtonProps = {
        ...(selectedElementProps as RadioButtonProps),
      }
      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeAlign = (value: RadioPropAlign | null) => {
    if (selectedElement && value) {
      const newProps: RadioButtonProps = {
        ...(selectedElementProps as RadioButtonProps),
      }
      newProps.align = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeField =
    (propsName: keyof RadioButtonProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: RadioButtonProps = {
          ...(selectedElementProps as RadioButtonProps),
        }
        // @ts-ignore
        newProps[propsName] = value || ''
        onDispatch(selectedElement, newProps)
      }
    }
  return {
    onChangeView,
    onChangeSize,
    onChangeAlign,
    onChangeField,
    itemsProps: {
      size: (selectedElementProps as RadioButtonProps).size,
      view: (selectedElementProps as RadioButtonProps).view,
      align: (selectedElementProps as RadioButtonProps).align,
      label: (selectedElementProps as RadioButtonProps).label,
    },
  }
}

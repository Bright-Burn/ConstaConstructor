import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { PropSize } from '@consta/uikit/__internal__/src/components/SelectComponents/types'
import { SwitchProps } from '../../../../store/formElements/SwitchTypes'
import { SwitchPropAlign, SwitchPropView } from '@consta/uikit/Switch'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: SwitchProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeView = (value: SwitchPropView | null) => {
    if (selectedElement && value) {
      const newProps: SwitchProps = {
        ...(selectedElementProps as SwitchProps),
      }
      newProps.view = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSize = (value: PropSize | null) => {
    if (selectedElement && value) {
      const newProps: SwitchProps = {
        ...(selectedElementProps as SwitchProps),
      }
      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeAlign = (value: SwitchPropAlign | null) => {
    if (selectedElement && value) {
      const newProps: SwitchProps = {
        ...(selectedElementProps as SwitchProps),
      }
      newProps.align = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeField =
    (propsName: keyof SwitchProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: SwitchProps = {
          ...(selectedElementProps as SwitchProps),
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
      size: (selectedElementProps as SwitchProps).size,
      view: (selectedElementProps as SwitchProps).view,
      align: (selectedElementProps as SwitchProps).align,
      label: (selectedElementProps as SwitchProps).label,
    },
  }
}

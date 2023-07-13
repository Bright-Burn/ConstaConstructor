import { useDispatch } from 'react-redux'
import {
  InformerElementProps,
  formConstructorSlice,
  useAppSelector,
} from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { InformerPropSize, InformerPropView, InformerPropStatus } from '@consta/uikit/Informer'
import { iconNames } from '../../../../store/formElements/iconTypes'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  const onChangeField = (
    value: InformerPropSize | InformerPropView | InformerPropStatus | string,
    field: keyof InformerElementProps,
  ) => {
    if (selectedElement) {
      const newProps: InformerElementProps = {
        ...(selectedElementProps as InformerElementProps),
      }
      // @ts-ignore
      newProps[field] = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof InformerElementProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElementProps) {
        const newProps: InformerElementProps = {
          ...(selectedElementProps as InformerElementProps),
          [propsName]: checked,
        }
        selectedElement && onDispatch(selectedElement, newProps)
      }
    }

  const onChangeIcon = (value: iconNames | null) => {
    if (selectedElement && value) {
      const newProps: InformerElementProps = {
        ...(selectedElementProps as InformerElementProps),
      }
      newProps.icon = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: InformerElementProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return {
    onChangeField,
    onChangeSwitch,
    onChangeIcon,
    itemsProps: {
      size: (selectedElementProps as InformerElementProps).size,
      view: (selectedElementProps as InformerElementProps).view,
      icon: (selectedElementProps as InformerElementProps).icon,
      label: (selectedElementProps as InformerElementProps).label,
      title: (selectedElementProps as InformerElementProps).title,
      status: (selectedElementProps as InformerElementProps).status,
      iconActive: (selectedElementProps as InformerElementProps).iconActive,
    },
  }
}

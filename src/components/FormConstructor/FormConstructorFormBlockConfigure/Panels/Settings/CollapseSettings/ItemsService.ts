import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import {
  CollapseIconPropDirection,
  CollapsePropHorizontalSpace,
  CollapsePropSize,
  CollapsePropView,
} from '@consta/uikit/Collapse'
import { ListPropForm } from '@consta/uikit/ListCanary'
import { IconComponent } from '@consta/uikit/Icon'
import { CollapseProps } from '../../../../store/formElements/collapseTypes'
import { iconNames } from '../../../../store/formElements/iconTypes'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  const onChangeField = (
    value:
      | CollapsePropSize
      | ListPropForm
      | CollapsePropView
      | CollapsePropHorizontalSpace
      | CollapseIconPropDirection
      | IconComponent
      | iconNames
      | boolean
      | string,
    field: keyof CollapseProps,
  ) => {
    if (selectedElement) {
      const newProps: CollapseProps = {
        ...(selectedElementProps as CollapseProps),
        [field]: value,
      }
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: CollapseProps) => {
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
    itemsProps: {
      size: (selectedElementProps as CollapseProps).size,
      view: (selectedElementProps as CollapseProps).view,
      form: (selectedElementProps as CollapseProps).form,
      label: (selectedElementProps as CollapseProps).label,
      children: (selectedElementProps as CollapseProps).children,
      closeDirectionIcon: (selectedElementProps as CollapseProps).closeDirectionIcon,
      directionIcon: (selectedElementProps as CollapseProps).directionIcon,
      divider: (selectedElementProps as CollapseProps).divider,
      horizontalSpace: (selectedElementProps as CollapseProps).horizontalSpace,
      hoverEffect: (selectedElementProps as CollapseProps).hoverEffect,
      icon: (selectedElementProps as CollapseProps).icon,
      iconView: (selectedElementProps as CollapseProps).iconView,
      maxHeight: (selectedElementProps as CollapseProps).maxHeight,
      rightSide: (selectedElementProps as CollapseProps).rightSide,
      withCustomIcon: (selectedElementProps as CollapseProps).withCustomIcon,
    },
  }
}

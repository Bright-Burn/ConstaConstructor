import {
  ButtonAction,
  ButtonProps,
  buttonActionsActive,
  ISelectedElement,
  iconNames,
} from '../../../../coreTypes'
import { ButtonPropSize, ButtonPropForm, ButtonPropView } from '@consta/uikit/Button'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { BrandButtonProps, ButtonElement } from '../../../../coreTypes/buttonTypes'

export const useItemsHandlers = (
  selectedElementProps: ButtonProps,
  selectedElement: ButtonElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: ButtonPropSize | ButtonPropForm | ButtonPropView | string | null,
    field: keyof ButtonProps,
  ) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedElementProps },
      type: 'Button',
    }
    // @ts-ignore
    newProps.props[field] = value
    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof ButtonProps) =>
    ({ checked }: { checked: boolean }) => {
        const newProps: BrandButtonProps = {
          props: {
            ...selectedElementProps, 
            [propsName]: checked},
          type: 'Button',
        }
        selectedElement && onDispatch(selectedElement, newProps)
        if (propsName === 'action' && checked === true) {
          onChangeButtonAction('ButtonModal')
        }
        if (propsName === 'action' && checked === false) {
          onChangeButtonAction('none')
        }
      }

  const onChangeButtonAction = (value: ButtonAction) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedElementProps },
      type: 'Button',
    }

    newProps.props['action'] = value

    onUpdateSelected(selectedElement, newProps)
    if (buttonActionsActive.includes(value)) {
      addConnectedElement()
    } else {
      removeConnectedElement()
    }
  }

  const addConnectedElement = () => {
    // const currentButtonElement = allElementsMap.get(selectedElement?.elementId || '')
    // if (currentButtonElement && currentButtonElement.id) {
    //   const connectedButtonGroupElement: IButtonModalElement = {
    //     id: uuid(),
    //     connectedButtonId: currentButtonElement.id,
    //     isOuter: false,
    //     type: 'ButtonModal',
    //     props: {
    //       height: defaultHeight,
    //       width: defaultWidth,
    //       className: '',
    //       baseProps: {},
    //     },
    //   }
    //   const layoutElement: ILayoutElement = {
    //     id: uuid(),
    //     type: FormGroupsTypes.Layout,
    //     isOuter: false,
    //     props: {
    //       constaProps: {
    //         flex: 1,
    //         direction: 'row',
    //       },
    //       className: '',
    //       baseProps: {},
    //     },
    //   }
    //   dispatch(
    //     addNewFormElement([{
    //         parent: currentButtonElement.id,
    //         element: connectedButtonGroupElement
    //       }])
    //   )
    //   dispatch(
    //    addNewFormElement([
    //       {
    //         parent: connectedButtonGroupElement.id,
    //         element: layoutElement,
    //       },
    //     ]),
    //   )
    // }
  }

  const removeConnectedElement = () => {
    if (selectedElement) {
      // const connectedElementIds = allElementsTree.get(selectedElement.elementId)
      // connectedElementIds?.forEach((id: any) => {
      //   dispatch(
      //     formConstructorSlice.actions.deleteFormElement({
      //       elementId: id,
      //     }),
      //   )
      // })
    }
  }

  const onUpdateSelected = (selectedElement: ISelectedElement, newProps: BrandButtonProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: { ...newProps },
      }),
    )
  }

  const onChangeIcon = (value: iconNames | null) => {
    if (value) {
      const newProps: BrandButtonProps = {
        props: { ...selectedElementProps },
        type: 'Button',
      }
      newProps.props.icon = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeIconR = (value: iconNames | null) => {
    if (value) {
      const newProps: BrandButtonProps = {
        props: { ...selectedElementProps },
        type: 'Button',
      }
      newProps.props.iconR = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandButtonProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return {
    onChangeField,
    onChangeSwitch,
    onChangeButtonAction,
    onChangeIcon,
    onChangeIconR,
    itemsProps: {
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      action: selectedElementProps.action,
      label: selectedElementProps.label,
      disabled: selectedElementProps.disabled,
      iconLeft: selectedElementProps.iconLeft,
      form: selectedElementProps.form,
      loading: selectedElementProps.loading,
      iconRight: selectedElementProps.iconRight,
      onlyIcon: selectedElementProps.onlyIcon,
      icon: selectedElementProps.icon,
      iconR: selectedElementProps.iconR,
      activeAction: (selectedElementProps as ButtonProps).activeAction,
    },
  }
}

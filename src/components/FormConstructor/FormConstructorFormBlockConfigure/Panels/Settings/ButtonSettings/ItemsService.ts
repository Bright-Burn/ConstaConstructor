import {
  ButtonAction,
  buttonActionsActive,
  ButtonProps,
  iconNames,
  ISelectedElement,
} from '../../../../coreTypes'
import { ButtonPropForm, ButtonPropSize, ButtonPropView } from '@consta/uikit/Button'
import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppFormConstructorSelector<ButtonProps>()

  const dispatch = useAppDispatch()

  const onChangeField = (
    value: ButtonPropSize | ButtonPropForm | ButtonPropView | string | null,
    field: keyof ButtonProps,
  ) => {
    if (selectedElement) {
      onDispatch(selectedElement, { ...selectedElementProps, [field]: value })
    }
  }

  const onChangeSwitch =
    (propsName: keyof ButtonProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElementProps) {
        selectedElement &&
          onDispatch(selectedElement, { ...selectedElementProps, [propsName]: checked })

        if (propsName === 'action' && checked === true) {
          onChangeButtonAction('ButtonModal')
        }
        if (propsName === 'action' && checked === false) {
          onChangeButtonAction('none')
        }
      }
    }

  const onChangeButtonAction = (value: ButtonAction) => {
    if (selectedElement) {
      onUpdateSelected(selectedElement, { ...selectedElementProps, action: value })

      if (buttonActionsActive.includes(value)) {
        addConnectedElement()
      } else {
        removeConnectedElement()
      }
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

  const onUpdateSelected = (selectedElement: ISelectedElement, newProps: ButtonProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onChangeIcon = (value: iconNames | null) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, icon: value })
    }
  }

  const onChangeIconR = (value: iconNames | null) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, iconR: value })
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: ButtonProps) => {
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
      activeAction: selectedElementProps.activeAction,
    },
  }
}

import type { ButtonPropForm, ButtonPropSize, ButtonPropView } from '@consta/uikit/Button'

import type {
  BrandButtonProps,
  ButtonAction,
  ButtonElement,
  ButtonProps,
  IconNames,
  ISelectedElement,
} from '../../../../coreTypes'
import { buttonActionsActive } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: ButtonProps,
  selectedElement: ButtonElement,
) => {
  const dispatch = useAppDispatch()
  const onChangeLabel = (value: string) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedElementProps },
      type: 'Button',
    }
    newProps.props.label = value
    onDispatch(selectedElement, newProps)
  }
  const onChangeSize = (value: ButtonPropSize) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedElementProps },
      type: 'Button',
    }
    newProps.props.size = value
    onDispatch(selectedElement, newProps)
  }
  const onChangeView = (value: ButtonPropView) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedElementProps },
      type: 'Button',
    }
    newProps.props.view = value
    onDispatch(selectedElement, newProps)
  }
  const onChangeForm = (value: ButtonPropForm) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedElementProps },
      type: 'Button',
    }
    newProps.props.form = value
    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof ButtonProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked
      const newProps: BrandButtonProps = {
        props: {
          ...selectedElementProps,
          [propsName]: checked,
        },
        type: 'Button',
      }
      onDispatch(selectedElement, newProps)
      if (propsName === 'action' && checked) {
        onChangeButtonAction('ButtonModal')
      }
      if (propsName === 'action' && !checked) {
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
    // if (selectedElement) {
    //   // const connectedElementIds = allElementsTree.get(selectedElement.elementId)
    //   // connectedElementIds?.forEach((id: any) => {
    //   //   dispatch(
    //   //     formConstructorSlice.actions.deleteFormElement({
    //   //       elementId: id,
    //   //     }),
    //   //   )
    //   // })
    // }
  }

  const onUpdateSelected = (selectedElement: ISelectedElement, newProps: BrandButtonProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  const onChangeIcon = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedElementProps },
      type: 'Button',
    }
    newProps.props.icon = value ? value : undefined
    onDispatch(selectedElement, newProps)
  }

  const onChangeIconR = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedElementProps },
      type: 'Button',
    }
    newProps.props.iconR = value ? value : undefined
    onDispatch(selectedElement, newProps)
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandButtonProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  return {
    onChangeSwitch,
    onChangeButtonAction,
    onChangeIcon,
    onChangeIconR,
    onChangeLabel,
    onChangeSize,
    onChangeView,
    onChangeForm,
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

import type React from 'react'
import type { ButtonPropForm, ButtonPropSize, ButtonPropView } from '@consta/uikit/Button'

import type {
  BrandButtonProps,
  ButtonAction,
  ButtonElement,
  ButtonProps,
  IconNames,
  IselectedView,
} from '../../../../coreTypes'
import { buttonActionsActive } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (selectedViewProps: ButtonProps, selectedView: ButtonElement) => {
  const dispatch = useAppDispatch()
  const onChangeLabel = (value: string) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedViewProps },
      type: 'Button',
    }
    newProps.props.label = value
    onDispatch(selectedView, newProps)
  }
  const onChangeSize = (value: ButtonPropSize) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedViewProps },
      type: 'Button',
    }
    newProps.props.size = value
    onDispatch(selectedView, newProps)
  }
  const onChangeView = (value: ButtonPropView) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedViewProps },
      type: 'Button',
    }
    newProps.props.view = value
    onDispatch(selectedView, newProps)
  }
  const onChangeForm = (value: ButtonPropForm) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedViewProps },
      type: 'Button',
    }
    newProps.props.form = value
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof ButtonProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked
      const newProps: BrandButtonProps = {
        props: {
          ...selectedViewProps,
          [propsName]: checked,
        },
        type: 'Button',
      }
      onDispatch(selectedView, newProps)
      // if (propsName === 'action' && checked) {
      //   onChangeButtonAction('ButtonModal')
      // }
      // if (propsName === 'action' && !checked) {
      //   onChangeButtonAction('none')
      // }
    }

  // const onChangeButtonAction = (value: ButtonAction) => {
  //   const newProps: BrandButtonProps = {
  //     props: { ...selectedViewProps },
  //     type: 'Button',
  //   }

  //   newProps.props['action'] = value

  //   onUpdateSelected(selectedView, newProps)
  //   if (buttonActionsActive.includes(value)) {
  //     addConnectedElement()
  //   } else {
  //     removeConnectedElement()
  //   }
  // }

  const addConnectedElement = () => {
    // const currentButtonElement = allElementsMap.get(selectedView?.elementId || '')
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
    //     addNewView([{
    //         parent: currentButtonElement.id,
    //         element: connectedButtonGroupElement
    //       }])
    //   )
    //   dispatch(
    //    addNewView([
    //       {
    //         parent: connectedButtonGroupElement.id,
    //         element: layoutElement,
    //       },
    //     ]),
    //   )
    // }
  }

  const removeConnectedElement = () => {
    // if (selectedView) {
    //   // const connectedElementIds = allElementsTree.get(selectedView.elementId)
    //   // connectedElementIds?.forEach((id: any) => {
    //   //   dispatch(
    //   //     formConstructorSlice.actions.deleteFormElement({
    //   //       elementId: id,
    //   //     }),
    //   //   )
    //   // })
    // }
  }

  const onUpdateSelected = (selectedView: IselectedView, newProps: BrandButtonProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeIcon = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedViewProps },
      type: 'Button',
    }
    newProps.props.icon = value ? value : undefined
    onDispatch(selectedView, newProps)
  }

  const onChangeIconR = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: { ...selectedViewProps },
      type: 'Button',
    }
    newProps.props.iconR = value ? value : undefined
    onDispatch(selectedView, newProps)
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandButtonProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  return {
    onChangeSwitch,
    // onChangeButtonAction,
    onChangeIcon,
    onChangeIconR,
    onChangeLabel,
    onChangeSize,
    onChangeView,
    onChangeForm,
    itemsProps: {
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      // action: selectedViewProps.action,
      label: selectedViewProps.label,
      disabled: selectedViewProps.disabled,
      iconLeft: selectedViewProps.iconLeft,
      form: selectedViewProps.form,
      loading: selectedViewProps.loading,
      iconRight: selectedViewProps.iconRight,
      onlyIcon: selectedViewProps.onlyIcon,
      icon: selectedViewProps.icon,
      iconR: selectedViewProps.iconR,
    },
  }
}

import { useDispatch } from 'react-redux'
import {
  ButtonAction,
  ButtonProps,
  IButtonModalElement,
  buttonActionsActive,
  defaultHeight,
  defaultWidth,
  formConstructorSlice,
  useAppSelector,
} from '../../../../store/formElements'
import {
  FormGroupsTypes,
  ILayoutElement,
  ISelectedElement,
} from '../../../../store/formElements/types'
import { ButtonPropSize, ButtonPropForm, ButtonPropView } from '@consta/uikit/Button'
import uuid from 'react-uuid'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement, allElementsMap, allElementsTree } = useAppSelector(
    state => state.formConstructor,
  )
  const dispatch = useDispatch()

  const onChangeField = (
    value: ButtonPropSize | ButtonPropForm | ButtonPropView | string,
    field: keyof ButtonProps,
  ) => {
    if (selectedElement) {
      const newProps: ButtonProps = {
        ...(selectedElementProps as ButtonProps),
      }
      // @ts-ignore
      newProps[field] = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof ButtonProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElementProps) {
        const newProps: ButtonProps = {
          ...(selectedElementProps as ButtonProps),
          [propsName]: checked,
        }
        selectedElement && onDispatch(selectedElement, newProps)
      }
    }

  const onChangeButtonAction = (value: ButtonAction) => {
    if (selectedElement) {
      const newProps: ButtonProps = {
        ...(selectedElementProps as ButtonProps),
      }

      newProps['action'] = value

      onUpdateSelected(selectedElement, newProps)
      if (buttonActionsActive.includes(value)) {
        addConnectedElement()
      } else {
        removeConnectedElement()
      }
    }
  }

  const addConnectedElement = () => {
    const currentButtonElement = allElementsMap.get(selectedElement?.elementId || '')

    if (currentButtonElement && currentButtonElement.id) {
      const connectedButtonGroupElement: IButtonModalElement = {
        id: uuid(),
        connectedButtonId: currentButtonElement.id,
        isOuter: false,
        type: 'ButtonModal',
        props: {
          height: defaultHeight,
          width: defaultWidth,
          className: '',
          baseProps: {},
        },
      }
      const layoutElement: ILayoutElement = {
        id: uuid(),
        type: FormGroupsTypes.Layout,
        isOuter: false,
        props: {
          constaProps: {
            flex: 1,
            direction: 'row',
          },
          className: '',
          baseProps: {},
        },
      }

      dispatch(
        formConstructorSlice.actions.addNewElement([
          {
            parent: currentButtonElement.id,
            element: connectedButtonGroupElement,
          },
        ]),
      )

      dispatch(
        formConstructorSlice.actions.addNewElement([
          {
            parent: connectedButtonGroupElement.id,
            element: layoutElement,
          },
        ]),
      )
    }
  }

  const removeConnectedElement = () => {
    if (selectedElement) {
      const connectedElementIds = allElementsTree.get(selectedElement.elementId)
      connectedElementIds?.forEach(id => {
        dispatch(
          formConstructorSlice.actions.deleteElement({
            elementId: id,
          }),
        )
      })
    }
  }

  const onUpdateSelected = (selectedElement: ISelectedElement, newProps: ButtonProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: ButtonProps) => {
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
    onChangeButtonAction,
    itemsProps: {
      size: (selectedElementProps as ButtonProps).size,
      view: (selectedElementProps as ButtonProps).view,
      action: (selectedElementProps as ButtonProps).action,
      label: (selectedElementProps as ButtonProps).label,
      disabled: (selectedElementProps as ButtonProps).disabled,
      iconLeft: (selectedElementProps as ButtonProps).iconLeft,
      form: (selectedElementProps as ButtonProps).form,
      loading: (selectedElementProps as ButtonProps).loading,
      iconRight: (selectedElementProps as ButtonProps).iconRight,
      onlyIcon: (selectedElementProps as ButtonProps).onlyIcon,
    },
  }
}
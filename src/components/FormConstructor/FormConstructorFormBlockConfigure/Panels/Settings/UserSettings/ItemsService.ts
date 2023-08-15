import { UserPropSize, UserPropStatus, UserPropView, UserPropWidth } from '@consta/uikit/User'
import { ISelectedElement, UserProps } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { getSelectedElementProps } from '../../../../store/formElements'

export const useItemsHandlers = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<UserProps>)
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: UserPropView | UserPropWidth | UserPropSize | UserPropStatus | string,
    field: keyof UserProps,
  ) => {
    if (selectedElement) {
      onDispatch(selectedElement, { ...selectedElementProps, [field]: value })
    }
  }
  const onChangeSwitch =
    (propsName: keyof UserProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: checked })
      }
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: UserProps) => {
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
    itemsProps: {
      avatarUrl: selectedElementProps.avatarUrl,
      checked: selectedElementProps.checked,
      info: selectedElementProps.info,
      name: selectedElementProps.name,
      onlyAvatar: selectedElementProps.onlyAvatar,
      size: selectedElementProps.size,
      status: selectedElementProps.status,
      view: selectedElementProps.view,
      width: selectedElementProps.width,
      withArrow: selectedElementProps.withArrow,
    },
  }
}

import { UserPropView, UserPropWidth, UserPropSize, UserPropStatus } from '@consta/uikit/User'
import { UserProps, ISelectedElement, UserElement, BrandUserProps } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (selectedElementProps: UserProps, selectedElement: UserElement) => {
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: UserPropView | UserPropWidth | UserPropSize | UserPropStatus | string,
    field: keyof UserProps,
  ) => {
    if (selectedElement) {
      const newProps: BrandUserProps = {
        props: { ...selectedElementProps },
        type: 'User',
      }
      // @ts-ignore
      newProps.props[field] = value

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSwitch =
    (propsName: keyof UserProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: BrandUserProps = {
          props: { ...selectedElementProps },
          type: 'User',
        }
        // @ts-ignore
        newProps.props[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandUserProps) => {
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

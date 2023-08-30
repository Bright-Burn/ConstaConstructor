import { UserProps, ISelectedElement, UserElement, BrandUserProps } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { ValueType } from './UserConstants'

export const useItemsHandlers = (selectedElementProps: UserProps, selectedElement: UserElement) => {
  const dispatch = useAppDispatch()

  const onChangeField = (value: ValueType, field: keyof UserProps) => {
    if (selectedElement) {
      const newProps: BrandUserProps = {
        props: { ...selectedElementProps, [field]: value },
        type: 'User',
      }

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSwitch =
    (propsName: keyof UserProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: BrandUserProps = {
          props: { ...selectedElementProps, [propsName]: checked },
          type: 'User',
        }
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

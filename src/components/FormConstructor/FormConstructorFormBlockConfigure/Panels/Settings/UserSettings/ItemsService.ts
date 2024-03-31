import type {
  BrandUserProps,
  ISelectedElement,
  UserElement,
  UserProps,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

import type { sizeType, statusType, viewsType } from './UserConstants'
export const useItemsHandlers = (selectedElementProps: UserProps, selectedElement: UserElement) => {
  const dispatch = useAppDispatch()

  const onChangeSize = (value: sizeType) => {
    const newProps: BrandUserProps = {
      props: { ...selectedElementProps, size: value },
      type: 'User',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeView = (value: viewsType) => {
    const newProps: BrandUserProps = {
      props: { ...selectedElementProps, view: value },
      type: 'User',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeStatus = (value: statusType) => {
    const newProps: BrandUserProps = {
      props: { ...selectedElementProps, status: value },
      type: 'User',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeAvatarUrl = (value: string) => {
    const newProps: BrandUserProps = {
      props: { ...selectedElementProps, avatarUrl: value },
      type: 'User',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeName = (value: string) => {
    const newProps: BrandUserProps = {
      props: { ...selectedElementProps, name: value },
      type: 'User',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeInfo = (value: string) => {
    const newProps: BrandUserProps = {
      props: { ...selectedElementProps, info: value },
      type: 'User',
    }
    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof UserProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandUserProps = {
        props: { ...selectedElementProps, [propsName]: checked.target.checked },
        type: 'User',
      }
      onDispatch(selectedElement, newProps)
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandUserProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }
  return {
    onChangeAvatarUrl,
    onChangeName,
    onChangeInfo,
    onChangeStatus,
    onChangeSize,
    onChangeView,
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

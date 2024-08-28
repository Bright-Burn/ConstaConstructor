import type { BrandUserProps, IselectedView, UserElement, UserProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { sizeType, statusType, viewsType } from './UserConstants'
export const useItemsHandlers = (selectedViewProps: UserProps, selectedView: UserElement) => {
  const dispatch = useAppDispatch()

  const onChangeSize = (value: sizeType) => {
    const newProps: BrandUserProps = {
      props: { ...selectedViewProps, size: value },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeView = (value: viewsType) => {
    const newProps: BrandUserProps = {
      props: { ...selectedViewProps, view: value },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeStatus = (value: statusType) => {
    const newProps: BrandUserProps = {
      props: { ...selectedViewProps, status: value },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeAvatarUrl = (value: string) => {
    const newProps: BrandUserProps = {
      props: { ...selectedViewProps, avatarUrl: value },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeName = (value: string) => {
    const newProps: BrandUserProps = {
      props: { ...selectedViewProps, name: value },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeInfo = (value: string) => {
    const newProps: BrandUserProps = {
      props: { ...selectedViewProps, info: value },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof UserProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandUserProps = {
        props: { ...selectedViewProps, [propsName]: checked.target.checked },
        type: 'User',
      }
      onDispatch(selectedView, newProps)
    }

  const onDispatch = (selectedView: IselectedView, newProps: BrandUserProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
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
      avatarUrl: selectedViewProps.avatarUrl,
      checked: selectedViewProps.checked,
      info: selectedViewProps.info,
      name: selectedViewProps.name,
      onlyAvatar: selectedViewProps.onlyAvatar,
      size: selectedViewProps.size,
      status: selectedViewProps.status,
      view: selectedViewProps.view,
      width: selectedViewProps.width,
      withArrow: selectedViewProps.withArrow,
    },
  }
}

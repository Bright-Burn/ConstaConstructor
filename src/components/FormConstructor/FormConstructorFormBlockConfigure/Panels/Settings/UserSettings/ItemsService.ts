import type { BrandUserProps, IselectedView, UserElement, UserProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { sizeType, statusType, viewsType } from './UserConstants'
export const useItemsHandlers = (selectedViewProps: UserProps, selectedView: UserElement) => {
  const dispatch = useAppDispatch()

  const onChangeSize = (value: sizeType) => {
    const newProps: BrandUserProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          size: value,
        },
      },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeView = (value: viewsType) => {
    const newProps: BrandUserProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          view: value,
        },
      },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeStatus = (value: statusType) => {
    const newProps: BrandUserProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          status: value,
        },
      },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeAvatarUrl = (value: string) => {
    const newProps: BrandUserProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          avatarUrl: value,
        },
      },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeName = (value: string) => {
    const newProps: BrandUserProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          name: value,
        },
      },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeInfo = (value: string) => {
    const newProps: BrandUserProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          info: value,
        },
      },
      type: 'User',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof UserProps['uiLibProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandUserProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            [propsName]: checked.target.checked,
          },
        },
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
      avatarUrl: selectedViewProps.uiLibProps.avatarUrl,
      checked: selectedViewProps.uiLibProps.checked,
      info: selectedViewProps.uiLibProps.info,
      name: selectedViewProps.uiLibProps.name,
      onlyAvatar: selectedViewProps.uiLibProps.onlyAvatar,
      size: selectedViewProps.uiLibProps.size,
      status: selectedViewProps.uiLibProps.status,
      view: selectedViewProps.uiLibProps.view,
      width: selectedViewProps.uiLibProps.width,
      withArrow: selectedViewProps.uiLibProps.withArrow,
    },
  }
}

import type { ChangeEvent } from 'react'

import type {
  AvatarElement,
  AvatarProps,
  BrandAvatarProps,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { form, sizes } from './constants'

export const useItemsHandlers = (selectedViewProps: AvatarProps, selectedView: AvatarElement) => {
  const dispatch = useAppDispatch()

  const onChangeName = (name: string | null) => {
    const newProps: BrandAvatarProps = {
      props: { ...selectedViewProps, name: name || undefined },
      type: 'Avatar',
    }

    onDispatch(selectedView, newProps)
  }
  const onChangeSize = (size: (typeof sizes)[number] | null) => {
    const newProps: BrandAvatarProps = {
      props: { ...selectedViewProps, size: size || undefined },
      type: 'Avatar',
    }

    onDispatch(selectedView, newProps)
  }
  const onChangeForm = (forms: (typeof form)[number] | null) => {
    const newProps: BrandAvatarProps = {
      props: { ...selectedViewProps, form: forms || undefined },
      type: 'Avatar',
    }

    onDispatch(selectedView, newProps)
  }
  const onChangeImage = (image: ChangeEvent<HTMLInputElement> | null) => {
    const newProps: BrandAvatarProps = {
      props: {
        ...selectedViewProps,
        url: image?.target.checked ? './assets/avatar.jpg' : undefined,
      },
      type: 'Avatar',
    }

    onDispatch(selectedView, newProps)
  }
  const onChangeMonochrome = (monochrome: ChangeEvent<HTMLInputElement> | null) => {
    const newProps: BrandAvatarProps = {
      props: { ...selectedViewProps, monochrome: monochrome?.target.checked || undefined },
      type: 'Avatar',
    }

    onDispatch(selectedView, newProps)
  }
  const onDispatch = (selectedView: IselectedView, newProps: BrandAvatarProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  return {
    onChangeName,
    onChangeSize,
    onChangeForm,
    onChangeImage,
    onChangeMonochrome,
  }
}

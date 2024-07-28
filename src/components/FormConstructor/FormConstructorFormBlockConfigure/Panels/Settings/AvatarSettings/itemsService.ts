import type { ChangeEvent } from 'react'

import type {
  AvatarElement,
  AvatarProps,
  BrandAvatarProps,
  ISelectedElement,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { form, sizes } from './constants'

export const useItemsHandlers = (
  selectedElementProps: AvatarProps,
  selectedElement: AvatarElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeName = (name: string | null) => {
    const newProps: BrandAvatarProps = {
      props: { ...selectedElementProps, name: name || undefined },
      type: 'Avatar',
    }

    onDispatch(selectedElement, newProps)
  }
  const onChangeSize = (size: (typeof sizes)[number] | null) => {
    const newProps: BrandAvatarProps = {
      props: { ...selectedElementProps, size: size || undefined },
      type: 'Avatar',
    }

    onDispatch(selectedElement, newProps)
  }
  const onChangeForm = (forms: (typeof form)[number] | null) => {
    const newProps: BrandAvatarProps = {
      props: { ...selectedElementProps, form: forms || undefined },
      type: 'Avatar',
    }

    onDispatch(selectedElement, newProps)
  }
  const onChangeImage = (image: ChangeEvent<HTMLInputElement> | null) => {
    const newProps: BrandAvatarProps = {
      props: {
        ...selectedElementProps,
        url: image?.target.checked ? './assets/avatar.jpg' : undefined,
      },
      type: 'Avatar',
    }

    onDispatch(selectedElement, newProps)
  }
  const onChangeMonochrome = (monochrome: ChangeEvent<HTMLInputElement> | null) => {
    const newProps: BrandAvatarProps = {
      props: { ...selectedElementProps, monochrome: monochrome?.target.checked || undefined },
      type: 'Avatar',
    }

    onDispatch(selectedElement, newProps)
  }
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandAvatarProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  return {
    onChangeName,
    onChangeSize,
    onChangeForm,
    onChangeImage,
    onChangeMonochrome,
  }
}

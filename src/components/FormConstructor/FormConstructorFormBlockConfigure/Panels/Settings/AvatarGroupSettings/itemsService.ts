import type { ChangeEvent } from 'react'

import type {
  AvatarGroupElement,
  AvatarGroupProps,
  BrandAvatarGroupProps,
  ISelectedElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

import type { form, sizes } from './constants'

export const useItemsHandlers = (
  selectedElementProps: AvatarGroupProps,
  selectedElement: AvatarGroupElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeSize = (size: (typeof sizes)[number] | null) => {
    const newProps: BrandAvatarGroupProps = {
      props: { ...selectedElementProps, size: size || undefined },
      type: 'AvatarGroup',
    }

    onDispatch(selectedElement, newProps)
  }
  const onChangeVisibleCount = (event: ChangeEvent<HTMLInputElement> | null) => {
    const visibleCount = event?.target.checked ? 'auto' : 4
    const newProps: BrandAvatarGroupProps = {
      props: { ...selectedElementProps, visibleCount },
      type: 'AvatarGroup',
    }

    onDispatch(selectedElement, newProps)
  }
  const handleChangeVisibleCount = (visibleCount: string | null) => {
    const newProps: BrandAvatarGroupProps = {
      props: { ...selectedElementProps, visibleCount: visibleCount ? +visibleCount : undefined },
      type: 'AvatarGroup',
    }

    onDispatch(selectedElement, newProps)
  }
  const onChangeForm = (forms: (typeof form)[number] | null) => {
    const newProps: BrandAvatarGroupProps = {
      props: { ...selectedElementProps, form: forms || undefined },
      type: 'AvatarGroup',
    }

    onDispatch(selectedElement, newProps)
  }

  const onChangeMonochrome = (monochrome: ChangeEvent<HTMLInputElement> | null) => {
    const newProps: BrandAvatarGroupProps = {
      props: { ...selectedElementProps, monochrome: monochrome?.target.checked || undefined },
      type: 'AvatarGroup',
    }

    onDispatch(selectedElement, newProps)
  }
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandAvatarGroupProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }

  return {
    onChangeSize,
    onChangeForm,
    onChangeMonochrome,
    onChangeVisibleCount,
    handleChangeVisibleCount,
  }
}

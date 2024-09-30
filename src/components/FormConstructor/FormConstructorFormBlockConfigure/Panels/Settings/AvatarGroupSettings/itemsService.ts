import type { ChangeEvent } from 'react'

import type {
  AvatarGroupElement,
  AvatarGroupProps,
  BrandAvatarGroupProps,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { form, sizes } from './constants'

export const useItemsHandlers = (
  selectedViewProps: AvatarGroupProps,
  selectedView: AvatarGroupElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeSize = (size: (typeof sizes)[number] | null) => {
    const newProps: BrandAvatarGroupProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, size: size || undefined },
      },
      type: 'AvatarGroup',
    }

    onDispatch(selectedView, newProps)
  }
  const onChangeVisibleCount = (event: ChangeEvent<HTMLInputElement> | null) => {
    const visibleCount = event?.target.checked ? 'auto' : 4
    const newProps: BrandAvatarGroupProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          visibleCount,
        },
      },
      type: 'AvatarGroup',
    }

    onDispatch(selectedView, newProps)
  }
  const handleChangeVisibleCount = (visibleCount: string | null) => {
    const newProps: BrandAvatarGroupProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          visibleCount: visibleCount ? +visibleCount : undefined,
        },
      },
      type: 'AvatarGroup',
    }

    onDispatch(selectedView, newProps)
  }
  const onChangeForm = (forms: (typeof form)[number] | null) => {
    const newProps: BrandAvatarGroupProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          form: forms || undefined,
        },
      },
      type: 'AvatarGroup',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeMonochrome = (monochrome: ChangeEvent<HTMLInputElement> | null) => {
    const newProps: BrandAvatarGroupProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          monochrome: monochrome?.target.checked || undefined,
        },
      },
      type: 'AvatarGroup',
    }

    onDispatch(selectedView, newProps)
  }
  const onDispatch = (selectedView: IselectedView, newProps: BrandAvatarGroupProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  return {
    onChangeSize,
    onChangeForm,
    onChangeMonochrome,
    onChangeVisibleCount,
    handleChangeVisibleCount,
  }
}

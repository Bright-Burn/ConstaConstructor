import type { ButtonProps } from '../../../coreTypes'

import type { ButtonProps_Deprecated } from './deprecatedTypes'

// Тип адаптера для кнопки
export type ButtonAdapterType = (
  buttonInstanceId: string,
  deprecated: ButtonProps_Deprecated,
) => ButtonProps

// Адаптер для кнопки
export const buttonAdapter: ButtonAdapterType = (id, deprecated) => {
  console.info(`Run adapter for Button instance with id=${id}`)
  const newButtonProps: ButtonProps = {
    // filled в поле styles
    styles: {
      filled: deprecated.filled,
    },
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    // Свойства ui библиотеки вынесены отдельно
    constaProps: {
      iconLeft: deprecated.icon,
      iconRight: deprecated.iconR,
      disabled: deprecated.disabled,
      form: deprecated.form,
      iconSize: deprecated.iconSize,
      label: deprecated.label,
      loading: deprecated.loading,
      size: deprecated.size,
      onlyIcon: deprecated.onlyIcon,
      title: deprecated.title,
      type: deprecated.type,
      width: deprecated.width,
      view: deprecated.view,
      tabIndex: deprecated.tabIndex,
    },
  }
  return newButtonProps
}

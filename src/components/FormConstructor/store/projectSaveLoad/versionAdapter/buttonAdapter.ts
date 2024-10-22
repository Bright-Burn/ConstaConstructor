import type { ButtonProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { ButtonProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

// Тип адаптера для кнопки
export type ButtonAdapter = GenericAdapter<ButtonProps_Deprecated, ButtonProps>

// Адаптер для кнопки
export const buttonAdapter: ButtonAdapter = (id, deprecated) => {
  console.info(`Run adapter for Button instance with id=${id}`)
  const newButtonProps: ButtonProps = {
    // filled в поле styles
    styles: {
      filled: deprecated.filled,
    },
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    // Свойства ui библиотеки вынесены отдельно
    uiLibProps: {
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

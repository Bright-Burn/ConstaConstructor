import type { ButtonProps } from '../../../coreTypes'
// Такой импорт не является ошибкой, поскольку весь адаптер будет удален после полного переезда на новые пропсы
import type { ButtonProps_Deprecated } from '../../../coreTypes/buttonTypes'

// Тип адаптера для кнопки
export type ButtonAdapterType = (deprecated: ButtonProps_Deprecated) => ButtonProps

// Адаптер для кнопки
export const buttonAdapter: ButtonAdapterType = deprecated => {
  console.info('Run adapter for Button')
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

import type { BaseTypes } from '../../../../coreTypes'

/**
 * Формирует classname для элемента
 * @param baseProps Объект для настройки отступов
 * @returns classname для компонента
 */
export const buildClassName = (baseProps: BaseTypes) => {
  const prevPadding = baseProps.padding
    ? Object.values(baseProps.padding)
        .filter(value => value != 'Null')
        .join(' ')
    : ''
  const prevMargin = baseProps.margin
    ? Object.values({ ...baseProps.margin })
        .filter(value => value != 'Null')
        .join(' ')
    : ''
  const resultClassName = `${prevPadding ? `${prevPadding} ` : prevPadding}${prevMargin}`

  return resultClassName
}

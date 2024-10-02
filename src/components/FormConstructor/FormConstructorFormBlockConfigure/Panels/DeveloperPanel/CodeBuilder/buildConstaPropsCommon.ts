export type UiLibProps = Record<string, string | number | boolean | object>

// Нименования свойств в значении которых может быть иконка начинаются с Icon
const IconPrefix = 'icon'

/**
 * Строит стили из дизайн системы для элемента
 * @param obj Оъект стилей
 * @returns
 */
export const buildConstaPropsCommon = (props: UiLibProps): string => {
  let resultString = ''
  Object.entries(props).forEach(([key, value]) => {
    typeof value !== 'string' || key.startsWith(IconPrefix)
      ? typeof value === 'object'
        ? (resultString += `${key}={${JSON.stringify(value)}}\n`)
        : (resultString += `${key}={${value}}\n`)
      : (resultString += `${key}={'${value}'}\n`)
  })

  return resultString
}

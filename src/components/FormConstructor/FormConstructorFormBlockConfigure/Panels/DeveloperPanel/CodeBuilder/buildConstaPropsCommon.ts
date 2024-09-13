export type ConstaPropsStyles = Partial<Record<string, string | number>>

/**
 * Строит стили из дизайн системы для элемента
 * @param obj Оъект стилей
 * @returns
 */
export const buildConstaPropsCommon = (props: ConstaPropsStyles): string => {
  let resultString = ''
  Object.entries(props).forEach(([key, value]) => {
    typeof value !== 'string'
      ? (resultString += `${key}={${value}}\n`)
      : (resultString += `${key}={'${value}'}\n`)
  })

  return resultString
}

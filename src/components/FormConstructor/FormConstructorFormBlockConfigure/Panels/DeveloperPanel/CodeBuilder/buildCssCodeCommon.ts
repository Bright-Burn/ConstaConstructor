import { spacingStyles } from './classNameMapping'

export type CssCodeStyles = Record<string, string>

// Список свойств, которые должны браться из переменных окуржения
const varProperties = new Set(['background-color', 'border-color'])

/**
 * Строит css стили
 * @param componentName Наименование комопнента
 * @param styles Стили
 * @param classNames classname
 * @returns
 */
export const buildCssCodeCommon = (
  componentName: string,
  styles: CssCodeStyles,
  classNames: string | null,
) => {
  let resultString = `.${componentName} {\n`
  const upperCaseRegex = /[A-Z]/g

  Object.entries(styles).forEach(([key, value]) => {
    const newKey = key.replace(upperCaseRegex, match => {
      return `-${match.toLocaleLowerCase()}`
    })

    if (varProperties.has(newKey)) {
      resultString += `${newKey}: var(--${value});\n`
    } else {
      resultString += `${newKey}: ${value};\n`
    }
  })

  classNames?.split(' ').forEach(className => {
    if (className in spacingStyles) {
      resultString += `${spacingStyles[className]}\n`
    }
  })

  return `${resultString}}`
}

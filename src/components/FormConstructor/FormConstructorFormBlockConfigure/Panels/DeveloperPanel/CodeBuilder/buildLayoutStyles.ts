import type { LayoutElementPropsStyles, LayoutElementStyles } from '../../../../coreTypes'

import { spacingStyles } from './classNameMapping'
import type { BuildedCode, LayoutStylesBuilder } from './types'

/**
 * Строит код выбранного компонента
 * @param componentName Наименование компонента
 * @param props Пропсы(настройки) выбранного компонента
 * @returns Сгенерированный код компонента
 */
export const buildLayoutStyles: LayoutStylesBuilder = (componentName, props) => {
  const buildedCode: BuildedCode = {
    cssCode: buildCssCode(componentName, props.styles || null, props.className || null),
    jsxCode: `<Layout \n${buildConstaProps(props)}/>`,
  }

  return buildedCode
}

/**
 * Строит стили из дизайн системы для элемента
 * @param obj Оъект стилей
 * @returns
 */
const buildConstaProps = (obj: LayoutElementPropsStyles): string => {
  const props = obj.constaProps
  let resultString = ''
  Object.entries(props).forEach(([key, value]) => {
    typeof value !== 'string'
      ? (resultString += `${key}={${value}}\n`)
      : (resultString += `${key}={'${value}'}\n`)
  })

  return resultString
}

/**
 * Строит css стили
 * @param componentName Наименование комопнента
 * @param styles Стили
 * @param classNames classname
 * @returns
 */
const buildCssCode = (
  componentName: string,
  styles: LayoutElementStyles | null,
  classNames: string | null,
) => {
  let resultString = `.${componentName} {\n`
  const upperCaseRegex = /[A-Z]/g

  if (styles) {
    Object.entries(styles).forEach(([key, value]) => {
      const newKey = key.replace(upperCaseRegex, match => {
        return `-${match.toLocaleLowerCase()}`
      })
      resultString += `${newKey}: ${value}\n`
    })
  }

  classNames?.split(' ').forEach(className => {
    if (className in spacingStyles) {
      resultString += `${spacingStyles[className]}\n`
    }
  })

  return `${resultString}}`
}

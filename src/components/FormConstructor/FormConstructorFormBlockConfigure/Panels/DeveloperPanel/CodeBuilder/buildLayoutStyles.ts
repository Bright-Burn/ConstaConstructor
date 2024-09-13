import { buildConstaPropsCommon, ConstaPropsStyles } from './buildConstaPropsCommon'
import { buildCssCodeCommon, CssCodeStyles } from './buildCssCodeCommon'

import type { BuildedCode, LayoutStylesBuilder } from './types'

/**
 * Строит код выбранного компонента
 * @param componentName Наименование компонента
 * @param props Пропсы(настройки) выбранного компонента
 * @returns Сгенерированный код компонента
 */
export const buildLayoutStyles: LayoutStylesBuilder = (componentName, props) => {
  const propsStyles: CssCodeStyles = {}
  const constaProps: ConstaPropsStyles = {}

  // Преобразуем к типу аргумента функции билдера
  if (props.styles) {
    Object.entries(props.styles).forEach(([key, value]) => {
      propsStyles[key] = value
    })
  }

  // Преобразуем к типу аргумента функции билдера
  Object.entries(props.constaProps).forEach(([key, value]) => {
    constaProps[key] = value
  })

  const buildedCode: BuildedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode: `<Layout \n${buildConstaPropsCommon(constaProps)}/>`,
  }

  return buildedCode
}

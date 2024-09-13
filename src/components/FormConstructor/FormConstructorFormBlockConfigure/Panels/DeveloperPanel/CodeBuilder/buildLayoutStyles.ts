import { LayoutElementProps, LayoutElementStyles } from '../../../../coreTypes'
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
  const constaProps: ConstaPropsStyles = {}
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  if (props.styles) {
    propsStyles = layoutCssToCommon(props.styles)
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

/**
 * Собирает из пропсов Layout объект со свойствами, имеющиемеся в css - подготовительный этап для сборки в валидный css
 * @param styles Объект стилей Layout
 * @returns
 */
const layoutCssToCommon = (styles: LayoutElementStyles): CssCodeStyles => {
  const propsStyles: CssCodeStyles = {}

  for (let [key, value] of Object.entries(styles)) {
    // Игнорируем свойство borderSide пока нет правильной реализации, и нет возможности устаналивать border с определенной стороны
    if (key === 'borderSide') {
      continue
    }

    propsStyles[key] = value
  }

  return propsStyles
}

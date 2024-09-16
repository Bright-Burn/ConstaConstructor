import type { LayoutElementStyles } from '../../../../coreTypes'

import type { ConstaPropsStyles } from './buildConstaPropsCommon'
import { buildConstaPropsCommon } from './buildConstaPropsCommon'
import type { CssCodeStyles } from './buildCssCodeCommon'
import { buildCssCodeCommon } from './buildCssCodeCommon'
import { isPixelValidString } from './isPixelValidString'
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
    propsStyles = layoutCssToCodeStyles(props.styles)
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

// Список свойств, которые должны браться из переменных окуржения
const varProperties = new Set(['backgroundColor', 'borderColor'])

/**
 * Собирает из пропсов Layout объект со свойствами, имеющиемеся в css - подготовительный этап для сборки в валидный css
 * @param styles Объект стилей Layout
 * @returns
 */
const layoutCssToCodeStyles = (styles: LayoutElementStyles): CssCodeStyles => {
  const propsStyles: CssCodeStyles = {}

  for (const [key, value] of Object.entries(styles)) {
    if (value != null) {
      if (varProperties.has(key)) {
        propsStyles[key] = `var(--${value})`
      } else {
        const preparedValue = isPixelValidString(value) ? `${value}px` : value
        propsStyles[key] = preparedValue
      }
    }
  }

  return propsStyles
}

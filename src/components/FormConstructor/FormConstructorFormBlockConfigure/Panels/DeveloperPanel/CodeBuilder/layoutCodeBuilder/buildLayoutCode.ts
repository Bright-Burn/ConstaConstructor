import type { LayoutElementStyles } from '../../../../../coreTypes'
import type { UiLibProps } from '../buildConstaPropsCommon'
import { buildConstaPropsCommon } from '../buildConstaPropsCommon'
import type { CssCodeStyles } from '../buildCssCodeCommon'
import { buildCssCodeCommon } from '../buildCssCodeCommon'
import { constaPropsAdapterCommon } from '../constaPropsAdapterCommon'
import { varProperties } from '../customPropertiesCommon'
import { isPixelValidString } from '../isPixelValidString'
import type { GeneratedCode } from '../types'

import type { LayoutStylesBuilder } from './types'

/**
 * Строит код выбранного компонента - Layout
 * @param componentName Наименование компонента
 * @param props Пропсы(настройки) выбранного компонента
 * @returns Сгенерированный код компонента
 */
export const buildLayoutCode: LayoutStylesBuilder = (componentName, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  if (props.styles) {
    propsStyles = layoutCssToCodeStyles(props.styles)
  }

  // Преобразуем к типу аргумента функции билдера
  const constaProps: UiLibProps = constaPropsAdapterCommon(props.constaProps)

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode: `<Layout \n${buildConstaPropsCommon(constaProps)}/>`,
  }

  return builtCode
}

/**
 * Собирает из пропсов Layout объект со свойствами, имеющиемеся в css - подготовительный этап для сборки в валидный css
 * @returns
 * @param styles Объект стилей Layout
 */
const layoutCssToCodeStyles = (styles: LayoutElementStyles): CssCodeStyles => {
  const propsStyles: CssCodeStyles = {}

  for (const [key, value] of Object.entries(styles)) {
    // В старых макетах в занчение по умолчания для borderСolor и backgroundColor устанавливается строка Null, для того, чтобы строка Null не попадала в генерацию кода
    // После создания адаптера и написание кастомного Layout можно будет убрать данную проверку, как и проверку borderSide
    if (value !== null && value !== undefined && value !== 'Null' && key !== 'borderSide') {
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

import type { UiLibProps } from '../buildConstaPropsCommon'
import { buildConstaPropsCommon } from '../buildConstaPropsCommon'
import type { CssCodeStyles } from '../buildCssCodeCommon'
import { buildCssCodeCommon } from '../buildCssCodeCommon'
import { constaPropsAdapterCommon } from '../constaPropsAdapterCommon'
import { propsCssToCodeStyles } from '../propsToCssCode'
import type { GeneratedCode } from '../types'

import type { DefaultCodeBuilder } from './types'

/**
 * Строит код выбранного компонента
 * @param componentName Наименование компонента
 * @param props Пропсы(настройки) выбранного компонента
 * @returns Сгенерированный код компонента
 */
export const buildCodeDefault: DefaultCodeBuilder = (componentName, jsxName, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  propsStyles = propsCssToCodeStyles(props.styles)

  // Преобразуем к типу аргумента функции билдера
  const uiLibProps: UiLibProps = constaPropsAdapterCommon(props.uiLibProps)

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode: `<${jsxName} \n${buildConstaPropsCommon(uiLibProps)}/>`,
  }

  return builtCode
}

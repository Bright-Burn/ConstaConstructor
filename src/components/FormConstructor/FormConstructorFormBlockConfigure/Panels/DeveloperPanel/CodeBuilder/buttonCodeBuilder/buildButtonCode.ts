import type { ConstaPropsStyles } from '../buildConstaPropsCommon'
import { buildConstaPropsCommon } from '../buildConstaPropsCommon'
import type { CssCodeStyles } from '../buildCssCodeCommon'
import { buildCssCodeCommon } from '../buildCssCodeCommon'
import { constaPropsAdapterCommon } from '../constaPropsAdapterCommon'
import { propsCssToCodeStyles } from '../propsToCssCode'
import type { GeneratedCode } from '../types'

import type { ButtonStylesBuilder } from './types'

/**
 * Строит код выбранного компонента - Кнопки
 * @param componentName Наименование компонента
 * @param props Пропсы(настройки) выбранного компонента
 * @returns Сгенерированный код компонента
 */
export const buildButtonCode: ButtonStylesBuilder = (componentName, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  if (props.styles) {
    propsStyles = propsCssToCodeStyles(props.styles)
  }

  // Преобразуем к типу аргумента функции билдера
  const constaProps: ConstaPropsStyles = constaPropsAdapterCommon(props.constaProps)

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode: `<Button \n${buildConstaPropsCommon(constaProps)}/>`,
  }

  return builtCode
}

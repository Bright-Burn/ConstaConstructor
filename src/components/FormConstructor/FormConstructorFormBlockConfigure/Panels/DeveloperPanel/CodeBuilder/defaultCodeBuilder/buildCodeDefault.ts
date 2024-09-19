import { UnionProps } from '../../../../../coreTypes'
import { ConstaPropsStyles, buildConstaPropsCommon } from '../buildConstaPropsCommon'
import { CssCodeStyles, buildCssCodeCommon } from '../buildCssCodeCommon'
import { constaPropsAdapterCommon } from '../constaPropsAdapterCommon'
import { propsCssToCodeStyles } from '../propsToCssCode'
import { GeneratedCode } from '../types'
import { DefaultCodeBuilder } from './types'

/**
 * Строит код выбранного компонента - Кнопки
 * @param componentName Наименование компонента
 * @param props Пропсы(настройки) выбранного компонента
 * @returns Сгенерированный код компонента
 */
export const buildCodeDefault: DefaultCodeBuilder = (componentName, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  // @ts-expect-error Временное решение, убрать игнор, когда у всех компонентов появится styles
  if (props.styles) {
    // @ts-expect-error Временное решение, убрать игнор, когда у всех компонентов появится styles
    propsStyles = propsCssToCodeStyles(props.styles)
  }

  // Преобразуем к типу аргумента функции билдера
  // @ts-expect-error Временное решение, убрать игнор, когда у всех компонентов появится constaProps
  const constaProps: ConstaPropsStyles = constaPropsAdapterCommon(props.constaProps)

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode: `<Button \n${buildConstaPropsCommon(constaProps)}/>`,
  }

  return builtCode
}

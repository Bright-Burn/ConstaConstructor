import type { EChartProps } from '../../../../../coreTypes'
import type { CssCodeStyles } from '../buildCssCodeCommon'
import { buildCssCodeCommon } from '../buildCssCodeCommon'
import { propsCssToCodeStyles } from '../propsToCssCode'
import type { GeneratedCode } from '../types'

type EchartsCodeBuilder = (componentName: string, props: EChartProps) => GeneratedCode

export const buildEchartsCode: EchartsCodeBuilder = (componentName, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  propsStyles = propsCssToCodeStyles(props.styles)

  const jsxCode = '<div ref={ref}></div>'

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode,
  }

  return builtCode
}

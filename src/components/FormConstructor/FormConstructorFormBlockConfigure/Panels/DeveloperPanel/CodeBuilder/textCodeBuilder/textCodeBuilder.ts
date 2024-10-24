import type { TextProps } from '../../../../../coreTypes'
import type { UiLibProps } from '../buildConstaPropsCommon'
import { buildConstaPropsCommon } from '../buildConstaPropsCommon'
import type { CssCodeStyles } from '../buildCssCodeCommon'
import { buildCssCodeCommon } from '../buildCssCodeCommon'
import { constaPropsAdapterCommon } from '../constaPropsAdapterCommon'
import { propsCssToCodeStyles } from '../propsToCssCode'
import type { GeneratedCode } from '../types'

export type TextStylesBuilder = (componentName: string, props: TextProps) => GeneratedCode

export const textCodeBuilder: TextStylesBuilder = (componentName, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  propsStyles = propsCssToCodeStyles(props.styles)

  // Преобразуем к типу аргумента функции билдера
  const uiLibProps: UiLibProps = constaPropsAdapterCommon(props.uiLibProps)
  delete uiLibProps['content']

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode:
      `<Text ${buildConstaPropsCommon(uiLibProps)}>${props.uiLibProps.content}\n` + '</Text>',
  }

  return builtCode
}

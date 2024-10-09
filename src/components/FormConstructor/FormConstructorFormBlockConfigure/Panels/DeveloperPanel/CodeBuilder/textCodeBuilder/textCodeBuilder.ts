import { TextProps } from '../../../../../coreTypes'
import { buildConstaPropsCommon, UiLibProps } from '../buildConstaPropsCommon'
import { buildCssCodeCommon, CssCodeStyles } from '../buildCssCodeCommon'
import { constaPropsAdapterCommon } from '../constaPropsAdapterCommon'
import { propsCssToCodeStyles } from '../propsToCssCode'
import { GeneratedCode } from '../types'

export type TextStylesBuilder = (componentName: string, props: TextProps) => GeneratedCode

export const textCodeBuilder: TextStylesBuilder = (componentName, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  if (props.styles) {
    propsStyles = propsCssToCodeStyles(props.styles)
  }

  // Преобразуем к типу аргумента функции билдера
  const uiLibProps: UiLibProps = constaPropsAdapterCommon(props.uiLibProps)
  delete uiLibProps['content']

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode:
      `<Text ${buildConstaPropsCommon(uiLibProps)}/>\n` +
      props.uiLibProps.content +
      '\n' +
      '</Text>',
  }

  return builtCode
}

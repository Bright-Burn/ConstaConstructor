import { UiLibProps, buildConstaPropsCommon } from '../buildConstaPropsCommon'
import { CssCodeStyles, buildCssCodeCommon } from '../buildCssCodeCommon'
import { constaPropsAdapterCommon } from '../constaPropsAdapterCommon'
import { propsCssToCodeStyles } from '../propsToCssCode'
import { GeneratedCode } from '../types'
import { LayoutStylesBuilder } from './types'

export const listCodeBuilder: LayoutStylesBuilder = (componentName, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  if (props.styles) {
    propsStyles = propsCssToCodeStyles(props.styles)
  }

  // Преобразуем к типу аргумента функции билдера
  const uiLibProps: UiLibProps = constaPropsAdapterCommon(props.uiLibProps)
  const jsxCode = props.uiLibProps.withListBox
    ? `<ListBox ${uiLibProps.form ? `form={${uiLibProps.form}}` : ''}` +
      `${uiLibProps.shadow ? `shadow={${uiLibProps.shadow}}` : ''}` +
      `${uiLibProps.border ? `border={${uiLibProps.border}}` : ''}>\n` +
      `<Layout \n${buildConstaPropsCommon(uiLibProps)}/>\n</ListBox>`
    : `<Layout \n${buildConstaPropsCommon(uiLibProps)}/>`

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode: jsxCode,
  }

  return builtCode
}

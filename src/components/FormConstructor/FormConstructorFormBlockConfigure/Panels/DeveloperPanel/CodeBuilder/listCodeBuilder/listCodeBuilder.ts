import type { UiLibProps } from '../buildConstaPropsCommon'
import { buildConstaPropsCommon } from '../buildConstaPropsCommon'
import type { CssCodeStyles } from '../buildCssCodeCommon'
import { buildCssCodeCommon } from '../buildCssCodeCommon'
import { constaPropsAdapterCommon } from '../constaPropsAdapterCommon'
import { propsCssToCodeStyles } from '../propsToCssCode'
import type { GeneratedCode } from '../types'

import type { ListStylesBuilder } from './types'

export const buildListCode: ListStylesBuilder = (componentName, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  if (props.styles) {
    propsStyles = propsCssToCodeStyles(props.styles)
  }

  // Преобразуем к типу аргумента функции билдера
  const uiLibProps: UiLibProps = constaPropsAdapterCommon(props.uiLibProps)
  const jsxCode = props.uiLibProps.withListBox
    ? `<ListBox ${uiLibProps.form ? `form={${uiLibProps.form}}` : ''}${uiLibProps.shadow}`
      ? `shadow={${uiLibProps.shadow}}`
      : '' +
        `${uiLibProps.border ? `border={${uiLibProps.border}}` : ''}>\n` +
        `<Layout \n${buildConstaPropsCommon(uiLibProps)}/>\n</ListBox>`
    : `<Layout \n${buildConstaPropsCommon(uiLibProps)}/>`

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentName, propsStyles, props.className || ''),
    jsxCode,
  }

  return builtCode
}

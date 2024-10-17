import type { ConstaIconProps, IconProps } from '../../../../../coreTypes'
import type { UiLibProps } from '../buildConstaPropsCommon'
import { buildConstaPropsCommon } from '../buildConstaPropsCommon'
import type { CssCodeStyles } from '../buildCssCodeCommon'
import { buildCssCodeCommon } from '../buildCssCodeCommon'
import { propsCssToCodeStyles } from '../propsToCssCode'
import type { GeneratedCode } from '../types'

export type IconCodeBuilder = (componentLabel: string, props: IconProps) => GeneratedCode

export const buildIconCode: IconCodeBuilder = (componentLabel, props) => {
  let propsStyles: CssCodeStyles = {}

  // Преобразуем к типу аргумента функции билдера
  propsStyles = propsCssToCodeStyles(props.styles)

  // Преобразуем к типу аргумента функции билдера
  const uiLibProps: UiLibProps = constaPropsAdapterCommon(props.uiLibProps)
  const jsxCode = `<${props.uiLibProps.icons} ${buildConstaPropsCommon(uiLibProps)}/>`

  const builtCode: GeneratedCode = {
    cssCode: buildCssCodeCommon(componentLabel, propsStyles, props.className || ''),
    jsxCode,
  }

  return builtCode
}

const constaPropsAdapterCommon = (props: ConstaIconProps) => {
  const uiLibProps: UiLibProps = {}

  // Преобразуем к типу аргумента функции билдера
  Object.entries(props).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // Если массив, то устанавливаем пустой массив
      uiLibProps[key] = []
    } else if (typeof value === 'object') {
      // Если объект, то устанавливаем пустой объект
      uiLibProps[key] = {}
    } else if (value !== null && value !== undefined && key != 'icons') {
      uiLibProps[key] = value
    }
  })
  return uiLibProps
}

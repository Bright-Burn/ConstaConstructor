import { spacingStyles } from './classNameMapping'

export const getCssFromSpacingStyles = () => {
  let cssCode = ''
  Object.entries(spacingStyles).forEach(([key, value]) => {
    cssCode += `.${key} {\n\t${value}\n}\n`
  })
  return cssCode
}

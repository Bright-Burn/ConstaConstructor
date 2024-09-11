import { LayoutElementPropsStyles, LayoutElementStyles } from '../../../../coreTypes'
import { spacingStyles } from './classNameMapping'
import { BuildedCode, LayoutStylesBuilder } from './types'

/**
 * Строит код выбранного компонента
 * @param props Пропсы(настройки) выбранного компонента
 * @returns Сгенерированный код компонента
 */
export const buildLayoutStyles: LayoutStylesBuilder = props => {
  const buildedCode: BuildedCode = {
    cssCode: buildCssCode(props.styles || null, props.className || null),
    jsxCode: `<Layout \n${buildConstaProps(props)}/>`,
  }

  return buildedCode
}

const buildConstaProps = (obj: LayoutElementPropsStyles): string => {
  const props = obj.constaProps
  let resultString = ''
  for (let key in props) {
    const value = props[key]
    typeof value != 'string'
      ? (resultString += `${key}={${value}}\n`)
      : (resultString += `${key}={'${value}'}\n`)
  }
  return resultString
}

const buildCssCode = (styles: LayoutElementStyles | null, classNames: string | null) => {
  let resultString = ''
  const upperCaseRegex = /[A-Z]/g

  for (let key in styles) {
    const value = styles[key]
    const newKey = key.replace(upperCaseRegex, match => {
      return `-${match.toLocaleLowerCase()}`
    })
    resultString += `${newKey}: ${value}\n`
  }

  classNames?.split(' ').forEach(className => {
    if (className in spacingStyles) {
      resultString += `${spacingStyles[className]}\n`
    }
  })

  return resultString
}

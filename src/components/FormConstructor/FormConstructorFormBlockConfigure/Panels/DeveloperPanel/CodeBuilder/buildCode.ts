import { BuildedCode, CodeBuilder } from './types'

/**
 * Строит код выбранного компонента
 * @param props Пропсы(настройки) выбранного компонента
 * @returns Сгенерированный код компонента
 */
export const buildCode: CodeBuilder = props => {
  const buildedCode: BuildedCode = {
    cssCode: '',
    jsxCode: '',
  }

  return buildedCode
}

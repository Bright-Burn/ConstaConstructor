import type { UnionProps } from '../../../../coreTypes'

import type { CssCodeStyles } from './buildCssCodeCommon'
import { varProperties } from './customPropertiesCommon'
import { isPixelValidString } from './isPixelValidString'

// @ts-expect-error Временное решение, убрать игнор, когда у всех компонентов появится поле styles в кастомных пропсах
export const propsCssToCodeStyles = (props: UnionProps['props']['styles']): CssCodeStyles => {
  const propsStyles: CssCodeStyles = {}

  for (const [key, value] of Object.entries(props)) {
    if (value !== null && value !== undefined) {
      if (varProperties.has(key)) {
        propsStyles[key] = `var(--${value})`
      } else {
        let preparedValue = ''
        if (typeof value === 'string') {
          preparedValue = isPixelValidString(value) ? `${value}px` : value
        }
        propsStyles[key] = preparedValue
      }
    }
  }

  return propsStyles
}

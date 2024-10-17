import type { TextProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { TextProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type TextAdapter = GenericAdapter<TextProps_Deprecated, TextProps>

export const textAdapter: TextAdapter = (id, deprecated) => {
  console.log(`Run Text adapter with id=${id}`)
  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    styles: {
      color: deprecated.style?.color,
    },
    uiLibProps: {
      content: deprecated.content,
      transformText: deprecated.transformText.name,
      align: deprecated.align?.name,
      cursor: deprecated.cursor,
      decoration: deprecated.decoration,
      display: deprecated.display,
      font: deprecated.font,
      fontStyle: deprecated.fontStyle,
      lineHeight: deprecated.lineHeight,
      size: deprecated.size,
      spacing: deprecated.spacing,
      transform: deprecated.transform,
      truncate: deprecated.truncate,
      view: deprecated.view,
      weight: deprecated.weight,
      width: deprecated.width,
    },
  }
}

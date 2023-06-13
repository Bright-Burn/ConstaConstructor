import React, { FC } from 'react'
import { SelectableLayer } from '../../SelectableLayer'

export const CustomTextElement: FC<{ element }> = ({ element }) => {
  const fromProps = element.props

  const { width, height, top, left, text, zIndex } = fromProps

  const style: React.CSSProperties = {
    width,
    height,
    color: '#333',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }

  const parentStyle: React.CSSProperties = { top, left, zIndex, position: 'absolute' }
  return (
    <div style={parentStyle}>
      <SelectableLayer
        parentElementId={element.id}
        elementType={'CustomText'}
        elementTypeUsage={'FormElement'}>
        <span title={text} style={style}>
          {text || 'Пример' + ' текста'}
        </span>
      </SelectableLayer>
    </div>
  )
}

import type { FC } from 'react'
import React from 'react'

import type { IFormElementPrototypeText } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

interface IPrototypeTextElement {
  element: IFormElementPrototypeText
}

export const PrototypeTextElement: FC<IPrototypeTextElement> = ({ element }) => {
  const { width, height, top, left, text, zIndex } = element.props.props

  const style: React.CSSProperties = {
    width,
    height,
    display: 'inline-block',
    color: '#333',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }

  const parentStyle: React.CSSProperties = {
    top,
    left,
    zIndex,
    position: 'absolute',
  }

  return (
    <div style={parentStyle}>
      <SelectableLayer
        parentElementId={element.id}
        elementType="PrototypeTextElement"
        elementTypeUsage="FormElement">
        <span title={text} style={style}>
          {text}
        </span>
      </SelectableLayer>
    </div>
  )
}

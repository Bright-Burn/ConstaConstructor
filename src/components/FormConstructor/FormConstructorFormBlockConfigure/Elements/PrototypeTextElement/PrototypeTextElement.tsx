import React, { FC } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { IFormElement } from '../../../store/formElements'

interface IPrototypeTextElement {
  element: IFormElement
}

export const PrototypeTextElement: FC<IPrototypeTextElement> = ({ element }) => {
  if ('zIndex' in element.props) {
    const { width, height, top, left, text, zIndex } = element.props

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
          elementType={'PrototypeTextElement'}
          elementTypeUsage={'FormElement'}>
          <span title={text} style={style}>
            {text}
          </span>
        </SelectableLayer>
      </div>
    )
  }
  
  console.error('Слышишь, осел дырявый, ты в очко долбишься?')
  
  return null
}

import React, { FC } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { FormGroupsTypes, IFormElement } from '../../../store/formElements'
import { PrototypeTextProps } from './types'
import { FormElementProps } from '../../../store/formElements/types'

interface IPrototypeTextElement {
  element: IFormElement
}

export const PrototypeTextElement: FC<IPrototypeTextElement> = ({ element }) => {
  const fromProps = element.props
  
  const { width, height, top, left, text, zIndex } = fromProps as PrototypeTextProps

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
        elementType={'PrototypeTextElement'}
        elementTypeUsage={'FormElement'}>
        <span title={text} style={style}>
          {text || 'Пример' + ' текста'}
        </span>
      </SelectableLayer>
    </div>
  )
}

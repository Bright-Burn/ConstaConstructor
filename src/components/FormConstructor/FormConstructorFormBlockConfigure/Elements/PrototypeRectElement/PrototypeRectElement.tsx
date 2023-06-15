import React, { FC } from 'react'
import { IFormElement } from '../../../store/formElements'
import { SelectableLayer } from '../../SelectableLayer'
import { PrototypeProps } from '../../Panels/Settings/PrototypeSettings/types'

interface IPrototypeRectElement {
  element: IFormElement
}

export const PrototypeRectElement: FC<IPrototypeRectElement> = ({ element }) => {
  if (element.props instanceof PrototypeProps) {
    const { width, height, top, left, zIndex } = element.props
    return (
      <div style={{ top, left, position: 'absolute' }}>
        <SelectableLayer
          parentElementId={element.id}
          elementType={'PrototypeRectElement'}
          elementTypeUsage={'FormElement'}>
          <div
            style={{ width, height, zIndex, background: '#ccc', }}></div>
        </SelectableLayer>
      </div>
    )
  }

  console.error('Брат, все не то, все не так. Проверь пропсы, которые пытаешься мне передать!')
  
  return null
}

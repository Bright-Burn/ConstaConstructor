import type { FC } from 'react'

import type { IFormElementPrototype } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

interface IPrototypeRectangleElement {
  element: IFormElementPrototype
}

export const PrototypeRectangleElement: FC<IPrototypeRectangleElement> = ({ element }) => {
  const { width, height, top, left, zIndex } = element.props
  return (
    <div style={{ top, left, position: 'absolute' }}>
      <SelectableLayer
        parentElementId={element.id}
        elementType="PrototypeRectangleElement"
        elementTypeUsage="FormElement">
        <div style={{ width, height, zIndex, background: '#ccc' }} />
      </SelectableLayer>
    </div>
  )
}

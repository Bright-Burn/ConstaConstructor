import { FC } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { IFormElementPrototype } from '../../../coreTypes/prototypeTypes'

interface IPrototypeRectElement {
  element: IFormElementPrototype
}

export const PrototypeRectElement: FC<IPrototypeRectElement> = ({ element }) => {
  console.log(element)
  const { width, height, top, left, zIndex } = element.props
  return (
    <div style={{ top, left, position: 'absolute' }}>
      <SelectableLayer
        parentElementId={element.id}
        elementType={'PrototypeRectElement'}
        elementTypeUsage={'FormElement'}
      >
        <div style={{ width, height, zIndex, background: '#ccc' }}></div>
      </SelectableLayer>
    </div>
  )
}

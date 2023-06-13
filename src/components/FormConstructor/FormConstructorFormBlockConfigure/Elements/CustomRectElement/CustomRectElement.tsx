import React, { FC } from 'react'
import { CustomRectElementProps } from './types'
import { SelectableLayer } from '../../SelectableLayer'
import { IFormElement } from '../../../store/formElements'

export const CustomRectElement: FC<{ element: IFormElement }> = ({ element }) => {
  const fromProps = element.props as CustomRectElementProps

  const { width, height, top, right, bottom, left } = fromProps

  return (
    <div style={{ top, right, bottom, left, position: 'absolute' }}>
      <SelectableLayer
        parentElementId={element.id}
        elementType={'CustomRect'}
        elementTypeUsage={'FormElement'}>
        <div
          className='CustomRectElement'
          data-testid='CustomRectElement'
          style={{ width, height, background: '#ccc' }}></div>
      </SelectableLayer>
    </div>
  )
}

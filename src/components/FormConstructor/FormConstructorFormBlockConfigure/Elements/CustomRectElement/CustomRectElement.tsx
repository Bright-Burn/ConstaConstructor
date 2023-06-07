import React, { FC, useEffect, useState } from 'react'
import { CustomRectElementProps, IRectParams, IRectStyles } from './types'
import { SelectableLayer } from '../../SelectableLayer'
import { IFormElement } from '../../../store/formElements'

export const CustomRectElement: FC<{ element: IFormElement }> = ({ element }) => {
  const fromProps = element.props as CustomRectElementProps

  const [style, setStyle] = useState<IRectStyles & IRectParams>()

  useEffect(() => {
    setStyle({ ...fromProps, display: 'block', background: 'grey' })
  }, [fromProps])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementType={'CustomRect'}
      elementTypeUsage={'FormElement'}>
      <div className='CustomRectElement' data-testid='CustomRectElement' style={style}></div>
    </SelectableLayer>
  )
}

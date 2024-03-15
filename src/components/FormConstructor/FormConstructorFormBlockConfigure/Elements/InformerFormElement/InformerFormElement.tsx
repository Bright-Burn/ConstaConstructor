import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Informer } from '@consta/uikit/Informer'

import type { InformerElementProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'

import type { IInformerFormElement } from './types'

export const InformerFormElement: FC<IInformerFormElement> = ({ element }) => {
  const [informerProps, setInformerProps] = useState<InformerElementProps>()

  useLayoutEffect(() => {
    const informerFormElement = element
    setInformerProps(informerFormElement.props.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Informer}>
      <Informer {...informerProps} />
    </SelectableLayer>
  )
}

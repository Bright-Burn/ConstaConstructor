import { FC, useLayoutEffect, useState } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { IInformerFormElement } from './types'
import {
  IFormElementInformer,
  InformerElementProps,
  ElementTypes,
  FormElementTypes,
} from '../../../coreTypes'
import { Informer } from '@consta/uikit/Informer'

export const InformerFormElement: FC<IInformerFormElement> = ({ element }) => {
  const [informerProps, setInformerProps] = useState<InformerElementProps>()

  useLayoutEffect(() => {
    const informerFormElement = element as IFormElementInformer
    setInformerProps(informerFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Informer}
    >
      <Informer {...informerProps} />
    </SelectableLayer>
  )
}

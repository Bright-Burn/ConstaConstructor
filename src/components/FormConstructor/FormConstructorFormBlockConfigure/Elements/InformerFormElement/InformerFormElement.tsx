import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IInformerFormElement } from './types'
import { IFormElementInformer, InformerElementProps } from '../../../store/formElements'
import { Informer } from '@consta/uikit/Informer'

export const InformerFormElement: FC<IInformerFormElement> = ({ formElement }) => {
  const [informerProps, setInformerProps] = useState<InformerElementProps | undefined>()

  useLayoutEffect(() => {
    const informerFormElement = formElement as IFormElementInformer
    setInformerProps(informerFormElement.props)
  }, [formElement])

  return (
    <SelectableLayer
      parentElementId={formElement.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Informer}
    >
      <Informer {...informerProps} />
    </SelectableLayer>
  )
}

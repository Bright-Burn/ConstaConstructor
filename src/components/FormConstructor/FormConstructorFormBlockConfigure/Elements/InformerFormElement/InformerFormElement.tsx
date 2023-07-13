import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IInformerFormElement } from './types'
import { IFormElementInformer, InformerElementProps } from '../../../store/formElements'
import { Informer } from '@consta/uikit/Informer'
import { Icons } from '../IconFormElement/mocks'

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
      elementType={FormElementTypes.Informer}>
      <Informer
        {...informerProps}
        icon={informerProps?.iconActive && informerProps.icon && Icons[informerProps.icon]}
      />
    </SelectableLayer>
  )
}

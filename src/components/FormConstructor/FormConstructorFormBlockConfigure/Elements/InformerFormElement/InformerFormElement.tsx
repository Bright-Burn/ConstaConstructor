import type { FC } from 'react'
import { Informer } from '@consta/uikit/Informer'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IInformerFormElement } from './types'

export const InformerFormElement: FC<IInformerFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Informer}>
      <Informer {...props} />
    </SelectableLayer>
  )
}

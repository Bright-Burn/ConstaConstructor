import { FC, useLayoutEffect, useState } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { IInformerFormElement } from './types'
import { InformerElementProps, ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { Informer } from '@consta/uikit/Informer'
import { DroppableLocalLayer } from '../../DroppableLocalLayer'
import { rootId } from '../../../store/formElements/initialState'

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
      <DroppableLocalLayer isLayout={false} parentElementId={element.parentId || rootId}>
        <Informer {...informerProps} />
      </DroppableLocalLayer>
    </SelectableLayer>
  )
}

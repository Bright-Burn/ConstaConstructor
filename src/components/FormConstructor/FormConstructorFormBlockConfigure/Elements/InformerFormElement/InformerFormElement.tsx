import type { FC } from 'react'
import { Informer } from '@consta/uikit/Informer'

import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IInformerFormElement } from './types'

export const InformerFormElement: FC<IInformerFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const informerUiLibProps = props?.uiLibProps
  const className = props?.className

  if (!informerUiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Informer}>
      <Informer
        label={informerUiLibProps.label}
        title={informerUiLibProps.title}
        view={informerUiLibProps.view}
        size={informerUiLibProps.size}
        status={informerUiLibProps.status}
        className={className}
        icon={informerUiLibProps.icon ? Icons[informerUiLibProps.icon] : undefined}
      />
    </SelectableLayer>
  )
}

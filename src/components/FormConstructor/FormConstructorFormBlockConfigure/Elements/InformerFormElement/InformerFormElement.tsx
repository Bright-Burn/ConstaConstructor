import type { FC } from 'react'
import { Informer } from '@consta/uikit/Informer'

import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IInformerFormElement } from './types'

export const InformerFormElement: FC<IInformerFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const uiLibProps = props?.uiLibProps
  const className = props?.className

  if (!uiLibProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.Informer}>
      <Informer
        label={uiLibProps.label}
        title={uiLibProps.title}
        view={uiLibProps.view}
        size={uiLibProps.size}
        status={uiLibProps.status}
        className={className}
        icon={uiLibProps.icon ? Icons[uiLibProps.icon] : undefined}
      />
    </SelectableLayer>
  )
}

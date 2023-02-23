import { Layout } from '@consta/uikit/Layout'
import { FC } from 'react'
import { ElementTypes } from '../../../store/formElements/types'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayer } from '../../SelectableLayer'
import { ILayoutFormElement } from './types'

export const LayoutFromElement: FC<ILayoutFormElement> = ({ layoutElement }) => {
  return (
    <Layout flex={1}>
      <SelectableLayer parentElementId={layoutElement.id} type={ElementTypes.Layout}>
        <DroppableLayer parentElementId={layoutElement.id} />
      </SelectableLayer>
    </Layout>
  )
}

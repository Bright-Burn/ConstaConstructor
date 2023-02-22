import { Layout } from '@consta/uikit/Layout'
import { FC } from 'react'
import { DroppableLayer } from '../../DroppableLayer'
import { ILayoutFormElement } from './types'

export const LayoutFromElement: FC<ILayoutFormElement> = ({ layoutElement }) => {
  /// backround временно
  return (
    <Layout flex={1} style={{ background: 'rgb(144,144,144)' }}>
      <DroppableLayer parentElementId={layoutElement.id} />
    </Layout>
  )
}

import { Layout } from '@consta/uikit/Layout'
import { FC, useLayoutEffect, useState } from 'react'
import {
  ElementTypes,
  ILayoutElementWithProps,
  LayoutElementProps,
} from '../../../store/formElements/types'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayer } from '../../SelectableLayer'
import { ILayoutFormElement } from './types'

export const LayoutFromElement: FC<ILayoutFormElement> = ({ layoutElement }) => {
  const [layoutProps, setLayoutProps] = useState<LayoutElementProps | undefined>()

  useLayoutEffect(() => {
    const layoutElementWithProps = layoutElement as ILayoutElementWithProps
    setLayoutProps(layoutElementWithProps.props)
  }, [layoutElement])

  return (
    <Layout {...layoutProps}>
      <SelectableLayer parentElementId={layoutElement.id} elementType={ElementTypes.Layout}>
        <DroppableLayer parentElementId={layoutElement.id} />
      </SelectableLayer>
    </Layout>
  )
}

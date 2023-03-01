import { Layout } from '@consta/uikit/Layout'
import { FC, useLayoutEffect, useState } from 'react'
import { LayoutElementPropsStyles, useAppSelector } from '../../../store/formElements'
import { ElementTypes, FormGroupsTypes, ILayoutElement } from '../../../store/formElements/types'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayer } from '../../SelectableLayer'
import { ILayoutFormElement } from './types'

export const LayoutFromElement: FC<ILayoutFormElement> = ({ layoutElement }) => {
  const [layoutProps, setLayoutProps] = useState<LayoutElementPropsStyles | undefined>()
  const { isGridVisible } = useAppSelector(state => state.formConstructor)

  useLayoutEffect(() => {
    const layoutElementWithProps = layoutElement as ILayoutElement
    setLayoutProps(layoutElementWithProps.props)
  }, [layoutElement])

  return (
    <Layout
      className={`${isGridVisible ? 'dottedCard' : ''}`}
      {...layoutProps?.constaProps}
      style={{ ...layoutProps?.styles }}
    >
      <SelectableLayer
        parentElementId={layoutElement.id}
        elementType={FormGroupsTypes.LayoutInner}
        elementTypeUsage={ElementTypes.FormGroups}
      >
        <DroppableLayer parentElementId={layoutElement.id} />
      </SelectableLayer>
    </Layout>
  )
}

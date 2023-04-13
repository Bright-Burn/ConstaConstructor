import { Layout } from '@consta/uikit/Layout'
import { FC, useLayoutEffect, useState } from 'react'
import { LayoutElementPropsStyles, useAppSelector } from '../../../store/formElements'
import { ElementTypes, FormGroupsTypes, ILayoutElement } from '../../../store/formElements/types'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayer } from '../../SelectableLayer'
import { ILayoutFormElement } from './types'

export const LayoutFormElement: FC<ILayoutFormElement> = ({ element }) => {
  const [layoutProps, setLayoutProps] = useState<LayoutElementPropsStyles>()
  const { isGridVisible } = useAppSelector(state => state.formConstructor)

  useLayoutEffect(() => {
    const layoutElementWithProps = element as ILayoutElement
    setLayoutProps(layoutElementWithProps.props)
  }, [element])

  return (
    <Layout
      className={`${isGridVisible ? 'dottedCard' : ''} ${layoutProps?.className}`}
      {...layoutProps?.constaProps}
      style={{ ...layoutProps?.styles }}
    >
      <SelectableLayer
        parentElementId={element.id}
        elementType={FormGroupsTypes.Layout}
        elementTypeUsage={ElementTypes.FormGroups}
      >
        <DroppableLayer parentElementId={element.id} />
      </SelectableLayer>
    </Layout>
  )
}

import { Layout } from '@consta/uikit/Layout'
import { FC, useLayoutEffect, useState } from 'react'

import {
  ElementTypes,
  FormGroupsTypes,
  ILayoutElement,
  LayoutElementPropsStyles,
  LayoutElementStyles,
} from '../../../coreTypes'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayer } from '../../SelectableLayer'
import { ILayoutFormElement } from './types'
import style from './styles.module.css'
import { checkIsGridVisible, useAppSelector } from '../../../store'

export const LayoutFormElement: FC<ILayoutFormElement> = ({ element }) => {
  const [layoutProps, setLayoutProps] = useState<LayoutElementPropsStyles>()
  const isGridVisible = useAppSelector(checkIsGridVisible)

  useLayoutEffect(() => {
    const layoutElementWithProps = element as ILayoutElement
    setLayoutProps(layoutElementWithProps.props)
  }, [element])

  const ActiveSide = ({
    borderColor,
    borderSide,
    borderStyle,
    borderWidth,
  }: LayoutElementStyles) => {
    const sideCss = {
      [`${borderSide}Width`]: borderWidth,
      [`${borderSide}Style`]: borderStyle,
      [`${borderSide}Color`]: borderColor,
      borderWidth: '',
      borderStyle: '',
      borderColor: '',
    }
    return sideCss
  }

  const activeSide = layoutProps?.styles?.borderSide && ActiveSide(layoutProps.styles)

  return (
    <Layout
      className={`${isGridVisible ? style.gridLayout : ''} ${layoutProps?.className}`}
      {...layoutProps?.constaProps}
      style={{
        ...layoutProps?.styles,
        ...activeSide,
        backgroundColor: `var(--${layoutProps?.styles?.backgroundColor})`,
        overflow: 'hidden',
      }}
    >
      <SelectableLayer
        parentElementId={element.id}
        elementType={FormGroupsTypes.Layout}
        elementTypeUsage={ElementTypes.FormGroups}
      >
        <DroppableLayer parentElementId={element.id} outerParentId={element.parentId} />
      </SelectableLayer>
    </Layout>
  )
}

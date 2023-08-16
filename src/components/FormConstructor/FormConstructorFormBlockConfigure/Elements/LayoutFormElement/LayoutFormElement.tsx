import { Layout } from '@consta/uikit/Layout'
import { FC, useLayoutEffect, useState } from 'react'

import {
  ElementTypes,
  FormGroupsDictTypes,
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
    const layoutElementWithProps = element
    setLayoutProps(layoutElementWithProps.props.props)
  }, [element])

  const ActiveSide = ({
    borderColor,
    borderSide,
    borderStyle,
    borderWidth,
  }: LayoutElementStyles) => {
    const sideCss = {
      [`${borderSide?.name}Width`]: borderWidth,
      [`${borderSide?.name}Style`]: borderStyle?.name,
      [`${borderSide?.name}Color`]: borderColor,
      borderWidth: '',
      borderStyle: '',
      borderColor: '',
    }
    if (borderSide?.name === ' ') {
      return undefined
    }
    return sideCss
  }

  let activeSide = layoutProps?.styles?.borderSide && ActiveSide(layoutProps.styles)

  !isGridVisible && (activeSide = undefined)

  return (
    <Layout
      className={`${isGridVisible ? style.gridLayout : ''} ${layoutProps?.className}`}
      {...layoutProps?.constaProps}
      style={{
        ...layoutProps?.styles,
        backgroundColor: `var(--${layoutProps?.styles?.backgroundColor})`,
        borderColor: `var(--${layoutProps?.styles?.borderColor})`,
        overflow: 'hidden',
        transition: 'none',
        borderStyle: layoutProps?.styles?.borderStyle?.name,
        justifyContent: layoutProps?.styles?.justifyContent?.name,
        alignItems: layoutProps?.styles?.alignItems?.name,
        ...activeSide,
      }}
      direction={layoutProps?.constaProps.direction?.name}>
      <SelectableLayer
        parentElementId={element.id}
        elementType={FormGroupsDictTypes.Layout}
        elementTypeUsage={ElementTypes.FormGroups}>
        <DroppableLayer parentElementId={element.id} outerParentId={element.parentId} />
      </SelectableLayer>
    </Layout>
  )
}

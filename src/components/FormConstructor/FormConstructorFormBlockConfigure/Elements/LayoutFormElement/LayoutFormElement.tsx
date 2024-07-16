import type { FC } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Layout } from '@consta/uikit/Layout'

import type { LayoutElementPropsStyles, LayoutElementStyles } from '../../../coreTypes'
import { ElementTypes, FormGroupsDictTypes } from '../../../coreTypes'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayer } from '../../SelectableLayer'

import type { ILayoutFormElement } from './types'

export const LayoutFormElement: FC<ILayoutFormElement> = ({ element }) => {
  const [layoutProps, setLayoutProps] = useState<LayoutElementPropsStyles>()

  useLayoutEffect(() => {
    const layoutElementWithProps = element
    setLayoutProps(layoutElementWithProps.props.props)
  }, [element])

  const style = getStyles(layoutProps?.styles)
  return (
    <Layout className={layoutProps?.className} {...layoutProps?.constaProps} style={style}>
      <SelectableLayer
        parentElementId={element.id}
        elementType={FormGroupsDictTypes.Layout}
        elementTypeUsage={ElementTypes.FormGroups}>
        <DroppableLayer parentElementId={element.id} outerParentId={element.parentId} />
      </SelectableLayer>
    </Layout>
  )
}

const getStyles = (styles: LayoutElementStyles | undefined) => {
  const style = {
    maxWidth: styles?.maxWidth,
    minWidth: styles?.minWidth,
    maxHeight: styles?.maxHeight,
    minHeight: styles?.minHeight,
    justifyContent: styles?.justifyContent,
    flexWrap: styles?.flexWrap,
    alignItems: styles?.alignItems,
    borderSide: styles?.borderSide,
    backgroundColor: `var(--${styles?.backgroundColor})`,
    overflowX: styles?.overflowX,
    overflowY: styles?.overflowY,
    width: styles?.overflowX === 'scroll' ? 0 : 'auto',
    transition: 'none',
    borderTopWidth: `${styles?.borderTopWidth ?? 0}px`,
    borderRightWidth: `${styles?.borderRightWidth ?? 0}px`,
    borderBottomWidth: `${styles?.borderBottomWidth ?? 0}px`,
    borderLeftWidth: `${styles?.borderLeftWidth ?? 0}px`,
    borderColor: `var(--${styles?.borderColor})`,
    borderStyle: styles?.borderStyle,
    borderTopLeftRadius: `${styles?.borderTopLeftRadius}px`,
    borderTopRightRadius: `${styles?.borderTopRightRadius}px`,
    borderBottomLeftRadius: `${styles?.borderBottomLeftRadius}px`,
    borderBottomRightRadius: `${styles?.borderBottomRightRadius}px`,
    transform: `rotateZ(${styles?.transform ?? 0}deg)`,
  }
  return style
}

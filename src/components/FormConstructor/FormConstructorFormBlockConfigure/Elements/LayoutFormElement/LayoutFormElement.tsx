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
  const activeSide = styles?.borderSide && getActiveBorder(styles)
  const style = {
    maxWidth: styles?.maxWidth,
    minWidth: styles?.minWidth,
    maxHeight: styles?.maxHeight,
    minHeight: styles?.minHeight,
    justifyContent: styles?.justifyContent,
    alignItems: styles?.alignItems,
    borderSide: styles?.borderSide,
    backgroundColor: `var(--${styles?.backgroundColor})`,
    overflow: 'hidden',
    transition: 'none',
    ...activeSide,
  }
  return style
}
const getActiveBorder = ({
  borderColor,
  borderSide,
  borderStyle,
  borderWidth,
}: LayoutElementStyles) => {
  const sideCss = {
    [`${borderSide}Width`]: borderWidth,
    [`${borderSide}Style`]: borderStyle,
    [`${borderSide}Color`]: `var(--${borderColor})`,
  }
  if (borderSide === 'borderAll') {
    return {
      borderWidth,
      borderStyle,
      borderColor: `var(--${borderColor})`,
    }
  }
  return sideCss
}

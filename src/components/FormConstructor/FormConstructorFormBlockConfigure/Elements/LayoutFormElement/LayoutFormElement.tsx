import type { FC } from 'react'
import { Layout } from '@consta/uikit/Layout'

import type { LayoutElementStyles } from '../../../coreTypes'
import { ElementTypes, FormGroupsDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayer } from '../../SelectableLayer'

import type { ILayoutFormElement } from './types'

export const LayoutFormElement: FC<ILayoutFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const style = getStyles(props?.styles)
  return (
    <Layout className={props?.className} {...props?.uiLibProps} style={style}>
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
    flexBasis: 0,
    alignItems: styles?.alignItems,
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

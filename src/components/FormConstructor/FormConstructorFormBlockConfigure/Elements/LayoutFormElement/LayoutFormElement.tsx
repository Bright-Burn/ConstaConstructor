import { Layout } from '@consta/uikit/Layout'
import { FC, useLayoutEffect, useState } from 'react'
import {
  LayoutElementPropsStyles,
  LayoutElementStyles,
  useAppSelector,
} from '../../../store/formElements'
import { ElementTypes, FormGroupsTypes, ILayoutElement } from '../../../store/formElements/types'
import { DroppableLayer } from '../../DroppableLayer'
import { SelectableLayer } from '../../SelectableLayer'
import { ILayoutFormElement } from './types'
import style from './styles.module.css'

export const LayoutFormElement: FC<ILayoutFormElement> = ({ element }) => {
  const [layoutProps, setLayoutProps] = useState<LayoutElementPropsStyles>()
  const { isGridVisible } = useAppSelector(state => state.formConstructor)

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
        borderColor: `var(--${layoutProps?.styles?.borderColor})`,
        backgroundColor: `var(--${layoutProps?.styles?.backgroundColor})`,
        overflow: 'hidden',
      }}>
      <SelectableLayer
        className={layoutProps?.styles?.borderRadius && `${style.borderRadiusEmpty}`}
        parentElementId={element.id}
        elementType={FormGroupsTypes.Layout}
        elementTypeUsage={ElementTypes.FormGroups}>
        <DroppableLayer parentElementId={element.id} />
      </SelectableLayer>
    </Layout>
  )
}

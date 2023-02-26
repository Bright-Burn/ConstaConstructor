import { Layout } from '@consta/uikit/Layout'
import { FC, useLayoutEffect, useState } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../../store/formElements'
import {
  FormGroupsTypes,
  ILayoutElement,
  LayoutElementProps,
} from '../../../store/formElements/types'
import { DroppableLayer } from '../../DroppableLayer'
import styles from './styles.module.css'
import { ILayoutFormElement } from './types'

export const LayoutFromElement: FC<ILayoutFormElement> = ({ layoutElement }) => {
  const [layoutProps, setLayoutProps] = useState<LayoutElementProps | undefined>()

  const [isSelected, setIsSelected] = useState<boolean>(false)
  const { selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    if (selectedElement?.elementId === layoutElement.id) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedElement, layoutElement])

  const onClickElement = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    event.preventDefault()

    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementId: layoutElement.id,
        elementType: FormGroupsTypes.Layout,
      }),
    )
  }

  useLayoutEffect(() => {
    const layoutElementWithProps = layoutElement as ILayoutElement
    setLayoutProps(layoutElementWithProps.props)
  }, [layoutElement])

  return (
    <Layout
      {...layoutProps}
      onClick={onClickElement}
      className={`${isSelected ? styles.selectedElement : ''}`}
    >
      <DroppableLayer parentElementId={layoutElement.id} />
    </Layout>
  )
}

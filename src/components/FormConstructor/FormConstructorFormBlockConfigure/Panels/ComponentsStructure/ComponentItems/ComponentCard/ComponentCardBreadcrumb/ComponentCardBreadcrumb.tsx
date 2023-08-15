import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { IFormElementBreadcrumbs } from './types'
import { pagesSubMenu } from '../../../../../Elements/BreadcrumbsFormElement/mocks'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import BreadcrumbsImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/BreadcrumbsImage'
import styles from '../styles.module.css'

export const ComponentCardBreadcrumb: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newBreadcrumb: IFormElementBreadcrumbs = {
      id: uuid(),
      type: FormElementDictTypes.BreadcrumbsForm,
      props: {
        props: {
          items: pagesSubMenu,
          size: 'm',
          fitMode: 'dropdown',
          className: '',
          baseProps: {},
        },
        type: 'BreadcrumbsFormElement',
      },
    }
    dispatch(setDraggableElement({ element: newBreadcrumb }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <BreadcrumbsImage />
    </div>
  )
}

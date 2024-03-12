import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormGroupsDictTypes, ILayoutElement } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import styles from './styles.module.css'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'

export const ComponentCardLayout: FC<IComponetCardElement> = ({ name, isOuter }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const layoutElement: ILayoutElement = {
      id: uuid(),
      type: FormGroupsDictTypes.Layout,
      isOuter: isOuter || false,
      props: {
        props: {
          constaProps: {
            flex: 1,
            direction: 'row',
            horizontalAlign: 'left',
            verticalAlign: 'top',
          },
          styles: {
            alignItems: 'normal',
            justifyContent: 'start',
            borderSide: 'borderAll',
            borderStyle: 'hidden',
            borderWidth: 'thin',
          },
          className: '',
          baseProps: {},
        },
        type: 'Layout',
      },
    }
    dispatch(setDraggableElement({ element: layoutElement }))
  }

  return (
    <div className={styles.cardLayout} draggable={true} onDragStart={onStartDragComponentCard}>
      <div className={styles.layerOut}>
        <Text className={styles.marginText}>{name}</Text>
        <div className={styles.borderFlex}>
          <div className={isOuter ? styles.borderOut : styles.borderIn}>
            {!isOuter && <div className={styles.borderInIn}></div>}
          </div>
          {isOuter && <div className={styles.borderOut}></div>}
        </div>
      </div>
    </div>
  )
}

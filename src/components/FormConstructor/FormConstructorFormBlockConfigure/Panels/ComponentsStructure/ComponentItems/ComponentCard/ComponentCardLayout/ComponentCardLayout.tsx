import type { FC } from 'react'
import uuid from 'react-uuid'

import type { ILayoutElement } from '../../../../../../coreTypes'
import { FormGroupsDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

import styles from './styles.module.css'

export const ComponentCardLayout: FC<IComponetCardElement> = ({ name, isOuter }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const layoutElement: ILayoutElement = {
      id: uuid(),
      type: FormGroupsDictTypes.Layout,
      isOuter: isOuter || false,
      order: 1,
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
        <CardLabel label={name} />
        <div className={styles.borderFlex}>
          <div className={isOuter ? styles.borderOut : styles.borderIn}>
            {!isOuter && <div className={styles.borderInIn} />}
          </div>
          {!!isOuter && <div className={styles.borderOut} />}
        </div>
      </div>
    </div>
  )
}

import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormGroupsTypes,
  ICardElement,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IconDraggable } from '@consta/icons/IconDraggable'
import { IconQuestion } from '@consta/icons/IconQuestion'
import styles from './styles.module.css'

export const ComponentCardInnerCard: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCard: ICardElement = {
      id: uuid(),
      type: FormGroupsTypes.Card,
      isOuter: false,
      props: {
        constaProps: {
          verticalSpace: 'm',
          horizontalSpace: 'm',
          status: undefined,
          form: 'square',
        },
        baseProps: {},
        className: '',
        styles: {
          width: '376px',
          height: '227px',
        },
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newCard }))
  }

  return (
    <div className={`${styles.cardInner}`} draggable={true} onDragStart={onStartDragComponentCard}>
      <IconDraggable size='xs' className={`${styles.cardIconDraggable}`} />
      <Text>{name}</Text>
      <IconQuestion size='xs' className={`${styles.cardIconQuest}`} />
    </div>
  )
}

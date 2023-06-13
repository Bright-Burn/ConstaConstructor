import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  IFormElementButton,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IconDraggable } from '@consta/icons/IconDraggable'
import { IconQuestion } from '@consta/icons/IconQuestion'
import styles from './styles.module.css'

export const ComponentCardButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newButton: IFormElementButton = {
      id: uuid(),
      type: FormElementTypes.Button,
      props: {
        disabled: true,
        label: 'Кнопка',
        view: 'primary',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newButton }))
  }

  return (
    <div className={`${styles.cardButton}`} draggable={true} onDragStart={onStartDragComponentCard}>
      <IconDraggable size='xs' className={`${styles.cardIconDraggable}`} />
      <Text>{name}</Text>
      <IconQuestion size='xs' className={`${styles.cardIconQuest}`} />
    </div>
  )
}

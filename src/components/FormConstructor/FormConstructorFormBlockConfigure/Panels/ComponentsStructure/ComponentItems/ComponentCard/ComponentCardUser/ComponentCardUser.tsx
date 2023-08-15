import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch, setDraggableElement } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import { IFormElementUser, FormElementDictTypes } from '../../../../../../coreTypes'
import UserImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/UserImage'
import styles from '../styles.module.css'

export const ComponentCardUser: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newUser: IFormElementUser = {
      id: uuid(),
      type: FormElementDictTypes.User,
      props: {
        props: {
          view: 'clear',
          width: 'default',
          size: 'm',
          status: undefined,
          name: 'Имя Фамилия',
          info: 'Сегодня на Почтамтской',
          className: '',
          baseProps: {},
        },
        type: 'User',
      },
    }
    dispatch(setDraggableElement({ element: newUser }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <UserImage />
    </div>
  )
}

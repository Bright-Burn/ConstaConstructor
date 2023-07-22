import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, useAppDispatch } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementUser } from '../../../../../../store/formElements/userTypes'
import { setDraggableElement } from '../../../../../../store'

export const ComponentCardUser: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newUser: IFormElementUser = {
      id: uuid(),
      type: FormElementTypes.User,
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
    }
    dispatch(setDraggableElement({ element: newUser }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

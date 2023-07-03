import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementUser } from '../../../../../../store/formElements/userTypes'

export const ComponentCardUser: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

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
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newUser }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

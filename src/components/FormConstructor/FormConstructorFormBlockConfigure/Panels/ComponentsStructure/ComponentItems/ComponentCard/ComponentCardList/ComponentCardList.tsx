import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  useAppSelector,
} from '../../../../../../store/formElements'
import { IFormElementList } from '../../../../../../store/formElements/ListTypes'
import { IComponetCardElement } from '../types'

export const ComponentCardList: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = useAppSelector(state => state.formConstructor.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      {
        label: 'Первый — этот вариант не выбрать',
        id: 1,
        disabled: false,
      },
      {
        label: 'Второй',
        id: 2,
        disabled: false,
      },
      {
        label: 'Третий — и этот тоже не выбрать',
        id: 3,
        disabled: false,
      },
    ]
    const newList: IFormElementList = {
      id: uuid(),
      type: FormElementTypes.List,
      page: activePage?.name,
      props: {
        size: 's',
        innerOffset: 'normal',
        className: '',
        baseProps: {},
        items: items,
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newList }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  useAppSelector,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementComboBox } from '../../../../../../store/formElements/comboBoxTypes'

export const ComponentCardComboBox: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = useAppSelector(state => state.formConstructor.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      {
        label: 'Первый',
        id: 1,
      },
      {
        label: 'Второй',
        id: 2,
      },
      {
        label: 'Третий',
        id: 3,
      },
    ]
    const newTabs: IFormElementComboBox = {
      id: uuid(),
      type: FormElementTypes.ComboBox,
      page: activePage?.name,
      props: {
        size: 'm',
        placeholder: 'placeholder',
        caption: 'Хорошо подумайте, это важно',
        label: 'Здесь можно выбрать цвет',
        view: 'default',
        className: '',
        baseProps: {},
        items: items,
        onChange: () => {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newTabs }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

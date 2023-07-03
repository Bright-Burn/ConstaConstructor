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
import { IFormElementRadioButton } from '../../../../../../store/formElements/radioButtonTypes'

export const ComponentCardRadioButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = useAppSelector(state => state.formConstructor.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newRadioButton: IFormElementRadioButton = {
      id: uuid(),
      type: FormElementTypes.RadioButton,
      page: activePage?.name,
      props: {
        size: 'm',
        view: 'primary',
        align: 'center',
        label: 'Это радиокнопка',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newRadioButton }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

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
import { usePagesSelector } from '../../../../../../store/pagesOfLayout'

export const ComponentCardButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newButton: IFormElementButton = {
      id: uuid(),
      type: FormElementTypes.Button,
      page: activePage?.name,
      props: {
        action: 'none',
        disabled: false,
        label: 'Кнопка',
        view: 'primary',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newButton }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

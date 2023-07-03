import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  IFormElementBadge,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { usePagesSelector } from '../../../../../../store/pagesOfLayout'

export const ComponentCardBadge: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newBadge: IFormElementBadge = {
      id: uuid(),
      type: FormElementTypes.Badge,
      page: activePage?.name,
      props: {
        label: 'Badge',
        form: 'default',
        size: 's',
        status: 'success',
        view: 'filled',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newBadge }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

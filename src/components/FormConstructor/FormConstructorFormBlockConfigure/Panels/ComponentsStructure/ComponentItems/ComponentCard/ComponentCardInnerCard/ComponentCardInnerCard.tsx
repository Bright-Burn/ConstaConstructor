import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormGroupsTypes,
  ICardElement,
  useAppSelector,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'

export const ComponentCardInnerCard: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = useAppSelector(state => state.formConstructor.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCard: ICardElement = {
      id: uuid(),
      type: FormGroupsTypes.Card,
      page: activePage?.name,
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
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

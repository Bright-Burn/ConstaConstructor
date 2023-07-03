import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormGroupsTypes,
  ICardElement,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { usePagesSelector } from '../../../../../../store/pagesOfLayout'

export const ComponentCardInnerCard: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

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

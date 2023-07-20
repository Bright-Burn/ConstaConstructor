import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import {
  FormGroupsTypes,
  ICardElement,
  useAppDispatch,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import {
  setDraggableElement
} from '../../../../../../store'
export const ComponentCardInnerCard: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCard: ICardElement = {
      id: uuid(),
      type: FormGroupsTypes.Card,
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
    dispatch(setDraggableElement({ element: newCard }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, useAppDispatch } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementIcon } from '../../../../../../store/formElements/iconTypes'
import {
  setDraggableElement
} from '../../../../../../store'
export const ComponentCardIcon: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newIcon: IFormElementIcon = {
      id: uuid(),
      type: FormElementTypes.Icon,
      props: {
        view: 'primary',
        size: 'm',
        className: '',
        icons: 'IconAlert',
        baseProps: {},
      },
    }
    dispatch(setDraggableElement({ element: newIcon }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}

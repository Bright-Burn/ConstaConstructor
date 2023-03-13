import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormGroupsTypes,
  ILayoutElement,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'

export const ComponentCardOuterLayout: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const layoutElement: ILayoutElement = {
      id: uuid(),
      type: FormGroupsTypes.LayoutOuter,
      props: {
        constaProps: {
          flex: 1,
          direction: 'row',
        },
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: layoutElement }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
